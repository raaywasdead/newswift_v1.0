import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Vivva Fitness',
    category: 'Site Multipage',
    desc: 'Projeto autoral de academia de bairro desenvolvido para compor o portfólio da equipe. Design, código e identidade criados do zero pela NewSwift.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#D4A800',
    href: 'https://vivvafitness.netlify.app/',
    screenshot: '/vivvafitnes.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #100e00 0%, #1a1500 60%, #0e0c00 100%)',
  },
  {
    id: 2,
    name: 'Delicias da Ira',
    category: 'Site Multipage',
    desc: 'Projeto autoral de restaurante artesanal com cardápio e identidade visual forte. Desenvolvido pela equipe como exercício de design e frontend.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: '#C9A84C',
    href: 'https://raaywasdead.github.io/tcc_aurorus-final/',
    screenshot: '/deliciasdaira.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #0f0d04 0%, #1a1608 60%, #0d0b03 100%)',
  },
  {
    id: 3,
    name: 'João Vitor B.S.',
    category: 'Portfólio Pessoal',
    desc: 'Portfólio pessoal de João Vitor, co-fundador da NewSwift. Animações GSAP, tipografia editorial e arquitetura de código pensada para impressionar.',
    tags: ['React', 'TypeScript', 'GSAP', 'Vite'],
    accent: '#8A2BE2',
    href: 'https://joaovitorbs.vercel.app/',
    screenshot: '/portfoliojoaovbds.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #08050f 0%, #0e0918 60%, #070613 100%)',
  },
  {
    id: 4,
    name: 'Orbyt',
    category: 'Aplicação Full-Stack',
    desc: 'Plataforma web autoral com autenticação Google, banco relacional, REST API própria e dashboard interativo. Prova técnica da capacidade full-stack da equipe.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    accent: '#9B7FF4',
    href: 'https://orbyt.up.railway.app',
    screenshot: '/orbyt.webp',
    screenshotPos: 'top',
    mockupBg: 'linear-gradient(145deg, #07050f 0%, #0e0b1e 60%, #060412 100%)',
  },
  {
    id: 5,
    name: 'Deltarune Archive',
    category: 'Projeto Pessoal',
    desc: 'Arquivo de personagens do jogo Deltarune feito por paixão. Fichas completas, galeria de arte e navegação fluida — projeto pessoal com foco em UX.',
    tags: ['React', 'TypeScript', 'CSS', 'Vite'],
    accent: '#C0303A',
    href: 'https://deltarune-archive.vercel.app/',
    screenshot: '/deltarune-c.archive.webp',
    screenshotPos: 'center',
    mockupBg: 'linear-gradient(145deg, #110003 0%, #1c0006 60%, #0f0002 100%)',
  },
]

