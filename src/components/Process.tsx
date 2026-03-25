import { useRef, useEffect } from 'react'
import { MessageSquare, Layout, ShieldCheck, Rocket, TrendingUp } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsMobile } from '../hooks/useIsMobile'

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
    duration: '5–14 dias',
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
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      // Calculate from known values to avoid timing issues with DOM measurement
      const vw = window.innerWidth
      const cardWidth  = isMobile ? vw * 0.82 : 450
      const gap        = isMobile ? 14 : 40
      const padding    = isMobile ? 20 : 60
      const totalWidth = steps.length * cardWidth + (steps.length - 1) * gap + padding * 2
      const getAmount  = () => Math.max(0, totalWidth - vw)

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

      tl.to(track, { x: () => -getAmount(), ease: 'power1.inOut' }, 0)
      if (!isMobile) {
        tl.to(wordmarkRef.current, { x: () => -getAmount() * 0.2, ease: 'power1.inOut' }, 0)
      }

    }, sectionRef)

    // Refresh after paint so pin/end values are correctly applied
    const t = setTimeout(() => ScrollTrigger.refresh(), 100)

    return () => { clearTimeout(t); ctx.revert() }
  }, [isMobile])

  const cardW     = isMobile ? '82vw'  : '450px'
  const cardH     = isMobile ? '440px' : '520px'
  const cardPad   = isMobile ? '28px 24px' : '50px'
  const cardR     = isMobile ? '20px'  : '32px'
  const trackPad  = isMobile ? '0 20px' : '0 60px'
  const trackGap  = isMobile ? '14px'  : '40px'
  const headerPad = isMobile ? '0 20px' : '0 60px'
  const headerMb  = isMobile ? '28px'  : '60px'
  const innerSide = isMobile ? '24px'  : '50px'
  const innerBot  = isMobile ? '24px'  : '50px'

  return (
    <section
      id="processo"
      ref={sectionRef}
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
      {/* Background WordMark — desktop only */}
      {!isMobile && (
        <div
          ref={wordmarkRef}
          style={{
            position: 'absolute', top: '38%', left: 0, right: 0,
            textAlign: 'center', whiteSpace: 'nowrap',
            zIndex: 0, opacity: 0.03, pointerEvents: 'none', userSelect: 'none',
          }}
        >
          <span className="syne" style={{ fontSize: '35vh', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', display: 'inline-block', transform: 'translateX(2vw)' }}>
            WORKFLOW
          </span>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Header */}
        <div style={{ padding: headerPad, marginBottom: headerMb }}>
          <div className="reveal-up">
            <span className="section-label mono">Como Trabalhamos</span>
            <h2 className="syne" style={{ fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.85, marginTop: '16px' }}>
              Cinco etapas.<br />Zero surpresas.
            </h2>
          </div>
        </div>

        {/* Scrolling track */}
        <div ref={trackRef} style={{ display: 'flex', gap: trackGap, padding: trackPad }}>
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} style={{ width: cardW, flexShrink: 0 }}>
                <div style={{
                  padding: cardPad,
                  borderRadius: cardR,
                  border: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(8px)',
                  position: 'relative',
                  height: cardH,
                  boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                }}>
                  <div>
                    <div style={{
                      width: isMobile ? '48px' : '64px',
                      height: isMobile ? '48px' : '64px',
                      borderRadius: isMobile ? '14px' : '18px',
                      backgroundColor: `${s.accent}10`,
                      border: `1px solid ${s.accent}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: isMobile ? '20px' : '32px',
                    }}>
                      <Icon size={isMobile ? 22 : 28} color={s.accent} />
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: s.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: isMobile ? '8px' : '12px', display: 'block' }}>{s.tag}</span>
                    <h4 className="syne" style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 900, color: '#fff', marginBottom: isMobile ? '10px' : '16px', letterSpacing: '-0.03em' }}>{s.title}</h4>
                    <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#888', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.desc}</p>
                  </div>

                  <div style={{ position: 'absolute', left: innerSide, right: innerSide, bottom: innerBot }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '10px', marginBottom: isMobile ? '16px' : '24px', paddingBottom: isMobile ? '16px' : '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      {s.receives.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: s.accent, flexShrink: 0 }} />
                          <span style={{ fontSize: isMobile ? '12px' : '14px', color: '#ccc' }}>{item}</span>
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
  )
}
