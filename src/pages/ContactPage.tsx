import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

type Field = { value: string; error: boolean }

export default function ContactPage() {
  const formRef  = useRef<HTMLFormElement>(null)
  const [sent, setSent]       = useState(false)
  const [kind, setKind]       = useState<'pessoa' | 'empresa'>('pessoa')
  const [focused, setFocused] = useState<string | null>(null)
  const [fields, setFields]   = useState({
    name:    { value: '', error: false } as Field,
    company: { value: '', error: false } as Field,
    cnpj:    { value: '', error: false } as Field,
    email:   { value: '', error: false } as Field,
    message: { value: '', error: false } as Field,
  })

  const set = (key: keyof typeof fields, value: string) =>
    setFields(f => ({ ...f, [key]: { value, error: false } }))

  const handleKind = (k: 'pessoa' | 'empresa') => {
    setKind(k)
    setFields(f => ({ ...f, company: { value: '', error: false } }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = {
      name:    !fields.name.value.trim(),
      company: kind === 'empresa' && !fields.company.value.trim(),
      cnpj:    kind === 'empresa' && !fields.cnpj.value.trim(),
      email:   !fields.email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value),
      message: !fields.message.value.trim(),
    }
    if (Object.values(errors).some(Boolean)) {
      setFields(f => ({
        name:    { ...f.name,    error: errors.name },
        company: { ...f.company, error: errors.company },
        cnpj:    { ...f.cnpj,    error: errors.cnpj },
        email:   { ...f.email,   error: errors.email },
        message: { ...f.message, error: errors.message },
      }))
      return
    }
    const who = kind === 'empresa'
      ? `${fields.name.value} — ${fields.company.value}`
      : fields.name.value
    const subject = encodeURIComponent(`Novo contato — ${who}`)
    const bodyLines = [
      kind === 'empresa' ? `Empresa: ${fields.company.value}` : '',
      `Nome: ${fields.name.value}`,
      `E-mail: ${fields.email.value}`,
      `Tipo: ${kind === 'empresa' ? 'Empresa' : 'Pessoa física'}`,
      '',
      fields.message.value,
    ].filter(l => l !== undefined).join('\n')
    window.location.href = `mailto:contato@newswift.com.br?subject=${subject}&body=${encodeURIComponent(bodyLines)}`
    setSent(true)
  }

  const inputBase = (key: string, multiline = false): React.CSSProperties => ({
    width: '100%', boxSizing: 'border-box',
    padding: multiline ? '16px 18px' : '0 18px',
    height: multiline ? 'auto' : '52px',
    minHeight: multiline ? '140px' : undefined,
    resize: multiline ? 'vertical' as const : undefined,
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: `1px solid ${fields[key as keyof typeof fields].error
      ? 'rgba(255,80,80,0.5)'
      : focused === key ? 'rgba(0,255,136,0.45)' : 'rgba(255,255,255,0.09)'}`,
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === key && !fields[key as keyof typeof fields].error
      ? '0 0 0 3px rgba(0,255,136,0.07)' : 'none',
    display: 'block',
  })

  const labelStyle: React.CSSProperties = {
    fontSize: '12px', fontWeight: 700, color: '#444',
    letterSpacing: '0.05em', display: 'block', marginBottom: '8px',
  }
  const errorStyle: React.CSSProperties = {
    fontSize: '11px', color: 'rgba(255,80,80,0.8)', display: 'block', marginTop: '5px',
  }

  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Dot grid */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 0%, rgba(0,255,136,0.07) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#555', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555')}
          >
            <ArrowLeft size={15} /> Voltar
          </Link>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/logo-ns.png" alt="NS" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            <span style={{ fontSize: '17px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
              New<span style={{ color: '#00FF88' }}>Swift</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '80px 32px 120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'sticky', top: '96px' }}
        >
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00C896', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Contato</span>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', lineHeight: 0.92, margin: '16px 0 24px' }}>
            Vamos<br />
            <span style={{ background: 'linear-gradient(130deg, #00FF88 0%, #00C896 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>conversar.</span>
          </h1>

          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, maxWidth: '360px', marginBottom: '40px' }}>
            Conta pra gente o que você precisa. A consultoria inicial é sempre gratuita — respondemos em menos de 2 horas em dias úteis.
          </p>

          {/* Info pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            {[
              { label: 'E-mail',    value: 'contato@newswift.com.br' },
              { label: 'Resposta',  value: 'Resposta em menos de 24 Horas' },
              { label: 'Serviço',   value: 'Consultoria 100% gratuita' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00C896', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#333', fontWeight: 600 }}>{item.label}:</span>
                <span style={{ fontSize: '12px', color: '#555' }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#222', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Redes sociais</span>
            <div style={{ display: 'flex', gap: '8px' }}>
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
                    width: '42px', height: '42px', borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    color: '#444', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,255,136,0.35)'
                    e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.07)'
                    e.currentTarget.style.color = '#00FF88'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.color = '#444'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {sent ? (
            /* Success state */
            <div style={{ padding: '56px 40px', borderRadius: '20px', border: '1px solid rgba(0,255,136,0.2)', backgroundColor: 'rgba(0,255,136,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
              <CheckCircle size={48} style={{ color: '#00FF88', opacity: 0.85 }} />
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.025em', margin: 0 }}>Mensagem enviada!</h2>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75, maxWidth: '280px', margin: 0 }}>
                Seu cliente de e-mail foi aberto com a mensagem pronta. Respondemos em breve.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{ marginTop: '8px', fontSize: '13px', color: '#00C896', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Toggle Pessoa / Empresa */}
              <div style={{ display: 'flex', gap: '0', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.09)', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                {(['pessoa', 'empresa'] as const).map(k => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => handleKind(k)}
                    style={{
                      flex: 1, padding: '12px',
                      border: 'none', cursor: 'pointer',
                      fontSize: '13px', fontWeight: 700,
                      letterSpacing: '0.04em',
                      transition: 'all 0.18s',
                      backgroundColor: kind === k ? '#00FF88' : 'transparent',
                      color: kind === k ? '#000' : '#444',
                    }}
                  >
                    {k === 'pessoa' ? 'Pessoa física' : 'Empresa'}
                  </button>
                ))}
              </div>

              {/* Company name — only for empresa */}
              {kind === 'empresa' && (
                <>
                  <div>
                    <label style={labelStyle}>Nome da empresa <span style={{ color: '#333' }}>*</span></label>
                    <input
                      type="text"
                      value={fields.company.value}
                      onChange={e => set('company', e.target.value)}
                      onFocus={() => setFocused('company')}
                      onBlur={() => setFocused(null)}
                      placeholder="Razão social ou nome fantasia"
                      style={inputBase('company')}
                    />
                    {fields.company.error && <span style={errorStyle}>Informe o nome da empresa.</span>}
                  </div>

                  <div>
                    <label style={labelStyle}>CNPJ <span style={{ color: '#333' }}>*</span></label>
                    <input
                      type="text"
                      value={fields.cnpj.value}
                      onChange={e => set('cnpj', e.target.value)}
                      onFocus={() => setFocused('cnpj')}
                      onBlur={() => setFocused(null)}
                      placeholder="00.000.000/0000-00"
                      style={inputBase('cnpj')}
                    />
                    {fields.cnpj.error && <span style={errorStyle}>Informe o CNPJ da empresa.</span>}
                  </div>
                </>
              )}

              {/* Name */}
              <div>
                <label style={labelStyle}>
                  {kind === 'empresa' ? 'Nome do responsável' : 'Nome'} <span style={{ color: '#333' }}>*</span>
                </label>
                <input
                  type="text"
                  value={fields.name.value}
                  onChange={e => set('name', e.target.value)}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder={kind === 'empresa' ? 'Seu nome completo' : 'Seu nome'}
                  style={inputBase('name')}
                />
                {fields.name.error && <span style={errorStyle}>Por favor, informe seu nome.</span>}
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>E-mail <span style={{ color: '#333' }}>*</span></label>
                <input
                  type="email"
                  value={fields.email.value}
                  onChange={e => set('email', e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="seu@email.com"
                  style={inputBase('email')}
                />
                {fields.email.error && <span style={errorStyle}>Informe um e-mail válido.</span>}
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Mensagem <span style={{ color: '#333' }}>*</span></label>
                <textarea
                  value={fields.message.value}
                  onChange={e => set('message', e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Conte sobre seu projeto — tipo de site, prazo, referências visuais..."
                  style={inputBase('message', true)}
                  rows={6}
                />
                {fields.message.error && <span style={errorStyle}>Escreva sua mensagem.</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                  width: '100%', padding: '16px',
                  borderRadius: '10px', border: 'none', cursor: 'pointer',
                  backgroundColor: '#00FF88', color: '#000',
                  fontSize: '14px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                  boxShadow: '0 4px 24px rgba(0,255,136,0.25)',
                  transition: 'all 0.22s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#00e07a'
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,255,136,0.4)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#00FF88'
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,255,136,0.25)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Send size={15} />
                Enviar mensagem
              </button>

              <p style={{ fontSize: '11px', color: '#2a2a2a', textAlign: 'center', lineHeight: 1.6 }}>
                Ao enviar, seu cliente de e-mail abre com a mensagem pronta para<br />
                <span style={{ color: '#333' }}>contato@newswift.com.br</span>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
