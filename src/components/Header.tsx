import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Sobre',    href: '#sobre',    id: 'sobre'    },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Processo', href: '#processo', id: 'processo' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato',  href: '#contato',  id: 'contato'  },
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
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(9,9,11,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.35)' : 'none',
        transition: 'background-color 0.35s, border-color 0.35s, box-shadow 0.35s, backdrop-filter 0.35s',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/logo-ns.png" alt="NS" style={{ width: '26px', height: '26px', objectFit: 'contain', opacity: 0.92 }} />
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff', letterSpacing: '-0.025em' }}>
              New<span style={{ color: '#00C896' }}>Swift</span>
            </span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {links.map(l => {
                const isActive = activeSection === l.id
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      position: 'relative',
                      padding: '6px 14px',
                      fontSize: '13px',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      color: isActive ? '#fff' : '#666',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ccc' }}
                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#666' }}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: '0',
                          right: '0',
                          height: '2px',
                          borderRadius: '1px',
                          backgroundColor: '#00C896',
                        }}
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <Link
              to="/contato"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '9px 20px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: '#000',
                backgroundColor: '#00FF88',
                boxShadow: '0 2px 16px rgba(0,255,136,0.22)',
                transition: 'background-color 0.18s, box-shadow 0.18s, transform 0.18s',
                textTransform: 'uppercase',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#00e07a'
                el.style.boxShadow = '0 4px 24px rgba(0,255,136,0.38)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#00FF88'
                el.style.boxShadow = '0 2px 16px rgba(0,255,136,0.22)'
                el.style.transform = 'translateY(0)'
              }}
            >
              Agendar Consultoria
            </Link>
          )}

          {/* Mobile toggle */}
          {isMobile && (
            <button
              style={{ background: 'none', border: 'none', color: '#777', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center' }}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>
      </div>

    </motion.header>

    {/* Mobile menu — backdrop + panel */}
    <AnimatePresence>
      {open && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            zIndex: 48,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}
      {open && isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            top: '68px', left: 0, right: 0,
            zIndex: 49,
            backgroundColor: 'rgba(9,9,11,0.98)',
            backdropFilter: 'blur(24px) saturate(1.6)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '0 0 16px 16px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '8px 16px 16px' }}>
            {/* Links */}
            {links.map((l) => {
              const isActive = activeSection === l.id
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 12px',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 500, color: isActive ? '#fff' : '#666', letterSpacing: '-0.01em' }}>
                    {l.label}
                  </span>
                  {isActive && (
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00FF88', flexShrink: 0 }} />
                  )}
                </a>
              )
            })}

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '6px 12px' }} />

            {/* CTA */}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              style={{
                display: 'block', textAlign: 'center', margin: '6px 0 0',
                padding: '13px', borderRadius: '10px',
                fontSize: '12px', fontWeight: 700,
                textDecoration: 'none', color: '#000',
                backgroundColor: '#00FF88',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}
            >
              Agendar Consultoria
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
