import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Vivva Fitness',
    category: 'Site Multipage',
    desc: 'Site multipágina para academia de bairro em Viamão, RS. Apresentado no CriatechBR 2025 dentro da PUC-RS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#D4A800',
    href: 'https://vivvafitness.netlify.app/',
    screenshot: '/vivvafitnes.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #100e00 0%, #1a1500 60%, #0e0c00 100%)',
    mockupAccent: '#D4A800',
  },
  {
    id: 2,
    name: 'Delicias da Ira',
    category: 'Site Multipage',
    desc: 'Site para restaurante artesanal com cardápio e identidade visual forte. Apresentado no CriatechBR 2025 dentro da PUC-RS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#C9A84C',
    href: 'https://raaywasdead.github.io/tcc_aurorus-final/',
    screenshot: '/deliciasdaira.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #0f0d04 0%, #1a1608 60%, #0d0b03 100%)',
    mockupAccent: '#C9A84C',
  },
  {
    id: 3,
    name: 'João Vitor B.S.',
    category: 'Portfólio Pessoal',
    desc: 'Portfólio pessoal desenvolvido por João Vitor, membro da NewSwift. Animações GSAP, design editorial e código limpo.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'GSAP'],
    accent: '#A78BFA',
    href: 'https://joaovitorbs.vercel.app/',
    screenshot: '/portfoliojoaovbds.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #08050f 0%, #0e0918 60%, #070613 100%)',
    mockupAccent: '#A78BFA',
  },
  {
    id: 4,
    name: 'Orbyt',
    category: 'Aplicação Full-Stack',
    desc: 'Plataforma web completa com autenticação Google, banco de dados relacional, REST API própria e dashboard interativo.',
    tags: ['React', 'Vite', 'TypeScript', 'Node.js', 'PostgreSQL', 'Google Auth', 'GSAP'],
    accent: '#9B7FF4',
    href: 'https://orbyt.up.railway.app',
    screenshot: '/orbyt.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #07050f 0%, #0e0b1e 60%, #060412 100%)',
    mockupAccent: '#9B7FF4',
  },
  {
    id: 5,
    name: 'Deltarune Archive',
    category: 'Fan Site',
    desc: 'Arquivo de personagens do jogo Deltarune. Fichas completas, galeria de arte e navegação fluida entre personagens.',
    tags: ['React', 'Vite', 'TypeScript', 'CSS', 'JavaScript'],
    accent: '#C0303A',
    href: 'https://deltarune-archive.vercel.app/',
    screenshot: '/deltarune-c.archive.webp',
    screenshotPos: 'center',
    mockupBg: 'linear-gradient(145deg, #110003 0%, #1c0006 60%, #0f0002 100%)',
    mockupAccent: '#C0303A',
  },
]

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir]         = useState(1)

  const go  = (next: number) => { setDir(next > current ? 1 : -1); setCurrent(next) }
  const prev = () => go((current - 1 + projects.length) % projects.length)
  const next = () => go((current + 1) % projects.length)

  const p = projects[current]

  return (
    <section id="projetos" style={{ backgroundColor: '#09090B', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '48px', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <div>
            <span className="section-label mono">Portfólio</span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '12px', lineHeight: 0.95, marginBottom: '20px' }}>
              Projetos<br />entregues.
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#444', maxWidth: '340px', lineHeight: 1.8, paddingBottom: '4px' }}>
            Cada projeto é único — design exclusivo, código limpo e foco total em resultado.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Outer wrapper — accent glow border */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(0,200,150,0.22)',
            boxShadow: '0 0 0 1px rgba(0,200,150,0.06) inset, 0 0 48px rgba(0,200,150,0.07), 0 24px 72px rgba(0,0,0,0.7)',
            backgroundColor: '#050e09',
          }}>
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,200,150,0.55) 40%, rgba(0,200,150,0.55) 60%, transparent 100%)', zIndex: 4, pointerEvents: 'none' }} />

            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={p.id}
                custom={dir}
                variants={{
                  enter:  (d: number) => ({ x: d * 40, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit:   (d: number) => ({ x: d * -40, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', minHeight: '420px' }}
              >
                {/* LEFT — mockup */}
                <div style={{ position: 'relative', background: p.mockupBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 36px', overflow: 'hidden' }}>
                  {/* Dot grid */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />
                  {/* Ambient glow */}
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${p.mockupAccent}14 0%, transparent 65%)`, pointerEvents: 'none' }} />

                  {/* Browser frame */}
                  <div style={{ position: 'relative', width: '100%', maxWidth: '460px', borderRadius: '12px', overflow: 'hidden', border: `1px solid ${p.mockupAccent}25`, boxShadow: `0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px ${p.mockupAccent}10 inset` }}>
                    {/* Titlebar */}
                    <div style={{ backgroundColor: '#0e0e0e', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: `1px solid ${p.mockupAccent}12` }}>
                      {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                        <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: c, opacity: 0.5 }} />
                      ))}
                      <div style={{ flex: 1, height: '15px', backgroundColor: 'rgba(255,255,255,0.035)', borderRadius: '4px', marginLeft: '10px' }} />
                    </div>

                    {/* Screen — real screenshot */}
                    <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: p.mockupBg }}>
                      <img
                        src={p.screenshot}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.screenshotPos, display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div style={{ position: 'absolute', top: '18px', left: '18px', backgroundColor: `${p.mockupAccent}12`, border: `1px solid ${p.mockupAccent}28`, borderRadius: '6px', padding: '4px 10px', backdropFilter: 'blur(4px)' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: p.mockupAccent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.category}</span>
                  </div>
                </div>

                {/* RIGHT — info panel */}
                <div style={{
                  backgroundColor: '#000301',
                  borderLeft: '1px solid rgba(0,200,150,0.14)',
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '22px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Subtle ambient */}
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 4px' }}>{p.name}</h3>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(0,200,150,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.category}</span>
                  </div>

                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>{p.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', position: 'relative', zIndex: 1 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '10px',
                        color: 'rgba(0,200,150,0.7)',
                        backgroundColor: 'rgba(0,200,150,0.08)',
                        border: '1px solid rgba(0,200,150,0.2)',
                        padding: '3px 9px', borderRadius: '4px',
                        fontWeight: 600,
                      }}>{t}</span>
                    ))}
                  </div>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '11px', fontWeight: 700,
                      color: '#fff', textDecoration: 'none',
                      backgroundColor: 'rgba(0,200,150,0.12)',
                      border: '1px solid rgba(0,200,150,0.28)',
                      padding: '9px 16px', borderRadius: '8px',
                      width: 'fit-content',
                      transition: 'all 0.18s',
                      letterSpacing: '0.04em',
                      position: 'relative', zIndex: 1,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = 'rgba(0,200,150,0.2)'
                      el.style.borderColor = 'rgba(0,200,150,0.5)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = 'rgba(0,200,150,0.12)'
                      el.style.borderColor = 'rgba(0,200,150,0.28)'
                    }}
                  >
                    VER PROJETO <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', paddingInline: '2px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
                <button
                  key={label}
                  onClick={fn}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '1px solid rgba(0,200,150,0.2)',
                    backgroundColor: 'rgba(0,200,150,0.05)',
                    color: '#00C896', fontSize: '15px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,200,150,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(0,200,150,0.45)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,200,150,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(0,200,150,0.2)'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    width: current === i ? '20px' : '6px',
                    height: '6px', borderRadius: '3px',
                    backgroundColor: current === i ? '#00C896' : 'rgba(255,255,255,0.08)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.25s',
                  }}
                />
              ))}
            </div>

            <div style={{ width: '88px' }} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
