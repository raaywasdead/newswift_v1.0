import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Wrench, Users, LayoutGrid, Clock, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Zap, n: '01', title: 'Agilidade',
    desc: 'Trabalhamos com metodologia ágil em sprints curtos. Nenhum projeto fica parado — entregamos resultados incrementais e mensuráveis desde a primeira semana.',
    detail: 'Sprints de 1–2 semanas',
  },
  {
    icon: Wrench, n: '02', title: 'Praticidade',
    desc: 'Do primeiro contato ao lançamento, eliminamos burocracia. Processo claro, documentação objetiva e decisões rápidas sem reuniões desnecessárias.',
    detail: 'Processo sem enrolação',
  },
  {
    icon: Users, n: '03', title: 'Juventude',
    desc: 'Crescemos junto com a internet. Dominamos as tecnologias mais modernas do mercado e enxergamos tendências que equipes mais antigas ainda não viram.',
    detail: 'Stack sempre atualizado',
  },
  {
    icon: LayoutGrid, n: '04', title: 'Organização',
    desc: 'Cada projeto tem escopo documentado, cronograma visível e comunicação centralizada. Você sempre sabe o que está sendo feito e o que vem a seguir.',
    detail: 'Rastreabilidade total',
  },
  {
    icon: Clock, n: '05', title: 'Pontualidade',
    desc: 'Cumprimos o que prometemos. Nosso histórico é zero projetos atrasados. Planejamos com margem real e comunicamos proativamente qualquer desvio.',
    detail: '0 projetos atrasados',
  },
  {
    icon: Heart, n: '06', title: 'Dedicação',
    desc: 'Não somos uma fábrica de sites. Tratamos cada cliente como parceiro de longo prazo, entendendo o negócio a fundo antes de escrever uma linha de código.',
    detail: 'Atenção individualizada',
  },
]

export default function Features() {
  const headerRef = useRef(null)
  const gridRef   = useRef(null)
  const headerIn  = useInView(headerRef, { once: true, margin: '-60px' })
  const gridIn    = useInView(gridRef,   { once: true, margin: '-60px' })

  return (
    <section id="diferenciais" style={{ backgroundColor: '#000', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}
        >
          <div>
            <span className="section-label mono">Por que a NewSwift</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginTop: '12px', lineHeight: 1.05 }}>
              O que você vai<br />
              <span style={{
                background: 'linear-gradient(130deg, #00FF88 0%, #00C896 60%, #009E78 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>sentir na prática.</span>
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#555', maxWidth: '320px', lineHeight: 1.75 }}>
            Cada item aqui é algo que você vai notar durante o projeto, não só ler no site.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', overflow: 'hidden', background: 'rgba(255,255,255,0.04)' }}>
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0 }}
                animate={gridIn ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ padding: '36px', borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '14px', cursor: 'default', backgroundColor: '#000', transition: 'background-color 0.18s ease' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.025)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#000' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,255,136,0.05)' }}>
                    <Icon size={18} style={{ color: '#00FF88' }} />
                  </div>
                  <span className="mono" style={{ fontSize: '11px', color: 'rgba(0,255,136,0.18)', fontWeight: 700, letterSpacing: '0.08em' }}>{p.n}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em' }}>{p.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.75, color: '#555' }}>{p.desc}</p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: '11px', color: '#00FF88', opacity: 0.6 }} className="mono">↳ {p.detail}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
