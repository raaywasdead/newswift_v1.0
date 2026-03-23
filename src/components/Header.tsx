import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre',    href: '#sobre',    id: 'sobre' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Processo', href: '#processo', id: 'processo' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato',  href: '#contato',  id: 'contato' },
]

export default function Header() {
  const [scrolled, setScrolled]           = useState(false)
  const [open, setOpen]                   = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobile, setIsMobile]           = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const detect = () => {
      const midpoint = window.scrollY + window.innerHeight * 0.38
      let current = ''
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= midpoint) current = id
      }
      setActiveSection(current)
    }
    detect()
    window.addEventListener('scroll', detect, { passive: true })
    return () => window.removeEventListener('scroll', detect)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(9,9,11,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/logo-ns.png" alt="NS" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              New<span style={{ color: '#00FF88', textShadow: '0 0 12px rgba(0,255,136,0.35)' }}>Swift</span>
            </span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '32px' }}>
              {links.map(l => {
                const isActive = activeSection === l.id
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      fontSize: '13px',
                      color: isActive ? '#00FF88' : '#666',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      position: 'relative',
                      paddingBottom: '4px',
                    }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#fff' }}
                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#666' }}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          backgroundColor: '#00FF88',
                          boxShadow: '0 0 6px rgba(0,255,136,0.6)',
                          borderRadius: '1px',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <a
              href="#contato"
              className="btn-primary"
              style={{ padding: '8px 18px', borderRadius: '8px', fontSize: '13px', textDecoration: 'none' }}
            >
              Agendar Consultoria
            </a>
          )}

          {/* Mobile toggle */}
          {isMobile && (
            <button
              style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: '4px' }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: 'hidden',
              backgroundColor: 'rgba(0,0,0,0.97)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '12px 0',
                    fontSize: '15px',
                    color: activeSection === l.id ? '#00FF88' : '#888',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color 0.2s',
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="btn-primary"
                style={{ marginTop: '12px', padding: '12px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', textAlign: 'center' }}
              >
                Agendar Consultoria
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
