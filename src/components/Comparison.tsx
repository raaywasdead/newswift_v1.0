import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

type Val = 'yes' | 'no' | 'partial' | string

interface Row {
  label: string
  sub?: string
  agency: Val
  freelancer: Val
  newswift: Val
}

const rows: Row[] = [
  { label: 'Stack moderno',          sub: 'React, Next.js, TypeScript', agency: 'partial', freelancer: 'partial', newswift: 'yes' },
  { label: 'Prazo cumprido',         sub: 'Entrega na data combinada',  agency: 'partial', freelancer: 'no',      newswift: 'yes' },
  { label: 'Preço acessível',        sub: 'Justo para PMEs',            agency: 'no',      freelancer: 'partial', newswift: 'yes' },
  { label: 'Comunicação direta',     sub: 'Sem burocracia',             agency: 'no',      freelancer: 'partial', newswift: 'yes' },
  { label: 'Você aprova o design',   sub: 'Protótipo antes do código',  agency: 'partial', freelancer: 'no',      newswift: 'yes' },
  { label: 'Suporte pós-entrega',    sub: '30 dias incluídos',          agency: 'partial', freelancer: 'no',      newswift: 'yes' },
  { label: 'UI/UX + Dev juntos',     sub: 'Mesma equipe, sem ruído',    agency: 'yes',     freelancer: 'no',      newswift: 'yes' },
]

const columns = [
  { key: 'agency',     label: 'Agência Tradicional', sub: 'Cara e lenta',          highlight: false },
  { key: 'freelancer', label: 'Freelancer Genérico',  sub: 'Imprevisível',           highlight: false },
  { key: 'newswift',   label: 'NewSwift',              sub: 'Ágil e profissional',   highlight: true  },
] as const

function Cell({ val, highlight }: { val: Val; highlight: boolean }) {
  if (val === 'yes') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: highlight ? 'rgba(0,200,150,0.15)' : 'rgba(0,200,150,0.06)', border: `1px solid ${highlight ? 'rgba(0,200,150,0.4)' : 'rgba(0,200,150,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Check size={13} style={{ color: '#00C896' }} strokeWidth={2.5} />
      </div>
    </div>
  )
  if (val === 'no') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X size={13} style={{ color: '#3a3a3a' }} strokeWidth={2} />
      </div>
    </div>
  )
  if (val === 'partial') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,200,0,0.04)', border: '1px solid rgba(255,200,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Minus size={13} style={{ color: '#665c00' }} strokeWidth={2} />
      </div>
    </div>
  )
  return <span style={{ fontSize: '12px', color: '#555' }}>{val}</span>
}

export default function Comparison() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="comparativo" style={{ backgroundColor: '#000', padding: '120px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label mono">Comparativo Honesto</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1.05, marginBottom: '14px' }}>
            A escolha que faz<br />
            <span style={{
              background: 'linear-gradient(130deg, #00FF88 0%, #00C896 60%, #009E78 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>toda a diferença.</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#555', maxWidth: '480px', lineHeight: 1.75 }}>
            A maioria dos clientes chega depois de uma experiência ruim com agência ou freelancer. Esse comparativo mostra por que a NewSwift funciona diferente.
          </p>
        </motion.div>

        {/* Table wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            {/* Column headers */}
            <thead>
              <tr>
                {/* Empty label cell */}
                <th style={{ padding: '24px 28px', textAlign: 'left', width: '40%', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontSize: '11px', color: '#333', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Critério</span>
                </th>
                {columns.map(col => (
                  <th
                    key={col.key}
                    style={{
                      padding: '0',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                      backgroundColor: col.highlight ? 'rgba(0,200,150,0.04)' : 'rgba(255,255,255,0.01)',
                      position: 'relative',
                    }}
                  >
                    {col.highlight && (
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00C896, transparent)' }} />
                    )}
                    <div style={{ padding: '20px 16px 18px' }}>
                      {col.highlight && (
                        <span style={{ display: 'inline-block', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00C896', backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.2)', padding: '2px 7px', borderRadius: '4px', marginBottom: '8px' }}>
                          Recomendado
                        </span>
                      )}
                      <div style={{ fontSize: '14px', fontWeight: 800, color: col.highlight ? '#fff' : '#444', letterSpacing: '-0.01em' }}>{col.label}</div>
                      <div style={{ fontSize: '11px', color: col.highlight ? '#00C896' : '#333', marginTop: '3px' }}>{col.sub}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                  style={{ borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                >
                  {/* Label */}
                  <td style={{ padding: '16px 28px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#ccc' }}>{row.label}</div>
                    {row.sub && <div style={{ fontSize: '11px', color: '#444', marginTop: '2px' }}>{row.sub}</div>}
                  </td>

                  {/* Cells */}
                  {columns.map(col => (
                    <td
                      key={col.key}
                      style={{
                        padding: '16px 12px',
                        textAlign: 'center',
                        borderLeft: '1px solid rgba(255,255,255,0.04)',
                        backgroundColor: col.highlight ? 'rgba(0,200,150,0.02)' : 'transparent',
                      }}
                    >
                      <Cell val={row[col.key]} highlight={col.highlight} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>

            {/* Footer CTA row */}
            <tfoot>
              <tr style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px 28px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontSize: '12px', color: '#333' }}>Pronto para começar?</span>
                </td>
                {columns.map(col => (
                  <td
                    key={col.key}
                    style={{
                      padding: '20px 12px',
                      textAlign: 'center',
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                      backgroundColor: col.highlight ? 'rgba(0,200,150,0.03)' : 'transparent',
                    }}
                  >
                    {col.highlight ? (
                      <a
                        href="#contato"
                        className="btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap' }}
                      >
                        Falar com a NS
                      </a>
                    ) : (
                      <span style={{ fontSize: '11px', color: '#2a2a2a' }}>—</span>
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px', justifyContent: 'flex-end' }}
        >
          {[
            { icon: <Check size={11} style={{ color: '#00C896' }} strokeWidth={2.5} />, label: 'Incluso' },
            { icon: <Minus size={11} style={{ color: '#665c00' }} strokeWidth={2} />,  label: 'Parcial / depende' },
            { icon: <X     size={11} style={{ color: '#3a3a3a' }} strokeWidth={2} />,  label: 'Não incluso' },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {l.icon}
              <span style={{ fontSize: '11px', color: '#333' }}>{l.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
