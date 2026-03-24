import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { members } from '../components/TeamModal'

export default function TeamMemberPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const member = members.find(m => m.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!member) navigate('/', { replace: true })
  }, [member, navigate])

  if (!member) return null

  const isLead = member.id === 'joaovitor'
  const others = members.filter(m => m.id !== member.id)

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>

      {/* Dot grid */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', zIndex: 0 }} />
      {/* Green glow */}
      <div style={{ position: 'fixed', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Header bar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#555', textDecoration: 'none', fontSize: '13px', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#555')}
        >
          <ArrowLeft size={14} /> Voltar ao site
        </Link>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo-ns.png" alt="NS" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>New<span style={{ color: '#00C896' }}>Swift</span></span>
        </Link>
      </header>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '64px 32px 120px' }}>

        {/* ── Hero card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '64px' }}
        >
          {/* Top line */}
          {isLead && <div style={{ height: '2px', background: 'linear-gradient(90deg, #00C896, rgba(0,200,150,0.2))', borderRadius: '2px', marginBottom: '32px', width: '120px' }} />}

          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${isLead ? 'rgba(0,200,150,0.4)' : 'rgba(255,255,255,0.1)'}`, backgroundColor: 'rgba(0,200,150,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={member.photo} alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <span style={{ position: 'absolute', fontSize: '42px', fontWeight: 900, color: 'rgba(0,200,150,0.25)' }}>{member.name[0]}</span>
              </div>
              {isLead && (
                <div style={{ position: 'absolute', bottom: 4, right: 4, backgroundColor: '#00C896', borderRadius: '50%', width: '16px', height: '16px', border: '2px solid #050505' }} />
              )}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#333', textTransform: 'uppercase' }}>Co-fundador</span>
                {isLead && (
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00C896', backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', padding: '2px 8px', borderRadius: '4px' }}>LEAD DEV</span>
                )}
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '8px' }}>{member.name}</h1>
              <p style={{ fontSize: '15px', color: '#00C896', marginBottom: '6px' }}>{member.role}</p>
              <p style={{ fontSize: '12px', color: '#444' }}>{member.origin}</p>

              {/* Tagline */}
              <div style={{ marginTop: '20px', paddingLeft: '16px', borderLeft: '2px solid rgba(0,200,150,0.3)' }}>
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#666', lineHeight: 1.6 }}>"{member.tagline}"</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '56px' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '20px' }}>História</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {member.bio.map((p, i) => (
              <p key={i} style={{ fontSize: '15px', lineHeight: 1.85, color: '#666' }}>{p}</p>
            ))}
          </div>
        </motion.div>

        {/* ── Skills + Highlights grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}
        >
          {/* Skills */}
          <div style={{ padding: '28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '20px' }}>Habilidades</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {member.skills.map(skill => (
                <span
                  key={skill.label}
                  style={{ fontSize: '12px', color: '#777', backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.14)', padding: '5px 12px', borderRadius: '6px' }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '8px' }}>Destaques</p>
            {member.highlights.map((h, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  style={{ display: 'flex', gap: '12px', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <h.icon size={14} style={{ color: '#00C896', marginTop: '1px', flexShrink: 0, opacity: 0.8 }} />
                  <span style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>{h.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          style={{ marginBottom: '80px' }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '14px' }}>Stack & Ferramentas</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {member.tags.map(t => (
              <span key={t} style={{ fontSize: '12px', color: '#555', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '5px 12px', borderRadius: '6px' }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          style={{ padding: '40px', borderRadius: '20px', border: '1px solid rgba(0,200,150,0.15)', backgroundColor: 'rgba(0,200,150,0.03)', textAlign: 'center', marginBottom: '80px' }}
        >
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px', letterSpacing: '-0.02em' }}>Quer trabalhar com {member.name.split(' ')[0]}?</h3>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>A NewSwift está disponível para novos projetos. Fale com a equipe e receba uma proposta gratuita.</p>
          <Link
            to="/#contato"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '10px', backgroundColor: '#00C896', color: '#000', fontSize: '13px', fontWeight: 800, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}
          >
            Agendar Consultoria Gratuita
          </Link>
        </motion.div>

        {/* ── Outros membros ── */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '20px' }}>Conheça o resto da equipe</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {others.map(other => {
              const otherLead = other.id === 'joaovitor'
              return (
                <Link
                  key={other.id}
                  to={`/equipe/${other.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 18px', borderRadius: '12px',
                    border: otherLead ? '1px solid rgba(0,200,150,0.25)' : '1px solid rgba(255,255,255,0.06)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,200,150,0.3)'; e.currentTarget.style.backgroundColor = 'rgba(0,200,150,0.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = otherLead ? 'rgba(0,200,150,0.25)' : 'rgba(255,255,255,0.06)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(0,200,150,0.15)', backgroundColor: 'rgba(0,200,150,0.06)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={other.photo} alt={other.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.currentTarget.style.display = 'none' }} />
                    <span style={{ fontSize: '18px', fontWeight: 900, color: 'rgba(0,200,150,0.4)' }}>{other.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{other.name}</div>
                    <div style={{ fontSize: '11px', color: '#555', marginTop: '2px' }}>{other.role.split('·')[0].trim()}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
