import { useState } from 'react'
import {
  GraduationCap, Globe, Cpu, Users2,
  Code2, Palette, BarChart2, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { members } from './TeamModal'

const highlights = [
  { icon: Globe,  label: 'Inglês B2',   sub: 'Ferramentas internacionais e comunicação direta com qualquer stack.' },
  { icon: Cpu,    label: 'Full-stack',  sub: 'Do front-end ao servidor — entregamos a solução completa.' },
  { icon: Users2, label: 'Sinergia',    sub: 'Equipe construída sobre confiança mútua e alinhamento técnico.' },
]

const roleIconMap: Record<string, typeof Code2> = {
  joaovitor: Code2,
  brayan: Palette,
  arthur: BarChart2,
}

const teamOrder = ['arthur', 'joaovitor', 'brayan']

// Hover card for a team member
function MemberCard({ member }: { member: typeof members[number] }) {
  const [hovered, setHovered] = useState(false)
  const Icon = roleIconMap[member.id] ?? Code2
  const isLead = member.id === 'joaovitor'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        border: hovered
          ? '1px solid rgba(0,200,150,0.4)'
          : isLead
            ? '1px solid rgba(0,200,150,0.18)'
            : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered ? 'rgba(0,200,150,0.04)' : 'rgba(255,255,255,0.018)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered
          ? '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,200,150,0.08)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        cursor: 'default',
      }}
    >
      {/* Top accent bar for lead */}
      {isLead && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #00C896 40%, #00FF88 60%, transparent 100%)',
          zIndex: 2,
        }} />
      )}

      {/* Ambient glow on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,150,0.07) 0%, transparent 65%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Photo */}
      <div style={{
        position: 'relative',
        height: '260px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0c',
      }}>
        <img
          src={member.photo}
          alt={member.name}
          style={{
            width: '100%',
            height: '110%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        />

        {/* Lead badge */}
        {isLead && (
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            backgroundColor: 'rgba(0,200,150,0.15)',
            border: '1px solid rgba(0,200,150,0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '6px',
            padding: '3px 9px',
            zIndex: 3,
          }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#00C896', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              LEAD DEV
            </span>
          </div>
        )}

        {/* Role icon badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          width: '32px', height: '32px',
          borderRadius: '9px',
          backgroundColor: 'rgba(0,0,0,0.55)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 3,
        }}>
          <Icon size={14} style={{ color: '#00C896' }} />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 22px 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{
            fontSize: '18px', fontWeight: 900, color: '#fff',
            letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 5px',
          }}>
            {member.name}
          </h3>
          <p style={{ fontSize: '11px', color: '#00C896', fontWeight: 600, margin: 0, opacity: 0.85 }}>
            {member.role.split(' · ')[0]}
          </p>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: '12px', color: '#8888a0', lineHeight: 1.6,
          margin: '0 0 16px', fontStyle: 'italic',
          borderLeft: '2px solid rgba(0,200,150,0.3)',
          paddingLeft: '10px',
        }}>
          "{member.tagline}"
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
          {member.tags.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: '9px', fontWeight: 700,
              color: 'rgba(0,200,150,0.7)',
              backgroundColor: 'rgba(0,200,150,0.07)',
              border: '1px solid rgba(0,200,150,0.18)',
              padding: '2px 7px', borderRadius: '4px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/equipe/${member.id}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', fontWeight: 700, color: hovered ? '#00C896' : '#666677',
            textDecoration: 'none',
            transition: 'color 0.2s',
            letterSpacing: '0.04em',
          }}
        >
          Ver perfil completo <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  )
}

export default function About() {
  const orderedMembers = teamOrder
    .map(id => members.find(m => m.id === id))
    .filter(Boolean) as typeof members

  return (
    <section id="sobre" style={{ backgroundColor: '#09090B', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>

      {/* Subtle dot grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Ambient glow top-right */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ── SECTION HEADER ── */}
        <div
          className="reveal-up"
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label mono">Quem Somos</span>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'end',
            marginTop: '20px',
          }}>
            <div>
              <h2 className="syne" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.9 }}>
                Três devs.<br />Uma missão.
              </h2>
            </div>

            <div>
              <p style={{ fontSize: '15px', color: '#8888a0', lineHeight: 1.85, margin: '0 0 24px' }}>
                João Vitor, Brayan e Arthur se formaram juntos no{' '}
                <span style={{ color: '#c0c0d0', fontWeight: 600 }}>IOS na PUC-RS</span>{' '}
                — patrocinado pela Dell e TOTVS. Hoje entregam produtos digitais que competem
                de igual com qualquer agência do mercado.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '10px', border: '1px solid rgba(0,200,150,0.15)', backgroundColor: 'rgba(0,200,150,0.03)' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: 'rgba(0,200,150,0.08)', border: '1px solid rgba(0,200,150,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={14} style={{ color: '#00C896' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#c0c0d0' }}>Instituto da Oportunidade Social</div>
                  <div style={{ fontSize: '10px', color: '#777788' }}>PUC-RS · Dell & TOTVS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TEAM CARDS ── */}
        <div>
          <div
            className="reveal-up"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#777788', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                A Equipe
              </span>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.03em',
                margin: '8px 0 0',
              }}>
                Conheça quem vai construir seu projeto.
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#8888a0', maxWidth: '200px', lineHeight: 1.6, textAlign: 'right' }}>
              Clique em qualquer membro para ver o perfil completo.
            </p>
          </div>

          {/* 3-column card grid */}
          <div 
            className="reveal-stagger"
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {orderedMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* ── DIFFERENTIALS STRIP ── */}
        <div
          className="reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            marginTop: '40px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.label} style={{
                padding: '24px 26px',
                backgroundColor: '#09090B',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0,200,150,0.06)',
                  border: '1px solid rgba(0,200,150,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px',
                }}>
                  <Icon size={15} style={{ color: '#00C896' }} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#e0e0e0', marginBottom: '4px' }}>{h.label}</div>
                  <div style={{ fontSize: '12px', color: '#8888a0', lineHeight: 1.6 }}>{h.sub}</div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
