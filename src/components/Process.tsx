import { useRef, useEffect } from 'react'
import { MessageSquare, Layout, ShieldCheck, Rocket, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01', icon: MessageSquare,
    title: 'Consultoria',
    tag: 'Ponto de Partida',
    desc: 'Conversa franca para entender seu negócio e objetivos. Definimos a melhor tecnologia e o caminho mais curto para seus resultados.',
    receives: ['Escopo técnico detalhado', 'Proposta de investimento', 'Cronograma de entregas'],
    duration: '30–60 min',
    accent: '#00FF88',
  },
  {
    n: '02', icon: Layout,
    title: 'Criação do Site',
    tag: 'Identidade',
    desc: 'Transformamos a estratégia em realidade visual e funcional. Criamos um site moderno, rápido e focado em converter seus visitantes em clientes.',
    receives: ['Design exclusivo', 'Desenvolvimento otimizado', 'Site 100% responsivo'],
    duration: '7–10 dias',
    accent: '#8B5CF6',
  },
  {
    n: '03', icon: ShieldCheck,
    title: 'Site Seguro',
    tag: 'Proteção Total',
    desc: 'Não apenas criamos, protegemos. Implementamos as melhores práticas de segurança e performance para garantir que seu site seja rápido e blindado.',
    receives: ['Certificado SSL configurado', 'Proteção contra invasões', 'Otimização de velocidade'],
    duration: '1–2 dias',
    accent: '#00C896',
  },
  {
    n: '04', icon: Rocket,
    title: 'Entrega Final',
    tag: 'Lançamento',
    desc: 'Com tudo testado e aprovado, colocamos seu projeto no ar e entregamos todos os acessos. Você assume o controle com nosso suporte total.',
    receives: ['Site publicado e online', 'Acessos administrativos', 'Suporte pós-entrega'],
    duration: '1 dia',
    accent: '#FFD700',
  },
  {
    n: '05', icon: TrendingUp,
    title: 'Evolução Contínua',
    tag: 'Próximo Nível',
    desc: 'Seu site não é estático. Acompanhamos dados de acesso e sugerimos melhorias para manter sua presença digital relevante.',
    receives: ['Relatórios de performance', 'Sugestões de melhorias', 'Suporte prioritário'],
    duration: 'Longo Prazo',
    accent: '#00FF88',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use matchMedia directly — more reliable than React state for GSAP setup
    if (!window.matchMedia('(min-width: 768px)').matches) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const vw = window.innerWidth
      const cardWidth = 450
      const gap = 40
      const padding = 60
      const totalWidth = steps.length * cardWidth + (steps.length - 1) * gap + padding * 2
      const getAmount = () => Math.max(0, totalWidth - vw)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getAmount()}`,
          pin: true,
          scrub: 2,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      })

      // Horizontal movement
      tl.to(track, { x: () => -getAmount(), ease: 'none' }, 0)
      tl.to(wordmarkRef.current, { x: () => -getAmount() * 0.2, ease: 'none' }, 0)

    }, sectionRef)

    const t = setTimeout(() => ScrollTrigger.refresh(), 100)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div id="processo">

      {/* ── Mobile: vertical timeline (hidden on desktop via CSS) ── */}
      <section className="process-mobile" style={{ backgroundColor: '#09090B', padding: '80px 0 60px', position: 'relative' }}>
        <div className="reveal-up" style={{ padding: '0 20px', marginBottom: '40px' }}>
          <span className="section-label mono">Como Trabalhamos</span>
          <h2 className="syne" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.9, marginTop: '16px' }}>
            Cinco etapas.<br />Zero surpresas.
          </h2>
        </div>

        <div className="reveal-stagger" style={{ padding: '0 20px', display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => {
            const Icon = s.icon
            const isLast = i === steps.length - 1
            return (
              <div key={s.n} className="process-card" style={{ display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: `${s.accent}12`, border: `1px solid ${s.accent}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={18} color={s.accent} />
                  </div>
                  {!isLast && <div style={{ width: '1px', flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', margin: '6px 0' }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: isLast ? 0 : '28px', minWidth: 0 }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: s.accent, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', marginTop: '8px' }}>{s.tag}</span>
                  <h4 className="syne" style={{ fontSize: '20px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.65, marginBottom: '14px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
                    {s.receives.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: s.accent, flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', color: '#aaa' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mono" style={{ fontSize: '11px', color: '#444' }}>Duração: <strong style={{ color: '#888' }}>{s.duration}</strong></span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Desktop: horizontal pin scroll (hidden on mobile via CSS) ── */}
      <section
        ref={sectionRef}
        className="process-desktop"
        style={{
          backgroundColor: '#09090B',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div ref={wordmarkRef} style={{ position: 'absolute', top: '38%', left: 0, right: 0, textAlign: 'center', whiteSpace: 'nowrap', zIndex: 0, opacity: 0.03, pointerEvents: 'none', userSelect: 'none' }}>
          <span className="syne" style={{ fontSize: '35vh', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', display: 'inline-block', transform: 'translateX(2vw)' }}>
            WORKFLOW
          </span>
        </div>

        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ padding: '0 60px', marginBottom: 'clamp(20px, 4vh, 60px)' }}>
            <div className="reveal-up">
              <span className="section-label mono">Como Trabalhamos</span>
              <h2 className="syne" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.85, marginTop: '16px' }}>
                Cinco etapas.<br />Zero surpresas.
              </h2>
            </div>
          </div>

          <div ref={trackRef} style={{ display: 'flex', gap: '40px', padding: '0 60px' }}>
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.n} className="process-card-wrapper" style={{ width: '450px', flexShrink: 0 }}>
                  <div 
                    className="process-card"
                    style={{ 
                      padding: 'clamp(24px, 3.2vh, 50px)', 
                      borderRadius: '32px', 
                      border: '1px solid rgba(255,255,255,0.06)', 
                      backgroundColor: 'rgba(255,255,255,0.02)', 
                      backdropFilter: 'blur(8px)', 
                      position: 'relative', 
                      height: 'clamp(360px, calc(100vh - 240px), 520px)', 
                      boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                      cursor: 'default'
                    }}
                  >
                    <div>
                      <div style={{ width: 'clamp(48px, 6vh, 64px)', height: 'clamp(48px, 6vh, 64px)', borderRadius: '18px', backgroundColor: `${s.accent}10`, border: `1px solid ${s.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'clamp(16px, 2.5vh, 32px)' }}>
                        <Icon size={28} color={s.accent} />
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: s.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>{s.tag}</span>
                      <h4 className="syne" style={{ fontSize: 'clamp(22px, 2.8vh, 32px)', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '-0.03em' }}>{s.title}</h4>
                      <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.desc}</p>
                    </div>
                    <div style={{ position: 'absolute', left: 'clamp(24px, 3.2vh, 50px)', right: 'clamp(24px, 3.2vh, 50px)', bottom: 'clamp(20px, 3vh, 50px)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 1vh, 10px)', marginBottom: 'clamp(14px, 2vh, 24px)', paddingBottom: 'clamp(14px, 2vh, 24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        {s.receives.map(item => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: s.accent, flexShrink: 0 }} />
                            <span style={{ fontSize: '13px', color: '#ccc' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <span className="mono" style={{ fontSize: '11px', color: '#555' }}>Duração: <strong style={{ color: '#fff' }}>{s.duration}</strong></span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
