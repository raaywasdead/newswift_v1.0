// Rate limit: 10 consultas por minuto por IP
const cnpjRequests = new Map()
const CNPJ_LIMIT = 10
const CNPJ_WINDOW = 60_000

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://newswift.com.br')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido.' })

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ?? 'unknown'
  const now = Date.now()
  const window = cnpjRequests.get(ip) ?? { count: 0, start: now }
  if (now - window.start > CNPJ_WINDOW) {
    cnpjRequests.set(ip, { count: 1, start: now })
  } else if (window.count >= CNPJ_LIMIT) {
    return res.status(429).json({ error: 'Muitas consultas. Tente em breve.' })
  } else {
    cnpjRequests.set(ip, { count: window.count + 1, start: window.start })
  }

  const raw = String(req.query.cnpj ?? '').replace(/\D/g, '')
  if (raw.length !== 14) return res.status(400).json({ error: 'CNPJ deve ter 14 dígitos.' })

  try {
    const upstream = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${raw}`)
    if (!upstream.ok) {
      const status = upstream.status === 404 ? 404 : 502
      return res.status(status).json({ error: status === 404 ? 'CNPJ não encontrado.' : 'Erro ao consultar Receita Federal.' })
    }
    const data = await upstream.json()
    res.status(200).json({
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
}
