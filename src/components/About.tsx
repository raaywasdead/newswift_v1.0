import { useState, useRef } from 'react'
import {
  Globe, Cpu, Users2,
  Code2, Palette, BarChart2, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { members } from './TeamModal'
import { useIsMobile } from '../hooks/useIsMobile'

const highlights = [
  { icon: Globe, label: 'Inglês B2', sub: 'Ferramentas internacionais e comunicação direta com qualquer stack.' },
  { icon: Cpu, label: 'Full-stack', sub: 'Do front-end ao servidor — entregamos a solução completa.' },
  { icon: Users2, label: 'Sinergia', sub: 'Equipe construída sobre confiança mútua e alinhamento técnico.' },
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
  return (
    <Link
      to={`/equipe/${member.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        border: hovered
          ? '1px solid rgba(0,255,136,0.4)'
          : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered ? 'rgba(0,255,136,0.04)' : 'rgba(255,255,255,0.018)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, background-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered
          ? '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,136,0.08)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none'
      }}
    >
      {/* Ambient glow on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,255,136,0.07) 0%, transparent 65%)',
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
            transform: hovered ? 'translateZ(0) scale(1.04)' : 'translateZ(0) scale(1)',
            willChange: 'transform',
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        />


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
          <Icon size={14} style={{ color: '#00FF88' }} />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 22px 24px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{
            fontSize: '18px', fontWeight: 900, color: '#fff',
            letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 5px',
          }}>
            {member.name}
          </h3>
          <p style={{ fontSize: '11px', color: '#00FF88', fontWeight: 600, margin: 0, opacity: 0.85 }}>
            {member.role.split(' · ')[0]}
          </p>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: '12px', color: '#8888a0', lineHeight: 1.6,
          margin: '0 0 16px', fontStyle: 'italic',
          borderLeft: '2px solid rgba(0,255,136,0.3)',
          paddingLeft: '10px',
        }}>
          "{member.tagline}"
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
          {member.tags.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: '9px', fontWeight: 700,
              color: 'rgba(0,255,136,0.7)',
              backgroundColor: 'rgba(0,255,136,0.07)',
              border: '1px solid rgba(0,255,136,0.18)',
              padding: '2px 7px', borderRadius: '4px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>{t}</span>
          ))}
        </div>

        {/* Info Label */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginTop: 'auto',
            fontSize: '11px', fontWeight: 700, color: hovered ? '#00FF88' : '#666677',
            transition: 'color 0.2s',
            letterSpacing: '0.04em',
          }}
        >
          Ver perfil completo <ArrowRight size={11} />
        </div>
      </div>
    </Link>
  )
}

export default function About() {
  const isMobile = useIsMobile()
  const [activeIdx, setActiveIdx] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [blockClick, setBlockClick] = useState(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragMoved = useRef(false)

  const onDragStart = (clientX: number) => {
    isDragging.current = true
    dragMoved.current = false
    dragStartX.current = clientX
  }

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return
    const diff = clientX - dragStartX.current
    if (Math.abs(diff) > 6) dragMoved.current = true
    const isAtStart = activeIdx === 0 && diff > 0
    const isAtEnd = activeIdx === orderedMembers.length - 1 && diff < 0
    const damped = (isAtStart || isAtEnd) ? diff * 0.2 : diff
    setDragOffset(damped)
  }

  const onDragEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    const THRESHOLD = window.innerWidth * 0.18
    if (dragOffset < -THRESHOLD && activeIdx < orderedMembers.length - 1) {
      setActiveIdx(i => i + 1)
    } else if (dragOffset > THRESHOLD && activeIdx > 0) {
      setActiveIdx(i => i - 1)
    }
    setDragOffset(0)
    if (dragMoved.current) {
      setBlockClick(true)
      setTimeout(() => setBlockClick(false), 100)
    }
    dragMoved.current = false
  }
  const orderedMembers = teamOrder
    .map(id => members.find(m => m.id === id))
    .filter(Boolean) as typeof members

  return (
    <section id="sobre" style={{ backgroundColor: '#09090B', padding: isMobile ? '80px 0 60px' : '140px 0 120px', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle dot grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />


      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 24px', position: 'relative', zIndex: 1 }}>


        {/* ── SECTION HEADER ── */}
        <div className="reveal-up" style={{ marginBottom: '72px' }}>

          {/* Top bar */}
          <div style={{ marginBottom: '48px' }}>
            <span className="section-label mono">Quem Somos</span>
          </div>

          {/* Headline */}
          <h2 className="syne" style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900,
            letterSpacing: '-0.05em', color: '#fff', lineHeight: 0.88,
            marginBottom: '48px',
          }}>
            Uma parceria focada<br />
            <span style={{ color: '#00C896' }}>na sua excelência.</span>
          </h2>

          {/* Main narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '760px' }}>
            <p style={{ fontSize: '16px', color: '#9898b0', lineHeight: 1.9, margin: 0 }}>
              Somos três especialistas em desenvolvimento web que uniram forças com um único propósito: entregar código de elite com a velocidade que seu negócio precisa.
            </p>
            <p style={{ fontSize: '16px', color: '#9898b0', lineHeight: 1.9, margin: 0 }}>
              A NewSwift nasceu da ideia de que dá pra entregar um trabalho de agência grande sendo uma equipe pequena e comprometida. Sem template, sem terceirização, sem enrolação. O que entra como projeto, sai como produto.
            </p>
          </div>
        </div>


        {/* ── TEAM CARDS ── */}
        <div 
          className="reveal-up" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '32px', 
            paddingBottom: '20px', 
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginTop: '80px'
          }}
        >
          <div>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#777788', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Tres Devs:
            </span>
            <h3 style={{
              fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em',
              margin: '8px 0 0',
            }}>
              Confira o que de fato oferecemos, com a rapidez e agilidade do mercado
            </h3>
          </div>
        </div>

          {isMobile ? (
            /* ── Mobile drag carousel ── */
            <div className="reveal-stagger">
              <div
                style={{ margin: '0 -20px', overflow: 'hidden', cursor: isDragging.current ? 'grabbing' : 'grab', userSelect: 'none' }}
                onMouseDown={e => onDragStart(e.clientX)}
                onMouseMove={e => onDragMove(e.clientX)}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onTouchStart={e => onDragStart(e.touches[0].clientX)}
                onTouchMove={e => { e.preventDefault(); onDragMove(e.touches[0].clientX) }}
                onTouchEnd={onDragEnd}
              >
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  paddingLeft: '20px',
                  transform: `translateX(calc(-${activeIdx} * (85vw + 12px) + ${dragOffset}px))`,
                  transition: isDragging.current ? 'none' : 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                  willChange: 'transform',
                }}>
                  {orderedMembers.map((member) => (
                    <div key={member.id} style={{ width: '85vw', flexShrink: 0, pointerEvents: blockClick ? 'none' : 'auto' }}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots + hint */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {orderedMembers.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      style={{ width: i === activeIdx ? '20px' : '6px', height: '6px', borderRadius: '3px', border: 'none', backgroundColor: i === activeIdx ? '#00FF88' : 'rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em', fontWeight: 500 }}>
                  deslize →
                </span>
              </div>
            </div>
          ) : (
            /* ── Desktop grid ── */
            <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {orderedMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          )}


        {/* ── DIFFERENTIALS STRIP ── */}
        <div
          className="reveal-up"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
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
