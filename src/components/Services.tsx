import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Globe, Palette, Gauge, CheckCircle, ChevronDown, ArrowUpRight, LayoutTemplate } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    subtitle: 'Do zero ao ar em até 30 dias',
    summary: 'Sites e sistemas modernos em React / Next.js, otimizados para conversão e SEO.',
    deliverables: [
      'Design exclusivo baseado na sua marca',
      'Desenvolvimento React / Next.js',
      'SEO técnico on-page incluso',
      'Responsivo para todos os dispositivos',
      'Integração com analytics e CRM',
      'Painel de edição sem precisar de devs',
      '30 dias de suporte pós-lançamento',
    ],
    timeline: '10–21 dias',
    tags: ['React', 'Next.js', 'TypeScript', 'Vercel'],
    featured: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Interfaces que encantam e convertem',
    summary: 'Protótipos no Figma, sistemas de design e identidade visual antes de uma linha de código.',
    deliverables: [
      'Pesquisa e mapeamento de usuário',
      'Wireframes e fluxos de navegação',
      'Protótipo interativo no Figma',
      'Design system completo',
      'Guia de uso para sua equipe',
      'Revisões ilimitadas no processo',
    ],
    timeline: '7–14 dias',
    tags: ['Figma', 'Design System', 'Protótipo'],
    featured: false,
  },
  {
    icon: Gauge,
    title: 'Otimização de Performance',
    subtitle: 'Acelere o site que você já tem',
    summary: 'Diagnóstico e correção de Core Web Vitals, SEO técnico e taxa de conversão do seu site atual.',
    deliverables: [
      'Auditoria técnica com relatório',
      'Otimização de Core Web Vitals (LCP, FID, CLS)',
      'Compressão e lazy load de imagens',
      'Correções de SEO técnico',
      'Análise de taxa de conversão',
      'Relatório comparativo antes/depois',
    ],
    timeline: '5–10 dias',
    tags: ['PageSpeed', 'Web Vitals', 'SEO'],
    featured: false,
  },
  {
    icon: LayoutTemplate,
    title: 'Templates Premium',
    subtitle: 'Estruturas prontas para seu próximo projeto',
    summary: 'Projetos completos e sofisticados em React e Next.js com foco em animação. Ideais para startups, agências e desenvolvedores que buscam agilizar o processo sem abrir mão de um visual profissional.',
    deliverables: [
      'Código limpo com React, TypeScript e Tailwind',
      'Animações modernas já implementadas',
      'Acessibilidade e responsividade vitais',
      'Download instantâneo do repositório',
      'Suporte básico inicial de 30 dias',
    ],
    timeline: 'Download Imediato',
    tags: ['Templates', 'React', 'Next.js'],
    featured: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="servicos" style={{ backgroundColor: '#09090B', padding: '120px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '48px' }}>
            <div>
              <span className="section-label mono">O Que Fazemos</span>
              <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '12px', lineHeight: 0.95, marginBottom: '20px' }}>
                Do design<br />ao lançamento.
              </h2>
              <p style={{ fontSize: '14px', color: '#8888a0', maxWidth: '420px', lineHeight: 1.8 }}>
                Prazo definido, escopo documentado, resultado mensurável. Clique em cada serviço para ver o que está incluso.
              </p>
            </div>

            {/* Trust pills — stacked on the right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '4px' }}>
              {[
                { label: 'Ágil como freelancer' },
                { label: 'Confiável como agência' },
                { label: 'Preço justo pra PMEs' },
              ].map(p => (
                <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 14px', borderRadius: '100px', border: '1px solid rgba(0,255,136,0.12)', backgroundColor: 'rgba(0,255,136,0.03)' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00FF88', opacity: 0.6, flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: '#8888a0', fontWeight: 600, whiteSpace: 'nowrap' }}>{p.label}</span>
                </div>
            ))}
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {services.map((s, i) => {
            const Icon = s.icon
            const isOpen = expanded === s.title
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  borderRadius: '16px',
                  border: isOpen
                    ? '1px solid rgba(0,255,136,0.3)'
                    : s.featured
                      ? '1px solid rgba(0,255,136,0.14)'
                      : '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: isOpen ? 'rgba(0,255,136,0.03)' : 'rgba(255,255,255,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, background 0.2s',
                  boxShadow: isOpen ? '0 0 0 1px rgba(0,255,136,0.06), 0 20px 60px rgba(0,0,0,0.4)' : 'none',
                }}
              >
                {/* Header row — always visible */}
                <button
                  onClick={() => setExpanded(isOpen ? null : s.title)}
                  style={{
                    all: 'unset', display: 'flex', alignItems: 'center', gap: '16px',
                    width: '100%', padding: '22px 28px', cursor: 'pointer', boxSizing: 'border-box',
                  }}
                >
                  {/* Icon */}
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: isOpen ? 'rgba(0,200,150,0.1)' : 'rgba(0,200,150,0.06)', border: `1px solid rgba(0,200,150,${isOpen ? '0.2' : '0.1'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                    <Icon size={19} style={{ color: '#00C896' }} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.title}</span>
                      {s.featured && !isOpen && (
                        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00C896', backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.2)', padding: '2px 6px', borderRadius: '4px' }}>Popular</span>
                      )}
                    </div>
                    <p style={{ fontSize: '12px', color: isOpen ? '#00C896' : '#444', transition: 'color 0.2s' }}>{s.subtitle}</p>
                  </div>

                  {/* Tags — only when closed */}
                  {!isOpen && (
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '240px' }}>
                      {s.tags.slice(0, 3).map(t => (
                        <span key={t} style={{ fontSize: '10px', color: '#444', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2px 7px', borderRadius: '4px' }}>{t}</span>
                      ))}
                    </div>
                  )}

                  {/* Chevron */}
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={16} style={{ color: '#444', flexShrink: 0 }} />
                  </motion.div>
                </button>

                {/* Expanded body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 28px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

                        {/* Summary + CTA */}
                        <div style={{ paddingTop: '24px' }}>
                          <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#666', marginBottom: '20px' }}>{s.summary}</p>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                            <div>
                             <span style={{ fontSize: '11px', color: '#666677' }}>Prazo estimado</span>
                              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>{s.timeline}</div>
                            </div>
                            <a href="#contato" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#00C896', textDecoration: 'none' }}
                              onMouseEnter={e => (e.currentTarget.style.gap = '9px')}
                              onMouseLeave={e => (e.currentTarget.style.gap = '5px')}
                            >
                              Solicitar orçamento <ArrowUpRight size={13} />
                            </a>
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div style={{ paddingTop: '24px' }}>
                          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333', marginBottom: '14px' }}>Incluso</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {s.deliverables.map(d => (
                              <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                                <CheckCircle size={13} style={{ color: '#00C896', marginTop: '1px', flexShrink: 0, opacity: 0.7 }} />
                                <span style={{ fontSize: '12px', color: '#9090a8', lineHeight: 1.5 }}>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
