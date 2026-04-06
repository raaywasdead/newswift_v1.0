import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

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

]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const isMobile = useIsMobile()

  const go = (next: number) => {
    if (isChanging) return
    setIsChanging(true)
    setTimeout(() => {
      setCurrent(next)
      setIsChanging(false)
    }, 400)
  }

  const prev = () => go((current - 1 + projects.length) % projects.length)
  const next = () => go((current + 1) % projects.length)

  const p = projects[current]

  return (
    <section
      id="projetos"
      style={{ backgroundColor: '#09090B', padding: isMobile ? '80px 0 60px' : '160px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div
          className="reveal-up"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}
        >
          <div>
            <span className="section-label mono">Projetos</span>
            <h2 className="syne" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', marginTop: '8px', lineHeight: 0.9 }}>
              O que nós já<br />construímos.
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#555', maxWidth: '320px', lineHeight: 1.8, marginBottom: '8px' }}>
            Cada projeto é um novo desafio. Combinamos design editorial com engenharia de software para entregar produtos que marcam presença.
          </p>
        </div>

        {/* Showcase */}
        <div className="reveal-up" style={{ position: 'relative', minHeight: isMobile ? 'auto' : '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%', position: 'relative', zIndex: 2 }}
            >
              {isMobile ? (
                /* ── MOBILE LAYOUT ── */
                <div style={{ width: '100%' }}>
                  {/* Category tag */}
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginBottom: '12px' }}>
                    <span className="mono" style={{ fontSize: '10px', fontWeight: 800, color: p.accent, letterSpacing: '0.2em', textTransform: 'uppercase', backgroundColor: '#09090B', padding: '5px 12px', border: `1px solid ${p.accent}40` }}>{p.category}</span>
                  </motion.div>

                  {/* Image */}
                  <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', width: '100%', aspectRatio: '16/10',
                    borderRadius: '16px', overflow: 'hidden',
                    background: p.mockupBg,
                    boxShadow: `0 20px 60px -10px rgba(0,0,0,0.8), 0 10px 30px -10px ${p.accent}40`,
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '20px', textDecoration: 'none',
                  }}>
                    <img src={p.screenshot} alt={p.name} loading="lazy" decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.screenshotPos }} />
                  </a>

                  {/* Project name */}
                  <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                    className="syne" style={{ fontSize: 'clamp(1.6rem, 6vw, 2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: '16px' }}>
                    {p.name}
                  </motion.h3>

                  {/* Info card */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    style={{ padding: '18px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', height: '196px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '13px', color: '#8888a0', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{p.desc}</p>
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ fontSize: '9px', fontWeight: 700, color: '#fff', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>{t}</span>
                        ))}
                      </div>
                      <a href={p.href} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 900, color: '#000', backgroundColor: p.accent, padding: '8px 16px', borderRadius: '100px', textDecoration: 'none', letterSpacing: '0.08em' }}>
                        VER PROJETO <ArrowUpRight size={11} strokeWidth={3} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* ── DESKTOP LAYOUT ── */
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Mockup card */}
                  <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                    position: 'relative',
                    width: '100%', maxWidth: '800px',
                    aspectRatio: '16/10',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: p.mockupBg,
                    boxShadow: `0 50px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -30px ${p.accent}40`,
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '2vw', cursor: 'pointer', textDecoration: 'none',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.01)'; e.currentTarget.style.boxShadow = `0 60px 120px -20px rgba(0,0,0,0.9), 0 40px 80px -30px ${p.accent}60` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 50px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -30px ${p.accent}40` }}
                  >
                    <div style={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 64px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <img src={p.screenshot} alt={p.name} loading="lazy" decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.screenshotPos }} />
                    </div>
                  </a>

                  {/* Floating HUD */}
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px' }}>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ position: 'absolute', top: '-10%', left: '0', zIndex: 10 }}>
                      <span className="mono" style={{ fontSize: '11px', fontWeight: 800, color: p.accent, letterSpacing: '0.2em', textTransform: 'uppercase', backgroundColor: '#09090B', padding: '6px 14px', border: `1px solid ${p.accent}40` }}>{p.category}</span>
                    </motion.div>

                    <div style={{ position: 'absolute', bottom: '-15%', left: '0', maxWidth: '440px', pointerEvents: 'auto' }}>
                      <motion.h3 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                        className="syne" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: '20px' }}>
                        {p.name}
                      </motion.h3>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        style={{ padding: '20px', backgroundColor: 'rgba(9,9,11,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                        <p style={{ fontSize: '13px', color: '#8888a0', lineHeight: 1.7, marginBottom: '20px' }}>{p.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                          {p.tags.map(t => (
                            <span key={t} style={{ fontSize: '9px', fontWeight: 700, color: '#fff', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '4px', letterSpacing: '0.05em' }}>{t}</span>
                          ))}
                        </div>
                        <a href={p.href} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 900, color: '#000', backgroundColor: p.accent, padding: '14px 28px', borderRadius: '100px', textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.2s', boxShadow: `0 10px 30px ${p.accent}30` }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = `0 15px 40px ${p.accent}50` }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = `0 10px 30px ${p.accent}30` }}>
                          VER PROJETO <ArrowUpRight size={14} strokeWidth={3} />
                        </a>
                      </motion.div>
                    </div>

                    <div style={{ position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center' }}>
                      <span className="mono" style={{ fontSize: '100px', fontWeight: 900, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>
                        {String(current + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="reveal-up reveal-sooner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '28px' }}>
          <button
            onClick={prev}
            style={{ width: '44px', height: '44px', borderRadius: '50%', border: `1px solid ${p.accent}40`, backgroundColor: 'transparent', cursor: 'pointer', color: p.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s' }}
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: current === i ? '36px' : '6px',
                  height: '6px', borderRadius: '3px',
                  backgroundColor: current === i ? p.accent : 'rgba(255,255,255,0.12)',
                  padding: 0, border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{ width: '44px', height: '44px', borderRadius: '50%', border: `1px solid ${p.accent}40`, backgroundColor: 'transparent', cursor: 'pointer', color: p.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}
