import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
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
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth
        const vw = window.innerWidth
        return Math.max(0, trackWidth - vw)
      }

      const totalScroll = getScrollAmount()

      // Master Timeline for pinning and horizontal movement
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 2,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      tl.to(track, {
        x: () => -totalScroll,
        ease: "power1.inOut"
      }, 0)

      // Background Wordmark movement
      tl.to(wordmarkRef.current, {
        x: () => -totalScroll * 0.2,
        ease: "power1.inOut"
      }, 0)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
        justifyContent: 'center'
      }}
    >
      
      {/* Background WordMark */}
      <div
        ref={wordmarkRef}
        style={{
          position: 'absolute',
          top: '38%',
          left: 0,
          right: 0,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          zIndex: 0,
          opacity: 0.03,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <span className="syne" style={{ fontSize: '35vh', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', display: 'inline-block', transform: 'translateX(2vw)' }}>
          WORKFLOW
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Header - Integrated back into the section flow */}
        <div style={{ padding: '0 60px', marginBottom: '60px' }}>
          <div className="reveal-up">
            <span className="section-label mono">Como Trabalhamos</span>
            <h2 className="syne" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.85, marginTop: '16px' }}>
              Cinco etapas.<br />Zero surpresas.
            </h2>
          </div>
        </div>

        {/* Track Container - Restored to large proportions */}
        <div ref={trackRef} style={{ display: 'flex', gap: '40px', padding: '0 60px' }}>
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} style={{ width: '450px', flexShrink: 0 }}>
                <div style={{
                  padding: '50px',
                  borderRadius: '32px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(8px)',
                  position: 'relative',
                  height: '520px',
                  boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)'
                }}>
                  <div>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '18px',
                      backgroundColor: `${s.accent}10`,
                      border: `1px solid ${s.accent}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '32px'
                    }}>
                      <Icon size={28} color={s.accent} />
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: s.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>{s.tag}</span>
                    <h4 className="syne" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '16px', letterSpacing: '-0.03em' }}>{s.title}</h4>
                    <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.desc}</p>
                  </div>

                  <div style={{ position: 'absolute', left: '50px', right: '50px', bottom: '50px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                       {s.receives.map(item => (
                         <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: s.accent }} />
                           <span style={{ fontSize: '14px', color: '#ccc' }}>{item}</span>
                         </div>
                       ))}
                    </div>
                    <span className="mono" style={{ fontSize: '11px', color: '#555' }}>Duração: <strong style={{ color: '#fff' }}>{s.duration}</strong></span>
                  </div>

                  {/* Removed numbering on background as per request */}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Nav Hint */}
      <div style={{ position: 'absolute', bottom: '40px', right: '60px', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="mono" style={{ fontSize: '10px', color: '#444', letterSpacing: '0.1em' }}>SCROLL TO EXPLORE</span>
          <div style={{ width: '100px', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <motion.div 
              style={{ height: '100%', backgroundColor: '#00FF88', width: '30%' }}
              animate={{ x: [0, 70, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>

    </section>
  )
}
