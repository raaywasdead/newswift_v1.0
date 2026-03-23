import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, FileSearch, Code2, Rocket } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01', icon: MessageSquare, side: 'left' as const,
    title: 'Consultoria',
    tag: 'Gratuita · sem compromisso',
    desc: 'Uma conversa onde entendemos seu negócio e mostramos ideias visuais de como seu site pode ficar. Você só decide seguir em frente quando quiser.',
    receives: ['Ideias visuais do site', 'Proposta com escopo e prazo', 'Cronograma inicial'],
    duration: '30–60 min',
  },
  {
    n: '02', icon: FileSearch, side: 'right' as const,
    title: 'Planejamento & Design',
    tag: 'Você aprova cada tela',
    desc: 'Protótipos navegáveis no Figma com revisões ilimitadas. Nenhum código começa antes da sua aprovação.',
    receives: ['Protótipo navegável no Figma', 'Mapa do site', 'Especificação técnica'],
    duration: '5–10 dias',
  },
  {
    n: '03', icon: Code2, side: 'left' as const,
    title: 'Desenvolvimento',
    tag: 'Sprints semanais com preview',
    desc: 'Entregas incrementais toda semana. Você acompanha o progresso ao vivo e aprova cada sprint antes do próximo começar.',
    receives: ['Preview ao vivo por sprint', 'Updates semanais', 'Código no Git'],
    duration: '1–2 semanas',
  },
  {
    n: '04', icon: Rocket, side: 'right' as const,
    title: 'Lançamento & Suporte',
    tag: '30 dias de suporte incluídos',
    desc: 'Deploy, domínio, analytics e treinamento da sua equipe. Suporte prioritário por 30 dias sem custo adicional.',
    receives: ['Site em produção', 'Treinamento da equipe', '30 dias de suporte'],
    duration: '1–3 dias',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef  = useRef(null)
  const headerIn   = useInView(headerRef, { once: true, margin: '-60px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const roadmapEl = document.getElementById('process-roadmap')
      if (!roadmapEl) return

      // Set all initial states
      steps.forEach((s, i) => {
        gsap.set(`#step-card-${i}`,       { opacity: 0, x: s.side === 'left' ? -40 : 40 })
        gsap.set(`#step-node-${i}`,       { borderColor: 'rgba(255,255,255,0.08)', boxShadow: 'none', backgroundColor: '#000' })
        gsap.set(`#step-icon-svg-${i}`,   { color: '#242424' })
        gsap.set(`#step-num-${i}`,        { color: '#1a1a1a' })
        gsap.set(`#step-card-border-${i}`,{ borderColor: 'rgba(255,255,255,0.05)' })
      })

      // Measure each node's center Y as a fraction of roadmap height
      // getBoundingClientRect difference is scroll-invariant (relative positions stay constant)
      let fractions: number[] = []
      const measure = () => {
        const roadmapRect = roadmapEl.getBoundingClientRect()
        fractions = steps.map((_, i) => {
          const node = document.getElementById(`step-node-${i}`)
          if (!node) return i / steps.length
          const nr = node.getBoundingClientRect()
          return (nr.top + nr.height / 2 - roadmapRect.top) / roadmapRect.height
        })
      }
      requestAnimationFrame(measure)

      const active = new Array(steps.length).fill(false)

      const show = (i: number) => {
        active[i] = true
        gsap.to(`#step-card-${i}`,        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
        gsap.to(`#step-node-${i}`,        { borderColor: '#00FF88', boxShadow: '0 0 22px rgba(0,255,136,0.28)', backgroundColor: 'rgba(0,255,136,0.1)', duration: 0.35, ease: 'power2.out' })
        gsap.to(`#step-icon-svg-${i}`,    { color: '#00FF88', duration: 0.35 })
        gsap.to(`#step-num-${i}`,         { color: 'rgba(0,255,136,0.45)', duration: 0.35 })
        gsap.to(`#step-card-border-${i}`, { borderColor: 'rgba(0,255,136,0.2)', duration: 0.35 })
      }

      const hide = (i: number) => {
        active[i] = false
        const isLeft = steps[i].side === 'left'
        gsap.to(`#step-card-${i}`,        { opacity: 0, x: isLeft ? -40 : 40, duration: 0.4, ease: 'power3.in' })
        gsap.to(`#step-node-${i}`,        { borderColor: 'rgba(255,255,255,0.08)', boxShadow: 'none', backgroundColor: '#000', duration: 0.3 })
        gsap.to(`#step-icon-svg-${i}`,    { color: '#242424', duration: 0.3 })
        gsap.to(`#step-num-${i}`,         { color: '#1a1a1a', duration: 0.3 })
        gsap.to(`#step-card-border-${i}`, { borderColor: 'rgba(255,255,255,0.05)', duration: 0.3 })
      }

      // Spine fill — progress drives all step animations via onUpdate
      gsap.fromTo('#process-spine-fill', { height: '0%' }, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#process-roadmap',
          start: 'top 65%',
          end: 'bottom 60%',
          scrub: 0.3,
          onUpdate(self) {
            if (!fractions.length) measure()
            steps.forEach((_, i) => {
              const threshold = fractions[i] ?? (i / steps.length)
              if (self.progress >= threshold && !active[i]) show(i)
              else if (self.progress < threshold && active[i]) hide(i)
            })
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="processo" ref={sectionRef} style={{ backgroundColor: '#09090B', padding: '140px 0 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '88px', flexWrap: 'wrap', gap: '20px' }}
        >
          <div>
            <span className="section-label mono">Como Trabalhamos</span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '12px', lineHeight: 0.95 }}>
              Quatro etapas.<br />Zero surpresas.
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#8888a0', maxWidth: '280px', lineHeight: 1.75 }}>
            Você aprova cada etapa antes de avançar para a próxima.
          </p>
        </motion.div>

        {/* Vertical roadmap */}
        <div id="process-roadmap" style={{ position: 'relative' }}>

          {/* Center spine */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', transform: 'translateX(-50%)', backgroundColor: 'rgba(255,255,255,0.06)', zIndex: 0 }}>
            <div
              id="process-spine-fill"
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '0%', backgroundColor: '#00FF88', boxShadow: '0 0 6px rgba(0,255,136,0.5)' }}
            />
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', paddingBottom: '8px' }}>
            {steps.map((s, i) => {
              const isLeft = s.side === 'left'
              const Icon   = s.icon

              return (
                <div
                  id={`step-row-${i}`}
                  key={s.n}
                  style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '52px' }}
                >
                  {/* LEFT half */}
                  <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                    {isLeft && (
                      /* Card — padding-right leaves room for node (52px) + gap (32px) from line */
                      <div
                        id={`step-card-${i}`}
                        style={{ width: '100%', paddingRight: '96px', opacity: 0 }}
                      >
                        <div id={`step-card-border-${i}`} style={{ padding: '26px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          <StepCard s={s} i={i} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Node — floated off center line by 28px gap each side */}
                  <div style={{
                    position: 'absolute',
                    left: isLeft ? 'calc(50% - 80px)' : 'calc(50% + 28px)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                  }}>
                    <div
                      id={`step-node-${i}`}
                      style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.08)', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Icon
                        id={`step-icon-svg-${i}`}
                        size={18}
                        style={{ color: '#242424' }}
                      />
                    </div>
                  </div>

                  {/* RIGHT half */}
                  <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-start' }}>
                    {!isLeft && (
                      /* Card — padding-left leaves room for node (52px) + gap (32px) from line */
                      <div
                        id={`step-card-${i}`}
                        style={{ width: '100%', paddingLeft: '96px', opacity: 0 }}
                      >
                        <div id={`step-card-border-${i}`} style={{ padding: '26px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          <StepCard s={s} i={i} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

function StepCard({ s, i }: { s: typeof steps[number]; i: number }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <span id={`step-num-${i}`} className="mono" style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.1em' }}>{s.n}</span>
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#777788', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.tag}</span>
      </div>

      <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#fff', letterSpacing: '-0.025em', marginBottom: '10px', lineHeight: 1.15 }}>{s.title}</h4>

      <p style={{ fontSize: '13px', color: '#8888a0', lineHeight: 1.75, marginBottom: '18px' }}>{s.desc}</p>

      <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', color: '#666677', textTransform: 'uppercase', marginBottom: '2px' }}>Você recebe</span>
        {s.receives.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(0,200,150,0.6)', flexShrink: 0 }} />
            <span style={{ fontSize: '12px', color: '#9090a8' }}>{item}</span>
          </div>
        ))}
      </div>

      <span className="mono" style={{ fontSize: '10px', color: '#666677' }}>→ {s.duration}</span>
    </>
  )
}
