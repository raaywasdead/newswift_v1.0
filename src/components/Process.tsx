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
    desc: 'Seu site não é estático. Acompanhamos os dados de acesso e sugerimos melhorias contínuas para manter sua presença digital sempre relevante e eficiente.',
    receives: ['Relatórios de performance', 'Sugestões de melhorias', 'Suporte prioritário'],
    duration: 'Longo Prazo',
    accent: '#00FF88',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wordmarkSpanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

        const getScrollAmount = () => {
        const trackWidth = track.scrollWidth
        const vw = window.innerWidth
        let amount = trackWidth - vw
        amount = Math.max(0, amount) 
        return amount
      }

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      })

      // Background wordmark movement synchronized with scroll
      gsap.fromTo(wordmarkSpanRef.current, 
        { x: '0%', left: '2vw' },
        {
          x: '-100%',
          left: '95vw',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="processo" ref={sectionRef} style={{ backgroundColor: '#09090B', height: '100vh', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      
      {/* Background Cinematography WordMark */}
      <div style={{ position: 'absolute', bottom: '10%', left: 0, right: 0, display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: -1, opacity: 0.025 }}>
        <span ref={wordmarkSpanRef} className="mono" style={{ position: 'absolute', fontSize: '26vw', fontWeight: 900, whiteSpace: 'nowrap', userSelect: 'none', letterSpacing: '-0.05em', color: '#fff' }}>WORKFLOW</span>
      </div>

      {/* Header Zone: Top 30% - Shifted up */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '30vh', display: 'flex', alignItems: 'flex-start', paddingTop: '8vh', paddingLeft: '40px', paddingRight: '40px', zIndex: 10, pointerEvents: 'none' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div
            className="reveal-up"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '40px'
            }}
          >
            <div>
              <span className="section-label mono">Como Trabalhamos</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', marginTop: '12px', lineHeight: 0.9 }}>
                Cinco etapas.<br />Zero surpresas.
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: '#666', maxWidth: '300px', lineHeight: 1.7, display: 'none' /* Hidden in mobile or tight spaces if needed, but keeping for now */ }}>
              Um ecossistema de produção pensado na clareza. Você aprova o passo atual antes de construirmos o próximo.
            </p>
          </div>
        </div>
      </div>

      {/* Card Zone: Bottom 74% - Slightly increased and moved up */}
      <div style={{ height: '74%', position: 'absolute', bottom: 0, left: 0, width: '100%', display: 'flex', alignItems: 'flex-start', paddingTop: '4vh', zIndex: 10 }}>
        {/* Track Container */}
        <div ref={trackRef} style={{ display: 'flex', gap: '32px', padding: '0 40px' }}>
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="reveal-up" style={{ width: 'clamp(320px, 28vw, 440px)', flexShrink: 0 }}>
                {/* Process Card - Height Limited to Zone */}
                <div style={{ 
                  padding: '40px', 
                  borderRadius: '28px', 
                  border: '1px solid rgba(255,255,255,0.06)', 
                  backgroundColor: 'rgba(255,255,255,0.02)', 
                  backdropFilter: 'blur(24px) saturate(160%)', 
                  position: 'relative', 
                  overflow: 'hidden',
                  maxHeight: '62vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 64px 120px -40px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.03)'
                }}>
                  <div>
                    {/* Icon */}
                    <div style={{ 
                      width: '56px', height: '56px', borderRadius: '16px', 
                      border: `1px solid ${s.accent}25`, 
                      backgroundColor: `${s.accent}08`, 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      marginBottom: '24px', 
                      boxShadow: `0 20px 40px ${s.accent}08`, 
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <Icon size={24} color={s.accent} strokeWidth={1.5} />
                    </div>

                    {/* Tag */}
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 800, color: s.accent, letterSpacing: '0.12em', textTransform: 'uppercase', backgroundColor: `${s.accent}10`, padding: '5px 12px', borderRadius: '100px', border: `1px solid ${s.accent}25` }}>{s.tag}</span>
                    </div>

                    <h4 className="syne" style={{ fontSize: '28px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', lineHeight: 1.1 }}>{s.title}</h4>
                    <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, marginBottom: '24px' }}>{s.desc}</p>
                  </div>

                  <div>
                    <div style={{ padding: '24px 0 0', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                      {s.receives.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: s.accent, flexShrink: 0, boxShadow: `0 0 10px ${s.accent}` }} />
                          <span style={{ fontSize: '13px', color: '#ccc' }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <div style={{ width: '8px', height: '1px', backgroundColor: '#333' }} />
                       <span className="mono" style={{ fontSize: '10px', color: '#555', letterSpacing: '0.05em' }}>EST_TIME: <strong style={{ color: '#fff', fontWeight: 800 }}>{s.duration}</strong></span>
                    </div>
                  </div>

                  {/* Background Number Label */}
                  <span className="mono" style={{ 
                    fontSize: '80px', 
                    fontWeight: 900, 
                    color: 'rgba(255,255,255,0.03)', 
                    letterSpacing: '-0.07em', 
                    position: 'absolute', 
                    bottom: '-8px', 
                    right: '12px', 
                    lineHeight: 1,
                    pointerEvents: 'none',
                    zIndex: 0
                  }}>{s.n}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation HUD Placeholder */}
      <div style={{ position: 'absolute', bottom: '32px', right: '40px', zIndex: 20 }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="mono" style={{ fontSize: '10px', color: '#444', letterSpacing: '0.1em' }}>SCROLL_TO_ADVANCE</span>
            <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
               <motion.div 
                 style={{ height: '100%', backgroundColor: '#00FF88', width: '30%' }} 
                 animate={{ x: [0, 50, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
               />
            </div>
         </div>
      </div>

    </section>
  )
}
