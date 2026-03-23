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
  { Icon: GitHubIcon,    href: 'https://github.com/newswift',           label: 'GitHub' },
  { Icon: LinkedInIcon,  href: 'https://linkedin.com/company/newswift', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: 'https://instagram.com/newswift',        label: 'Instagram' },
]

const linkStyle: React.CSSProperties = {
  fontSize: '13px', color: '#444', textDecoration: 'none',
  transition: 'color 0.15s', display: 'block', width: 'fit-content',
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#09090B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>

        {/* ── 3-col grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <a href="#hero" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <img src="/logo-ns.png" alt="NS" style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
              <span style={{ fontSize: '19px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                New<span style={{ color: '#00FF88' }}>Swift</span>
              </span>
            </a>
            <p style={{ fontSize: '13px', color: '#8888a0', lineHeight: 1.7, maxWidth: '220px' }}>
              Três devs. Uma missão. Sites que de fato entregam resultado.
            </p>
          </div>

          {/* Links */}
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>Links</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#444')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Termos */}
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '18px' }}>Termos</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {termsLinks.map(l => (
                <Link
                  key={l.label}
                  to={l.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#444')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Social icons — centered ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '28px 0', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#444', textDecoration: 'none',
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
                e.currentTarget.style.color = '#444'
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '20px 0', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: '#666677' }}>
            Todos os direitos reservados © {new Date().getFullYear()} | Desenvolvido por{' '}
            <span style={{ color: '#8888a0', fontWeight: 700 }}>NewSwift</span>.
          </span>
        </div>
      </div>
    </footer>
  )
}
