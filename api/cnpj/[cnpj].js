export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://newswift.com.br')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido.' })

  const raw = String(req.query.cnpj ?? '').replace(/\D/g, '')
  if (raw.length !== 14) return res.status(400).json({ error: 'CNPJ deve ter 14 dígitos.' })

  const apis = [
    {
      url: `https://publica.cnpj.ws/cnpj/${raw}`,
      map: (d) => ({
        cnpj: d.cnpj,
        razao_social: d.razao_social,
        nome_fantasia: d.estabelecimento?.nome_fantasia ?? null,
        situacao_cadastral: d.estabelecimento?.situacao_cadastral ?? null,
        natureza_juridica: d.natureza_juridica?.descricao ?? null,
        porte: d.porte?.descricao ?? null,
        endereco: {
          logradouro: d.estabelecimento?.logradouro ?? null,
          numero: d.estabelecimento?.numero ?? null,
          complemento: d.estabelecimento?.complemento ?? null,
          bairro: d.estabelecimento?.bairro ?? null,
          municipio: d.estabelecimento?.cidade?.nome ?? null,
          uf: d.estabelecimento?.estado?.sigla ?? null,
          cep: d.estabelecimento?.cep ?? null,
        },
      }),
    },
    {
      url: `https://brasilapi.com.br/api/cnpj/v1/${raw}`,
      map: (d) => ({
        cnpj: d.cnpj,
        razao_social: d.razao_social,
        nome_fantasia: d.nome_fantasia,
        situacao_cadastral: d.descricao_situacao_cadastral,
        natureza_juridica: d.natureza_juridica,
        porte: d.porte,
        endereco: {
          logradouro: d.logradouro,
          numero: d.numero,
          complemento: d.complemento,
          bairro: d.bairro,
          municipio: d.municipio,
          uf: d.uf,
          cep: d.cep,
        },
      }),
    },
  ]

  let lastErr = null
  for (const api of apis) {
    try {
      const upstream = await fetch(api.url, { headers: { Accept: 'application/json' } })
      if (upstream.status === 404) return res.status(404).json({ error: 'CNPJ não encontrado.' })
      if (!upstream.ok) { lastErr = upstream.status; continue }
      const data = await upstream.json()
      return res.status(200).json(api.map(data))
    } catch (err) {
      console.error('[cnpj] api error', api.url, err)
      lastErr = err
    }
  }

  console.error('[cnpj] all apis failed', lastErr)
  res.status(502).json({ error: 'Erro ao consultar Receita Federal.' })
}
