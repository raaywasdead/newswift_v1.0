import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Globe, Cpu, Users2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { members } from './TeamModal'

const highlights = [
  { icon: Globe,  label: 'Inglês B2',            sub: 'Ferramentas internacionais e comunicação direta, sem depender de tradução.' },
  { icon: Cpu,    label: 'Do código ao servidor', sub: 'Não só a tela — entendemos infraestrutura de ponta a ponta.' },
  { icon: Users2, label: 'Amizade primeiro',      sub: 'Viramos amigos antes de virar sócios. Isso muda tudo na entrega.' },
]

export default function About() {
  const ref    = useRef(null)
  const teamRef = useRef(null)
  const inView  = useInView(ref,     { once: true, margin: '-60px' })
  const teamIn  = useInView(teamRef, { once: true, margin: '-60px' })

  return (
    <section id="sobre" style={{ backgroundColor: '#000', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Intro — 2-col ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start', marginBottom: '80px' }}
        >
          {/* Left: headline */}
          <div>
            <span className="section-label mono">Quem Somos</span>
            <h2 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '14px', lineHeight: 0.95, marginBottom: '0' }}>
              Três amigos<br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>do IOS</span><br />
              que viraram<br />
              <span style={{ background: 'linear-gradient(130deg, #00FF88 0%, #00C896 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>sócios.</span>
            </h2>
          </div>

          {/* Right: story + badge + highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '4px' }}>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.85 }}>
              Joao Vitor, Brayan e Arthur se conheceram no IOS, um curso de Desenvolvimento Web dentro da PUC-RS patrocinado pela Dell e TOTVS. Aprenderam juntos, viraram amigos e decidiram continuar. Hoje entregam sites que competem de igual com qualquer agência do mercado.
            </p>

            {/* IOS badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(0,200,150,0.12)', backgroundColor: 'rgba(0,200,150,0.025)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0,200,150,0.07)', border: '1px solid rgba(0,200,150,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <GraduationCap size={16} style={{ color: '#00C896' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#ccc' }}>Instituto da Oportunidade Social · PUC-RS</div>
                <div style={{ fontSize: '11px', color: '#333', marginTop: '2px' }}>Desenvolvimento Web · Patrocinado por Dell e TOTVS</div>
              </div>
            </div>

            {/* Highlights — compact list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '16px 20px',
                      borderBottom: i < highlights.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      backgroundColor: 'rgba(255,255,255,0.015)',
                    }}
                  >
                    <div style={{ width: '34px', height: '34px', borderRadius: '9px', backgroundColor: 'rgba(0,200,150,0.06)', border: '1px solid rgba(0,200,150,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={15} style={{ color: '#00C896', opacity: 0.8 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#bbb', marginBottom: '2px' }}>{h.label}</div>
                      <div style={{ fontSize: '11px', color: '#3e3e3e', lineHeight: 1.5 }}>{h.sub}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Team ── */}
        <div ref={teamRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1e1e1e', letterSpacing: '0.14em', textTransform: 'uppercase' }}>A Equipe</span>
              <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', marginTop: '10px', lineHeight: 1.0 }}>
                Três devs.<br />Uma missão.
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#333', maxWidth: '240px', lineHeight: 1.65 }}>
              Clique em um membro para ver o perfil completo com habilidades e histórico.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {members.map((member, i) => {
              const isLead   = member.id === 'joaovitor'
              const topSkill = member.skills[0]
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={teamIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/equipe/${member.id}`}
                    style={{
                      display: 'flex', flexDirection: 'column',
                      borderRadius: '18px',
                      border: isLead ? '1px solid rgba(0,200,150,0.3)' : '1px solid rgba(255,255,255,0.06)',
                      backgroundColor: isLead ? 'rgba(0,200,150,0.03)' : 'rgba(255,255,255,0.015)',
                      textDecoration: 'none', overflow: 'hidden',
                      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                      boxShadow: isLead ? '0 0 32px rgba(0,200,150,0.06)' : 'none',
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = isLead ? '0 20px 48px rgba(0,200,150,0.12)' : '0 16px 40px rgba(0,0,0,0.5)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = isLead ? '0 0 32px rgba(0,200,150,0.06)' : 'none'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    }}
                  >
                    {isLead && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00C896, transparent)', zIndex: 3 }} />}

                    {/* Photo */}
                    <div style={{ position: 'relative', height: '210px', backgroundColor: 'rgba(0,200,150,0.03)', overflow: 'hidden' }}>
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.4s ease' }}
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
                        <span style={{ fontSize: '72px', fontWeight: 900, color: 'rgba(0,200,150,0.1)', lineHeight: 1, userSelect: 'none' }}>{member.name[0]}</span>
                      </div>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '90px', background: 'linear-gradient(to top, rgba(6,6,6,0.98), transparent)', zIndex: 1 }} />

                      {isLead && (
                        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(0,200,150,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: '6px', padding: '3px 8px', zIndex: 2 }}>
                          <span style={{ fontSize: '9px', fontWeight: 700, color: '#00C896', letterSpacing: '0.06em' }}>LEAD DEV</span>
                        </div>
                      )}
                      <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(0,200,150,0.2)', borderRadius: '6px', padding: '4px 8px', zIndex: 2 }}>
                        <span style={{ fontSize: '9px', color: '#00C896', fontWeight: 600 }}>Ver perfil</span>
                        <ArrowUpRight size={9} style={{ color: '#00C896' }} />
                      </div>
                    </div>

                    {/* Info */}
                    <div style={{ padding: '22px 24px 26px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                          <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{member.name}</h4>
                          {isLead && <span style={{ fontSize: '9px', color: '#00C896', opacity: 0.55, fontWeight: 600 }}>· Fundador</span>}
                        </div>
                        <p style={{ fontSize: '11px', color: '#00C896', opacity: isLead ? 0.9 : 0.65 }}>{member.role}</p>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '10px', color: '#333', fontWeight: 600 }}>{topSkill.label}</span>
                          <span style={{ fontSize: '10px', color: isLead ? '#00C896' : '#444', fontWeight: 700 }}>{topSkill.level}%</span>
                        </div>
                        <div style={{ height: '2px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${topSkill.level}%`, background: isLead ? 'linear-gradient(90deg, #00C896, #00FF88)' : 'rgba(0,200,150,0.45)', borderRadius: '2px' }} />
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {member.tags.slice(0, isLead ? 5 : 4).map(tag => (
                          <span key={tag} style={{ fontSize: '10px', color: isLead ? '#4a4a4a' : '#383838', backgroundColor: 'rgba(255,255,255,0.025)', border: `1px solid ${isLead ? 'rgba(0,200,150,0.1)' : 'rgba(255,255,255,0.05)'}`, padding: '3px 7px', borderRadius: '4px' }}>{tag}</span>
                        ))}
                      </div>

                      <p style={{ fontSize: '11px', color: '#3a3a3a', lineHeight: 1.55, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '12px' }}>"{member.tagline}"</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
