import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

function BeforeMockup() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#f2f2f0', fontFamily: 'Arial, sans-serif', overflow: 'hidden' }}>
      {/* Nav */}
      <div style={{ backgroundColor: '#1a3f7a', padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: '13px', letterSpacing: '0.05em' }}>EMPRESA LTDA.</span>
        <div style={{ display: 'flex', gap: '14px' }}>
          {['Início', 'Sobre', 'Serviços', 'Contato'].map(l => (
            <span key={l} style={{ color: '#aac', fontSize: '10px' }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div style={{ backgroundColor: '#cc2200', padding: '3px 12px' }}>
        <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700 }}>🔥 PROMOÇÃO IMPERDÍVEL!! LIGUE AGORA: (51) 9 9999-9999 ★ MELHOR PREÇO GARANTIDO ★</span>
      </div>

      {/* Hero */}
      <div style={{ backgroundColor: '#dde4ef', padding: '24px 18px', textAlign: 'center', borderBottom: '3px solid #1a3f7a' }}>
        <div style={{ fontSize: '7px', backgroundColor: '#ffcc00', display: 'inline-block', padding: '2px 8px', borderRadius: '2px', marginBottom: '6px', fontWeight: 700, color: '#333' }}>NOVIDADES 2024</div>
        <h1 style={{ fontSize: '18px', color: '#1a3f7a', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Impact, Arial Black, sans-serif', lineHeight: 1.1 }}>BEM-VINDO AO<br />NOSSO SITE!</h1>
        <p style={{ fontSize: '9px', color: '#555', lineHeight: 1.4, marginBottom: '10px', maxWidth: '200px', margin: '0 auto 10px' }}>Somos a melhor empresa do segmento com os melhores serviços e os melhores preços. Qualidade garantida!</p>
        <button style={{ background: 'linear-gradient(to bottom, #5599ff, #1144bb)', border: '2px solid #003399', borderRadius: '4px', color: '#fff', padding: '6px 16px', fontSize: '10px', fontWeight: 700, cursor: 'default', boxShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>CLIQUE AQUI!</button>
      </div>

      {/* 3 columns */}
      <div style={{ padding: '14px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        {[
          { title: 'Nossos Serviços', color: '#1a3f7a' },
          { title: 'Quem Somos', color: '#2a6033' },
          { title: 'Fale Conosco', color: '#8a3300' },
        ].map(b => (
          <div key={b.title} style={{ backgroundColor: '#fff', border: `2px solid ${b.color}`, padding: '10px 8px', textAlign: 'center', borderRadius: '3px' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: b.color, borderRadius: '50%', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '12px' }}>★</span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 900, color: b.color, marginBottom: '4px', textTransform: 'uppercase' }}>{b.title}</div>
            <div style={{ fontSize: '7.5px', color: '#888', lineHeight: 1.3 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
          </div>
        ))}
      </div>

      {/* Counter row */}
      <div style={{ backgroundColor: '#1a3f7a', padding: '8px 14px', display: 'flex', justifyContent: 'space-around' }}>
        {['1000+ Clientes', '20 Anos', '100% Qualidade'].map(t => (
          <span key={t} style={{ fontSize: '8px', color: '#fff', fontWeight: 700, textAlign: 'center' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function AfterMockup() {
  const orange = '#FF5025'
  const bg     = '#0B0A08'
  const surf   = '#151310'
  const surf2  = '#1C1916'

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: bg, fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>

      {/* Background: diagonal split — left dark, right slightly lighter */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(115deg, ${bg} 0%, ${bg} 52%, #0F0D0B 52%, #0F0D0B 100%)`, zIndex: 0 }} />

      {/* Orange glow top-left */}
      <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '220px', height: '220px', borderRadius: '50%', background: `radial-gradient(circle, ${orange}22 0%, transparent 65%)`, pointerEvents: 'none', zIndex: 0 }} />

      {/* Nav — minimal, asymmetric */}
      <div style={{ position: 'relative', zIndex: 2, padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{ fontWeight: 900, fontSize: '15px', letterSpacing: '-0.04em', color: '#fff', textTransform: 'uppercase', lineHeight: 1 }}>KOVAC</span>
          <span style={{ fontSize: '7px', color: orange, fontWeight: 700, letterSpacing: '0.1em' }}>TRAINING</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {['Método', 'Resultados', 'Planos'].map(l => (
            <span key={l} style={{ color: '#333', fontSize: '8.5px', fontWeight: 500 }}>{l}</span>
          ))}
          <div style={{ backgroundColor: orange, color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '5px 11px', borderRadius: '5px', letterSpacing: '0.04em' }}>COMEÇAR</div>
        </div>
      </div>

      {/* Main layout — asymmetric editorial */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', height: 'calc(100% - 36px)' }}>

        {/* LEFT — editorial copy block */}
        <div style={{ padding: '18px 20px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          {/* Top */}
          <div>
            {/* Eyebrow — rotated accent stripe */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '18px', height: '2px', backgroundColor: orange }} />
              <span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.14em', color: orange, textTransform: 'uppercase' }}>Personal Trainer · Porto Alegre</span>
            </div>

            {/* Big editorial headline */}
            <h1 style={{ fontSize: '30px', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', color: '#fff', marginBottom: '10px' }}>
              MENOS<br />
              <span style={{ WebkitTextStroke: `1px ${orange}`, color: 'transparent', display: 'block', lineHeight: 0.88 }}>DESCULPA,</span>
              <span style={{ color: orange }}>MAIS</span><br />
              TREINO.
            </h1>

            <p style={{ fontSize: '8px', color: '#444', lineHeight: 1.6, maxWidth: '190px', marginBottom: '14px' }}>
              Protocolo personalizado. Sem enrolação. Você treina com quem sabe o que faz, e os resultados aparecem em 90 dias.
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <div style={{ backgroundColor: orange, color: '#fff', fontSize: '8px', fontWeight: 800, padding: '7px 14px', borderRadius: '6px', letterSpacing: '0.04em', boxShadow: `0 4px 18px ${orange}50` }}>QUERO COMEÇAR</div>
              <div style={{ fontSize: '7.5px', color: '#333', fontWeight: 500 }}>Avaliação grátis</div>
            </div>
          </div>

          {/* Bottom row — metrics bento */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
            {/* 90-day guarantee */}
            <div style={{ backgroundColor: surf, border: `1px solid ${orange}30`, borderRadius: '9px', padding: '9px 10px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: orange, opacity: 0.6 }} />
              <div style={{ fontSize: '20px', fontWeight: 900, color: orange, lineHeight: 1, letterSpacing: '-0.04em' }}>90</div>
              <div style={{ fontSize: '6.5px', color: '#3a3a3a', marginTop: '2px', fontWeight: 600, lineHeight: 1.3 }}>DIAS<br />GARANTIDO</div>
            </div>
            {/* Clients */}
            <div style={{ backgroundColor: surf, border: '1px solid rgba(255,255,255,0.04)', borderRadius: '9px', padding: '9px 10px' }}>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>340+</div>
              <div style={{ fontSize: '6.5px', color: '#333', marginTop: '2px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Alunos</div>
            </div>
            {/* Rating */}
            <div style={{ backgroundColor: surf, border: '1px solid rgba(255,255,255,0.04)', borderRadius: '9px', padding: '9px 10px' }}>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>4.9</div>
              <div style={{ fontSize: '6.5px', color: '#333', marginTop: '2px', fontWeight: 600, letterSpacing: '0.04em' }}>★ Google</div>
            </div>
          </div>
        </div>

        {/* RIGHT — visual + widgets */}
        <div style={{ padding: '10px 14px 10px 10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>

          {/* Photo placeholder — editorial treatment */}
          <div style={{ flex: 1, backgroundColor: '#1A1612', borderRadius: '12px', border: `1px solid ${orange}15`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
            {/* Diagonal accent */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', background: `linear-gradient(160deg, ${orange}10 0%, transparent 60%)`, pointerEvents: 'none' }} />
            {/* Large monogram */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '56px', fontWeight: 900, color: `${orange}12`, letterSpacing: '-0.06em', lineHeight: 1, userSelect: 'none' }}>KV</div>
            {/* Bottom overlay with quote */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '10px 12px', background: `linear-gradient(to top, rgba(11,10,8,0.97) 0%, transparent 100%)` }}>
              <div style={{ fontSize: '7px', fontStyle: 'italic', color: '#444', lineHeight: 1.4 }}>"Resultado não é sorte. É método."</div>
              <div style={{ fontSize: '6.5px', color: orange, fontWeight: 700, marginTop: '3px', letterSpacing: '0.06em' }}>KOVAC · Head Coach</div>
            </div>
          </div>

          {/* Vacancy widget */}
          <div style={{ backgroundColor: surf2, borderRadius: '9px', border: '1px solid rgba(255,255,255,0.04)', padding: '9px 11px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#ccc' }}>Vagas — Mar 2026</span>
              <span style={{ fontSize: '6.5px', color: orange, fontWeight: 700 }}>2 restantes</span>
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: '6px', borderRadius: '2px', backgroundColor: i < 6 ? orange : 'rgba(255,255,255,0.06)', opacity: i < 6 ? (i < 5 ? 0.25 : 0.7) : 1 }} />
              ))}
            </div>
          </div>

          {/* NewSwift stamp */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', padding: '4px 6px', borderRadius: '6px', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: '6.5px', color: '#282828', fontWeight: 600 }}>feito por</span>
            <span style={{ fontSize: '6.5px', fontWeight: 800, color: '#00FF88' }}>NewSwift</span>
            <span style={{ fontSize: '6.5px', color: '#1e1e1e', fontWeight: 500 }}>· 2026</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [position, setPosition] = useState(48)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(2, Math.min(clientX - rect.left, rect.width - 2))
    setPosition((x / rect.width) * 100)
  }, [])

  return (
    <section id="resultados" style={{ backgroundColor: '#09090B', padding: '96px 0' }} ref={sectionRef}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          <span className="section-label mono">Antes & Depois</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', marginTop: '12px', lineHeight: 0.95, marginBottom: '20px' }}>
            O antes é genérico.<br />O depois é seu.
          </h2>
          <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto' }}>
            Arraste o divisor. De um lado, o que a maioria entrega. Do outro, o que a NewSwift constrói.
          </p>
        </motion.div>

        {/* Comparison slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
        >
          {/* Labels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ padding: '10px 18px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#3a3a3a', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Antes</span>
            </div>
            <div style={{ padding: '10px 18px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#00FF88', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>Com a NewSwift</span>
            </div>
          </div>

          {/* Slider area — Pointer Events API (works on mouse + touch) */}
          <div
            ref={containerRef}
            style={{ position: 'relative', height: '420px', cursor: 'col-resize', userSelect: 'none', overflow: 'hidden', touchAction: 'none' }}
            onPointerDown={e => {
              isDragging.current = true
              ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
              updatePosition(e.clientX)
            }}
            onPointerMove={e => { if (isDragging.current) updatePosition(e.clientX) }}
            onPointerUp={() => { isDragging.current = false }}
            onPointerCancel={() => { isDragging.current = false }}
          >
            {/* BEFORE — left side, clipped to left of divider */}
            <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <BeforeMockup />
            </div>

            {/* AFTER — right side, clipped to right of divider */}
            <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 0 0 ${position}%)` }}>
              <AfterMockup />
            </div>

            {/* Divider line */}
            <div
              style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, width: '2px', backgroundColor: '#00FF88', transform: 'translateX(-50%)', zIndex: 10, boxShadow: '0 0 12px rgba(0,255,136,0.5)', pointerEvents: 'none' }}
            />

            {/* Handle */}
            <div style={{ position: 'absolute', top: '50%', left: `${position}%`, transform: 'translate(-50%, -50%)', zIndex: 11, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#00FF88', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 5px rgba(0,255,136,0.18), 0 8px 28px rgba(0,0,0,0.7)' }}>
                <span style={{ fontSize: '14px', color: '#000', fontWeight: 900, letterSpacing: '-0.05em', userSelect: 'none' }}>⇔</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
