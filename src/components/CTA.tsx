import { Link } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.69a8.26 8.26 0 0 0 4.83 1.55V7.79a4.85 4.85 0 0 1-1.06-.1z" />
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
  { label: 'GitHub',    href: 'https://github.com/NewSwift-NS',        Icon: GitHubIcon },
  { label: 'X',         href: 'https://x.com/NewSwiftNS',              Icon: XIcon },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@newswiftns',    Icon: TikTokIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/newswift_ns', Icon: InstagramIcon },
]

export default function CTA() {
  const isMobile = useIsMobile()

  return (
    <section
      id="contato"
      style={{ position: 'relative', backgroundColor: '#09090B', overflow: 'hidden', padding: isMobile ? '80px 20px' : '140px 24px' }}
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
        <div
          className="reveal-up reveal-sooner"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px 6px 9px', borderRadius: '100px', border: '1px solid rgba(0,255,136,0.28)', backgroundColor: 'rgba(0,255,136,0.07)', marginBottom: '40px' }}
        >
          <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#00FF88', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', color: '#00FF88', fontWeight: 600, letterSpacing: '0.07em' }}>Disponível para novos projetos</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal-up reveal-sooner"
          style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', margin: '0 0 48px' }}
        >
          <span style={{ color: '#fff', display: 'block' }}>SEU PRÓXIMO</span>
          <span style={{ display: 'block', background: 'linear-gradient(130deg, #00FF88 0%, #00D4A0 55%, #009E78 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 28px rgba(0,255,136,0.35))' }}>SITE COMEÇA</span>
          <span style={{ color: '#fff', display: 'block' }}>AQUI.</span>
        </h2>

        {/* Button */}
        <div
          className="reveal-up reveal-sooner"
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
          <span style={{ fontSize: '11px', color: '#8888a0', fontWeight: 600 }}>Orçamento gratuito · Sem compromisso</span>
        </div>

        {/* Divider */}
        <div
          className="reveal-up reveal-sooner"
          style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '48px auto', maxWidth: '280px' }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontSize: '10px', color: '#666677', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>ou nos encontre em</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Social icons */}
        <div
          className="reveal-up reveal-sooner"
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
        </div>
      </div>
    </section>
  )
}
