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

const navLinks = [
  { label: 'Início',      href: '#hero' },
  { label: 'Sobre Nós',   href: '#sobre' },
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Projetos',    href: '#projetos' },
  { label: 'Contato',     href: '#contato' },
]

const termsLinks = [
  { label: 'Termos de Uso',        href: '/termos' },
  { label: 'Política de Privacidade', href: '/privacidade' },
]

const socials = [
  { Icon: GitHubIcon,    href: 'https://github.com/NewSwift-NS',          label: 'GitHub' },
  { Icon: XIcon,         href: 'https://x.com/NewSwiftNS',                label: 'X' },
  { Icon: TikTokIcon,    href: 'https://www.tiktok.com/@newswiftns',      label: 'TikTok' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/newswift_ns',   label: 'Instagram' },
]

const linkStyle: React.CSSProperties = {
  fontSize: '13px', color: '#5a5a70', textDecoration: 'none',
  transition: 'color 0.15s', display: 'block', width: 'fit-content',
}

export default function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer style={{ backgroundColor: '#09090B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '40px 20px 0' : '64px 40px 0' }}>

        {/* ── 3-col grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr 1fr', gap: isMobile ? '28px' : '48px', marginBottom: '40px' }}>

          {/* Brand */}
          <div>
            <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '14px' }}>
              <img src="/logo-ns.png" alt="NS" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                New<span style={{ color: '#00FF88' }}>Swift</span>
              </span>
            </a>
            <p style={{ fontSize: '13px', color: '#8888a0', lineHeight: 1.7, maxWidth: '220px', marginBottom: '20px' }}>
              Três devs. Uma missão. Sites que de fato entregam resultado.
            </p>
            {/* Socials inline with brand */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '9px',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#5a5a70', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
                    e.currentTarget.style.color = '#00FF88'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = '#5a5a70'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links + Termos — side by side on mobile */}
          {isMobile ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>Navegação</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {navLinks.map(l => (
                    <a key={l.label} href={l.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#5a5a70')}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>Termos</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {termsLinks.map(l => (
                    <Link key={l.label} to={l.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#5a5a70')}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>Navegação</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {navLinks.map(l => (
                    <a key={l.label} href={l.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#5a5a70')}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>Termos</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {termsLinks.map(l => (
                    <Link key={l.label} to={l.href} style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#5a5a70')}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: '#555566' }}>
            Todos os direitos reservados © {new Date().getFullYear()} | Desenvolvido por{' '}
            <span style={{ color: '#8888a0', fontWeight: 700 }}>NewSwift</span>.
          </span>
        </div>
      </div>
    </footer>
  )
}
