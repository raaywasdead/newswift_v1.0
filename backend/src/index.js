import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
const PORT = process.env.PORT || 3001
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
}))
app.use(express.json())

// ── POST /contact — envia e-mail via Resend ────────────────────────────────
app.post('/contact', async (req, res) => {
  const { name, email, company, cnpj, kind, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido.' })
  }

  const isEmpresa = kind === 'Empresa'

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090B; color: #fff; border-radius: 12px; overflow: hidden;">
      <div style="background: #00FF88; padding: 24px 32px;">
        <h1 style="margin: 0; color: #000; font-size: 22px;">Nova mensagem — NewSwift</h1>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 140px;">Tipo</td><td style="color: #fff;">${kind ?? 'Pessoa física'}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Nome</td><td style="color: #fff;">${name}</td></tr>
          ${isEmpresa ? `<tr><td style="padding: 8px 0; color: #888;">Empresa</td><td style="color: #fff;">${company ?? '—'}</td></tr>` : ''}
          ${isEmpresa ? `<tr><td style="padding: 8px 0; color: #888;">CNPJ</td><td style="color: #fff;">${cnpj ?? '—'}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #888;">E-mail</td><td style="color: #fff;"><a href="mailto:${email}" style="color: #00FF88;">${email}</a></td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;">
        <p style="color: #888; margin: 0 0 8px; font-size: 13px;">MENSAGEM</p>
        <p style="color: #e0e0e0; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
      </div>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'NewSwift <contato@newswift.com.br>',
      to: process.env.MAIL_TO,
      reply_to: email,
      subject: `[NewSwift] ${isEmpresa && company ? `${company} — ` : ''}${name}`,
      html,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    res.status(500).json({ error: 'Erro ao enviar e-mail.' })
  }
})

// ── GET /cnpj/:cnpj — lookup Receita Federal ───────────────────────────────
app.get('/cnpj/:cnpj', async (req, res) => {
  const raw = req.params.cnpj.replace(/\D/g, '')

  if (raw.length !== 14) {
    return res.status(400).json({ error: 'CNPJ deve ter 14 dígitos.' })
  }

  try {
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${raw}`)

    if (!response.ok) {
      if (response.status === 404) return res.status(404).json({ error: 'CNPJ não encontrado.' })
      return res.status(502).json({ error: 'Erro ao consultar Receita Federal.' })
    }

    const data = await response.json()

    res.json({
      cnpj: data.cnpj,
      razao_social: data.razao_social,
      nome_fantasia: data.nome_fantasia,
      situacao_cadastral: data.descricao_situacao_cadastral,
      natureza_juridica: data.natureza_juridica,
      porte: data.porte,
      endereco: {
        logradouro: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        municipio: data.municipio,
        uf: data.uf,
        cep: data.cep,
      },
    })
  } catch (err) {
    console.error('[cnpj]', err)
    res.status(500).json({ error: 'Erro interno ao consultar CNPJ.' })
  }
})

// ── Health check ───────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`NewSwift backend rodando em http://localhost:${PORT}`)
})
