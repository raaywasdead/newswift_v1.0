import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

const socials = [
  { label: 'GitHub',    href: 'https://github.com/newswift',           Icon: GitHubIcon },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/newswift', Icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://instagram.com/newswift',        Icon: InstagramIcon },
]

export default function CTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contato"
      ref={ref}
      style={{ position: 'relative', backgroundColor: '#09090B', overflow: 'hidden', padding: '140px 24px' }}
    >
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', zIndex: 0, pointerEvents: 'none' }} />
      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, #09090B 100%)', zIndex: 0, pointerEvents: 'none' }} />

      {/* Ambient blobs */}
      <div className="blob-drift" style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '640px', height: '640px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="blob-drift-r" style={{ position: 'absolute', top: '-15%', right: '-8%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Edge accents */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(0,255,136,0.12) 30%, rgba(0,255,136,0.12) 70%, transparent)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 5%, rgba(0,255,136,0.18) 35%, rgba(0,255,136,0.35) 50%, rgba(0,255,136,0.18) 65%, transparent 95%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px 6px 9px', borderRadius: '100px', border: '1px solid rgba(0,255,136,0.28)', backgroundColor: 'rgba(0,255,136,0.07)', marginBottom: '40px' }}
        >
          <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#00FF88', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', color: '#00FF88', fontWeight: 600, letterSpacing: '0.07em' }}>Disponível para novos projetos</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 48px' }}
        >
          <span style={{ color: '#fff', display: 'block' }}>SEU PRÓXIMO</span>
          <span style={{ display: 'block', background: 'linear-gradient(130deg, #00FF88 0%, #00D4A0 55%, #009E78 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 28px rgba(0,255,136,0.35))' }}>SITE COMEÇA</span>
          <span style={{ color: '#fff', display: 'block' }}>AQUI.</span>
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
        >
          <Link
            to="/contato"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px 48px', borderRadius: '10px',
              backgroundColor: '#00FF88', color: '#000',
              fontSize: '13px', fontWeight: 900, textDecoration: 'none',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              boxShadow: '0 4px 32px rgba(0,255,136,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              transition: 'all 0.22s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#00e07a'
              e.currentTarget.style.boxShadow = '0 10px 56px rgba(0,255,136,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#00FF88'
              e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,255,136,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            VAMOS NESSA
          </Link>
          <span style={{ fontSize: '11px', color: '#2a2a2a', fontWeight: 600 }}>Consultoria gratuita · Sem compromisso</span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '48px auto', maxWidth: '280px' }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontSize: '10px', color: '#242424', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>ou nos encontre em</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.42 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '46px', height: '46px', borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                color: '#444', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.08)'
                e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
                e.currentTarget.style.color = '#00FF88'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#444'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
