import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Globe, Cpu, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { members } from './TeamModal'

const stats = [
  { value: '5+',   label: 'Projetos entregues' },
  { value: '100%', label: 'Satisfação' },
  { value: '<15d', label: 'Entrega média' },
  { value: '3',    label: 'Devs dedicados' },
]

const highlights = [
  { icon: Globe,  label: 'Inglês B2',   sub: 'Ferramentas internacionais e comunicação direta com qualquer stack.' },
  { icon: Cpu,    label: 'Full-stack',  sub: 'Do front-end ao servidor — entregamos a solução completa.' },
  { icon: Users2, label: 'Sinergia',    sub: 'Equipe construída sobre confiança mútua e alinhamento técnico.' },
]

// Arthur esquerda, João centro (lead), Brayan direita
const teamOrder = ['arthur', 'joaovitor', 'brayan']

export default function About() {
  const ref     = useRef(null)
  const statsRef = useRef(null)
  const teamRef  = useRef(null)

  const inView  = useInView(ref,      { once: true, margin: '-60px' })
  const statsIn = useInView(statsRef, { once: true, margin: '-60px' })
  const teamIn  = useInView(teamRef,  { once: true, margin: '-60px' })

  const orderedMembers = teamOrder
    .map(id => members.find(m => m.id === id))
    .filter(Boolean) as typeof members

  return (
    <section id="sobre" style={{ backgroundColor: '#000', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <span className="section-label mono">Quem Somos</span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', marginTop: '18px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.18, margin: 0 }}>
              Desenvolvimento web com comprometimento técnico{' '}
              <span style={{ color: '#00C896' }}>e foco em resultado.</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#484848', lineHeight: 1.9, margin: 0, paddingTop: '4px' }}>
              João Vitor, Brayan e Arthur se formaram juntos no IOS — curso de Desenvolvimento Web da PUC-RS, patrocinado pela Dell e TOTVS. Da formação à prática, construíram uma parceria técnica sólida e hoje entregam produtos digitais que competem de igual com qualquer agência do mercado.
            </p>
          </div>
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 14 }}
          animate={statsIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(255,255,255,0.012)', overflow: 'hidden',
            marginBottom: '56px',
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '26px 22px', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <span style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#e0e0e0', letterSpacing: '-0.04em', lineHeight: 1, display: 'block' }}>{s.value}</span>
              <span style={{ fontSize: '10px', color: '#2e2e2e', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginTop: '7px' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Highlights + Badge ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '72px' }}>

          {/* IOS badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={statsIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ padding: '28px 30px', borderRadius: '14px', border: '1px solid rgba(0,200,150,0.1)', backgroundColor: 'rgba(0,200,150,0.015)', display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '11px', backgroundColor: 'rgba(0,200,150,0.07)', border: '1px solid rgba(0,200,150,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GraduationCap size={18} style={{ color: '#00C896' }} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#d0d0d0' }}>Instituto da Oportunidade Social</div>
                <div style={{ fontSize: '11px', color: '#2a2a2a', marginTop: '3px' }}>PUC-RS · Patrocinado por Dell e TOTVS</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#363636', lineHeight: 1.75, margin: 0, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '16px' }}>
              Formação técnica de alto nível com metodologia voltada ao mercado real — base da qualidade que entregamos hoje.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={statsIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}
          >
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <div key={h.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px 22px', borderBottom: i < highlights.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', backgroundColor: 'rgba(255,255,255,0.012)' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '9px', backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <Icon size={14} style={{ color: '#00C896' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#c0c0c0', marginBottom: '3px' }}>{h.label}</div>
                    <div style={{ fontSize: '12px', color: '#363636', lineHeight: 1.6 }}>{h.sub}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* ── Team ── */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 20 }}
          animate={teamIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1e1e1e', letterSpacing: '0.14em', textTransform: 'uppercase' }}>A Equipe</span>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginTop: '7px', lineHeight: 1.1 }}>
                Três profissionais. Uma entrega.
              </h3>
            </div>
            <p style={{ fontSize: '12px', color: '#282828', maxWidth: '200px', lineHeight: 1.7 }}>
              Clique em um membro para ver o perfil completo.
            </p>
          </div>

          {/* Fotos livres — posicionamento absoluto para controle preciso */}
          <div style={{ position: 'relative', width: '100%', height: '520px' }}>

            {/* Arthur — esquerda, colado no João */}
            <div style={{ position: 'absolute', bottom: '48px', left: '50%', marginLeft: '-33%', width: '34%', height: '88%', zIndex: 1 }}>
              <img
                src="/Arthur.webp" alt="Arthur"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'bottom center',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 14%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 100%)',
                  maskComposite: 'intersect',
                }}
              />
            </div>

            {/* João — centro */}
            <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', width: '34%', height: '100%', zIndex: 2 }}>
              <img
                src="/João.webp" alt="João Vitor"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'bottom center',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)',
                }}
              />
            </div>

            {/* Brayan — direita, colado no João, escalado para mesma altura */}
            <div style={{ position: 'absolute', bottom: '48px', left: '50%', marginLeft: '-1%', width: '34%', height: '88%', zIndex: 1 }}>
              <img
                src="/brayan.webp" alt="Brayan"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'bottom center',
                  transform: 'scale(1.35) translateY(-8%)',
                  transformOrigin: 'bottom center',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 75%, transparent 100%), linear-gradient(to left, transparent 0%, black 18%, black 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 75%, transparent 100%), linear-gradient(to left, transparent 0%, black 18%, black 100%)',
                  maskComposite: 'intersect',
                }}
              />
            </div>

            {/* Names na base */}
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', zIndex: 6 }}>
              {orderedMembers.map((member) => {
                const isLead = member.id === 'joaovitor'
                return (
                  <Link
                    key={member.id}
                    to={`/equipe/${member.id}`}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', textDecoration: 'none', padding: '8px', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.65' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 800, color: isLead ? '#00C896' : '#aaa', letterSpacing: '-0.01em' }}>{member.name}</span>
                    <span style={{ fontSize: '10px', color: '#3a3a3a', textAlign: 'center' }}>{member.role.split(' · ')[0]}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
