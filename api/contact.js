import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function validarCNPJ(cnpj) {
  const n = cnpj.replace(/\D/g, '')
  if (n.length !== 14 || /^(\d)\1+$/.test(n)) return false
  const calc = (s, w) => {
    const sum = s.split('').reduce((a, d, i) => a + parseInt(d) * w[i], 0)
    const r = sum % 11
    return r < 2 ? 0 : 11 - r
  }
  const d1 = calc(n.slice(0, 12), [5,4,3,2,9,8,7,6,5,4,3,2])
  const d2 = calc(n.slice(0, 13), [6,5,4,3,2,9,8,7,6,5,4,3,2])
  return d1 === parseInt(n[12]) && d2 === parseInt(n[13])
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://newswift.com.br')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' })

  // Tamanho máximo do body
  const body = req.body ?? {}
  if (JSON.stringify(body).length > 8000)
    return res.status(413).json({ error: 'Requisição muito grande.' })

  const { name, email, company, cnpj, kind, message } = body

  // Validação — kind whitelist
  if (!['Pessoa física', 'Empresa'].includes(kind))
    return res.status(400).json({ error: 'Tipo inválido.' })

  // Validação básica
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ error: 'E-mail inválido.' })

  // Validação de CNPJ no backend
  if (kind === 'Empresa' && !validarCNPJ(cnpj ?? ''))
    return res.status(400).json({ error: 'CNPJ inválido.' })

  // Sanitização — remove tags HTML e quebras de linha (previne header injection)
  const clean = (s, limit = 500) =>
    String(s ?? '').replace(/<[^>]*>/g, '').replace(/[\r\n]/g, ' ').trim().slice(0, limit)

  const isEmpresa = kind === 'Empresa'
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0c;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0c;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr>
          <td style="background:#09090B;border-radius:16px 16px 0 0;border:1px solid #1a1a1f;border-bottom:none;padding:32px 40px;text-align:center;">
            <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.03em;">
              New<span style="color:#00FF88;">Swift</span>
            </div>
            <div style="margin-top:4px;font-size:11px;color:#333;letter-spacing:0.12em;text-transform:uppercase;">newswift.com.br</div>
          </td>
        </tr>

        <!-- BADGE -->
        <tr>
          <td style="background:#09090B;border-left:1px solid #1a1a1f;border-right:1px solid #1a1a1f;padding:0 40px;">
            <div style="border-top:1px solid #1a1a1f;padding:24px 0 0;">
              <span style="display:inline-block;background:rgba(0,255,136,0.08);border:1px solid rgba(0,255,136,0.2);color:#00FF88;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:5px 14px;border-radius:100px;">
                ● Nova mensagem recebida
              </span>
            </div>
          </td>
        </tr>

        <!-- HEADLINE -->
        <tr>
          <td style="background:#09090B;border-left:1px solid #1a1a1f;border-right:1px solid #1a1a1f;padding:16px 40px 32px;">
            <h1 style="margin:0;font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.04em;line-height:1.1;">
              ${isEmpresa ? clean(company) || clean(name) : clean(name)}
            </h1>
            <p style="margin:8px 0 0;font-size:13px;color:#555;">${clean(kind)}</p>
          </td>
        </tr>

        <!-- FIELDS -->
        <tr>
          <td style="background:#09090B;border-left:1px solid #1a1a1f;border-right:1px solid #1a1a1f;padding:0 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1a1a1f;border-radius:12px;overflow:hidden;">
              ${[
                ['Nome', clean(name)],
                ...(isEmpresa ? [['Empresa', clean(company) || '—'], ['CNPJ', clean(cnpj) || '—']] : []),
                ['E-mail', `<a href="mailto:${clean(email)}" style="color:#00FF88;text-decoration:none;">${clean(email)}</a>`],
              ].map(([label, value], i, arr) => `
              <tr>
                <td style="padding:14px 20px;background:#0e0e12;border-bottom:${i < arr.length - 1 ? '1px solid #1a1a1f' : 'none'};width:120px;">
                  <span style="font-size:11px;font-weight:700;color:#444;text-transform:uppercase;letter-spacing:0.08em;">${label}</span>
                </td>
                <td style="padding:14px 20px;background:#0e0e12;border-bottom:${i < arr.length - 1 ? '1px solid #1a1a1f' : 'none'};">
                  <span style="font-size:13px;color:#e0e0e0;">${value}</span>
                </td>
              </tr>`).join('')}
            </table>
          </td>
        </tr>

        <!-- MESSAGE -->
        <tr>
          <td style="background:#09090B;border-left:1px solid #1a1a1f;border-right:1px solid #1a1a1f;padding:0 40px 40px;">
            <div style="background:#0e0e12;border:1px solid #1a1a1f;border-radius:12px;padding:24px;">
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#444;letter-spacing:0.12em;text-transform:uppercase;">Mensagem</p>
              <p style="margin:0;font-size:14px;color:#ccc;line-height:1.8;white-space:pre-wrap;">${clean(message, 2000)}</p>
            </div>
          </td>
        </tr>

        <!-- REPLY CTA -->
        <tr>
          <td style="background:#09090B;border-left:1px solid #1a1a1f;border-right:1px solid #1a1a1f;border-bottom:1px solid #1a1a1f;border-radius:0 0 16px 16px;padding:0 40px 40px;text-align:center;">
            <a href="mailto:${clean(email)}" style="display:inline-block;background:#00FF88;color:#000;font-size:12px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:100px;">
              Responder para ${clean(name).split(' ')[0]}
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="padding:24px 0;text-align:center;">
            <p style="margin:0;font-size:11px;color:#2a2a2a;">NewSwift · newswift.com.br · contato@newswift.com.br</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

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
