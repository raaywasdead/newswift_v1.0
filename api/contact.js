import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://newswift.com.br')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' })

  const { name, email, company, cnpj, kind, message } = req.body ?? {}

  // Validação básica
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ error: 'E-mail inválido.' })

  // Sanitização — remove tags HTML
  const clean = (s) => String(s ?? '').replace(/<[^>]*>/g, '').trim().slice(0, 2000)

  const isEmpresa = kind === 'Empresa'
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#09090B;color:#fff;border-radius:12px;overflow:hidden;">
      <div style="background:#00FF88;padding:24px 32px;">
        <h1 style="margin:0;color:#000;font-size:22px;">Nova mensagem — NewSwift</h1>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#888;width:140px;">Tipo</td><td style="color:#fff;">${clean(kind) || 'Pessoa física'}</td></tr>
          <tr><td style="padding:8px 0;color:#888;">Nome</td><td style="color:#fff;">${clean(name)}</td></tr>
          ${isEmpresa ? `<tr><td style="padding:8px 0;color:#888;">Empresa</td><td style="color:#fff;">${clean(company) || '—'}</td></tr>` : ''}
          ${isEmpresa ? `<tr><td style="padding:8px 0;color:#888;">CNPJ</td><td style="color:#fff;">${clean(cnpj) || '—'}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#888;">E-mail</td><td style="color:#fff;"><a href="mailto:${clean(email)}" style="color:#00FF88;">${clean(email)}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #222;margin:24px 0;">
        <p style="color:#888;margin:0 0 8px;font-size:13px;">MENSAGEM</p>
        <p style="color:#e0e0e0;line-height:1.7;white-space:pre-wrap;margin:0;">${clean(message)}</p>
      </div>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'NewSwift <contato@newswift.com.br>',
      to: process.env.MAIL_TO,
      reply_to: clean(email),
      subject: `[NewSwift] ${isEmpresa && company ? `${clean(company)} — ` : ''}${clean(name)}`,
      html,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    res.status(500).json({ error: 'Erro ao enviar e-mail.' })
  }
}