export default function Projects() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir]         = useState(1)

  const go   = (next: number) => { setDir(next > current ? 1 : -1); setCurrent(next) }
  const prev = () => go((current - 1 + projects.length) % projects.length)
  const next = () => go((current + 1) % projects.length)

  const p = projects[current]

  return (
    <section
      id="projetos"
      style={{ backgroundColor: '#09090B', padding: '120px 0 140px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow ambient circle removed per request, keeping only the card glow */}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '20px' }}
        >
          <div>
            <span className="section-label mono">Portfólio</span>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '12px', lineHeight: 0.95 }}>
              O que a gente<br />já construiu.
            </h2>
          </div>
          <p style={{ fontSize: '13px', color: '#555', maxWidth: '280px', lineHeight: 1.75, paddingBottom: '4px' }}>
            Projetos autorais que mostram o que a equipe é capaz de entregar — design, código e produto.
          </p>
        </motion.div>

        {/* ── Carousel card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{ position: 'relative' }}
        >
          {/* Intense background glow for carousel */}
          <div style={{
            position: 'absolute', top: '5%', left: '5%', right: '5%', bottom: '5%', zIndex: -1,
            background: p.accent,
            filter: 'blur(100px)',
            opacity: 0.15,
            transition: 'background 0.5s ease',
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: `1px solid ${p.accent}28`,
            boxShadow: `0 0 0 1px ${p.accent}08 inset, 0 32px 80px rgba(0,0,0,0.7), 0 0 60px ${p.accent}15`,
            transition: 'border-color 0.5s, box-shadow 0.5s',
          }}>
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent 0%, ${p.accent}88 40%, ${p.accent}88 60%, transparent 100%)`, zIndex: 5, pointerEvents: 'none', transition: 'background 0.5s' }} />

            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={p.id}
                custom={dir}
                variants={{
                  enter:  (d: number) => ({ x: d * 48, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit:   (d: number) => ({ x: d * -48, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '460px' }}
              >
                {/* ── LEFT: mockup ── */}
                <div style={{
                  position: 'relative',
                  background: p.mockupBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '48px 40px',
                  overflow: 'hidden',
                }}>
                  {/* Dot grid */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
                  {/* Accent glow */}
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 45% at 50% 50%, ${p.accent}18 0%, transparent 65%)`, pointerEvents: 'none' }} />

                  {/* Browser frame */}
                  <div style={{
                    position: 'relative', width: '100%', maxWidth: '500px',
                    borderRadius: '10px', overflow: 'hidden',
                    border: `1px solid ${p.accent}22`,
                    boxShadow: `0 28px 72px rgba(0,0,0,0.7), 0 0 0 1px ${p.accent}0c inset`,
                  }}>
                    {/* Titlebar */}
                    <div style={{
                      backgroundColor: '#0c0c0c',
                      padding: '10px 14px',
                      display: 'flex', alignItems: 'center', gap: '6px',
                      borderBottom: `1px solid ${p.accent}12`,
                    }}>
                      {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                        <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: c, opacity: 0.5 }} />
                      ))}
                      <div style={{ flex: 1, height: '14px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '4px', marginLeft: '10px' }} />
                    </div>

                    {/* Screenshot */}
                    <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: p.mockupBg }}>
                      <img
                        src={p.screenshot}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.screenshotPos, display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute', top: '20px', left: '20px',
                    backgroundColor: `${p.accent}14`,
                    border: `1px solid ${p.accent}30`,
                    borderRadius: '6px', padding: '4px 10px',
                    backdropFilter: 'blur(6px)',
                  }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: p.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.category}</span>
                  </div>

                </div>

                {/* ── RIGHT: info ── */}
                <div style={{
                  backgroundColor: '#030303',
                  borderLeft: `1px solid ${p.accent}14`,
                  padding: '52px 44px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  gap: '24px', position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.5s',
                }}>
                  {/* Subtle ambient */}
                  <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${p.accent}09 0%, transparent 60%)`, pointerEvents: 'none' }} />

                  {/* Title block */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.accent, opacity: 0.65 }}>{p.category}</span>
                    <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.035em', lineHeight: 1.05, margin: '6px 0 0' }}>{p.name}</h3>
                  </div>

                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.85, position: 'relative', zIndex: 1 }}>{p.desc}</p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', position: 'relative', zIndex: 1 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '9px', fontWeight: 700,
                        color: `${p.accent}bb`,
                        backgroundColor: `${p.accent}10`,
                        border: `1px solid ${p.accent}22`,
                        padding: '3px 9px', borderRadius: '4px',
                        letterSpacing: '0.05em', textTransform: 'uppercase',
                      }}>{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '7px',
                      fontSize: '11px', fontWeight: 800, letterSpacing: '0.07em',
                      textTransform: 'uppercase', textDecoration: 'none',
                      color: '#000',
                      backgroundColor: p.accent,
                      padding: '10px 20px', borderRadius: '8px',
                      width: 'fit-content',
                      transition: 'opacity 0.18s, transform 0.18s',
                      position: 'relative', zIndex: 1,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = '0.85'; el.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }}
                  >
                    Ver Projeto <ArrowUpRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation bar ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', paddingInline: '4px' }}>

            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[{ fn: prev, Icon: ChevronLeft }, { fn: next, Icon: ChevronRight }].map(({ fn, Icon }, i) => (
                <button
                  key={i}
                  onClick={fn}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: `1px solid ${p.accent}25`,
                    backgroundColor: `${p.accent}08`,
                    color: p.accent, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background-color 0.18s, border-color 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${p.accent}18`; e.currentTarget.style.borderColor = `${p.accent}55` }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${p.accent}08`; e.currentTarget.style.borderColor = `${p.accent}25` }}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            {/* Dot progress */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    width: current === i ? '24px' : '6px',
                    height: '6px', borderRadius: '3px',
                    backgroundColor: current === i ? p.accent : 'rgba(255,255,255,0.08)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.28s ease',
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="mono" style={{ fontSize: '11px', color: '#333', letterSpacing: '0.1em' }}>
              {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
