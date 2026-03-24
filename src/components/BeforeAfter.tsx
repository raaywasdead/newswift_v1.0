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
  const ac  = '#FF5C28'
  const bg  = '#080706'

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: bg, fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', position: 'relative' }}>

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '260px', height: '260px', borderRadius: '50%', background: `radial-gradient(circle, ${ac}1a 0%, transparent 65%)`, filter: 'blur(18px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '0', left: '-8%', width: '180px', height: '180px', borderRadius: '50%', background: `radial-gradient(circle, ${ac}0d 0%, transparent 65%)`, filter: 'blur(14px)', zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: 'relative', zIndex: 3, padding: '11px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: `linear-gradient(135deg, ${ac}, #FF8C5A)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 3px 10px ${ac}40` }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>K</span>
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>KOVAC</span>
            <span style={{ fontSize: '6.5px', color: ac, fontWeight: 700, letterSpacing: '0.1em', marginLeft: '5px' }}>TRAINING</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          {['Método', 'Resultados', 'Planos'].map(l => (
            <span key={l} style={{ color: '#4a4a4a', fontSize: '8px', fontWeight: 500 }}>{l}</span>
          ))}
        </div>
        <div style={{ background: `linear-gradient(90deg, ${ac}, #FF7A45)`, color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '6px 13px', borderRadius: '20px', letterSpacing: '0.04em', boxShadow: `0 4px 14px ${ac}45` }}>
          COMEÇAR
        </div>
      </nav>

      {/* Body */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', height: 'calc(100% - 44px)' }}>

        {/* LEFT */}
        <div style={{ padding: '18px 20px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {/* Eyebrow pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px 3px 5px', borderRadius: '20px', border: `1px solid ${ac}28`, backgroundColor: `${ac}0c`, marginBottom: '13px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: ac, boxShadow: `0 0 6px ${ac}` }} />
              <span style={{ fontSize: '6.5px', fontWeight: 700, color: ac, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Personal · Porto Alegre</span>
            </div>

            {/* Headline — mix of solid + outline */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '32px', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.05em', color: '#fff' }}>CORPO</div>
              <div style={{ fontSize: '32px', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.05em', color: 'transparent', WebkitTextStroke: `1.5px ${ac}` }}>QUE VENDE.</div>
              <div style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#2a2a2a', marginTop: '6px' }}>Sem enrolação.</div>
            </div>

            <p style={{ fontSize: '7.5px', color: '#3e3e3e', lineHeight: 1.7, maxWidth: '185px', marginBottom: '14px' }}>
              Protocolo 100% personalizado. Acompanhamento direto e resultado em 90 dias — ou devolvemos o investimento.
            </p>

            {/* CTA + social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: `linear-gradient(90deg, ${ac}, #FF7A45)`, color: '#fff', fontSize: '7.5px', fontWeight: 800, padding: '8px 14px', borderRadius: '8px', letterSpacing: '0.04em', boxShadow: `0 6px 20px ${ac}45` }}>
                AGENDAR AVALIAÇÃO
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ display: 'flex' }}>
                  {['#2a2520', '#221e1a', '#1e1a16'].map((c, i) => (
                    <div key={i} style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: c, border: `1.5px solid ${bg}`, marginLeft: i > 0 ? '-5px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '7px', color: '#888' }}>●</span>
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '6px', color: '#383838' }}>+340</span>
              </div>
            </div>
          </div>

          {/* Metrics row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
            {[
              { val: '90d',  sub: 'Garantia',  hi: true  },
              { val: '4.9★', sub: 'Google',    hi: false },
              { val: '340+', sub: 'Alunos',    hi: false },
            ].map(m => (
              <div key={m.val} style={{
                backgroundColor: m.hi ? `${ac}12` : 'rgba(255,255,255,0.025)',
                border: m.hi ? `1px solid ${ac}28` : '1px solid rgba(255,255,255,0.04)',
                borderRadius: '9px', padding: '8px 10px',
                position: 'relative', overflow: 'hidden',
              }}>
                {m.hi && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${ac}, #FF8C5A)` }} />}
                <div style={{ fontSize: '18px', fontWeight: 900, color: m.hi ? ac : '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>{m.val}</div>
                <div style={{ fontSize: '6px', color: '#2e2e2e', marginTop: '2px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ padding: '10px 14px 10px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>

          {/* Photo card */}
          <div style={{ flex: 1, borderRadius: '14px', border: `1px solid ${ac}18`, position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #141210 0%, #0d0b09 100%)' }}>
            {/* Diagonal streak */}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(155deg, ${ac}16 0%, transparent 55%)` }} />
            {/* Grid lines */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${ac}06 1px, transparent 1px), linear-gradient(90deg, ${ac}06 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
            {/* Monogram */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -52%)', fontSize: '52px', fontWeight: 900, color: `${ac}14`, letterSpacing: '-0.06em', lineHeight: 1, userSelect: 'none' }}>KV</div>
            {/* Corner badge */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: `${ac}1a`, border: `1px solid ${ac}35`, borderRadius: '5px', padding: '3px 7px' }}>
              <span style={{ fontSize: '6px', fontWeight: 700, color: ac, letterSpacing: '0.08em' }}>CREF ATIVO</span>
            </div>
            {/* Caption */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 12px 10px', background: 'linear-gradient(to top, rgba(8,7,6,0.98) 0%, transparent 100%)' }}>
              <div style={{ fontSize: '6.5px', fontStyle: 'italic', color: '#3a3a3a', lineHeight: 1.5 }}>"Resultado não é sorte.<br />É método."</div>
              <div style={{ fontSize: '6.5px', color: ac, fontWeight: 700, marginTop: '3px', letterSpacing: '0.06em' }}>KOVAC · Head Coach</div>
            </div>
          </div>

          {/* Booking widget */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', padding: '9px 11px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
              <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#ccc' }}>Vagas — Mar 2026</span>
              <span style={{ fontSize: '6.5px', color: ac, fontWeight: 800 }}>2 restam</span>
            </div>
            <div style={{ display: 'flex', gap: '2.5px' }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: '5px', borderRadius: '2px', backgroundColor: i < 6 ? (i < 5 ? `${ac}30` : ac) : 'rgba(255,255,255,0.05)' }} />
              ))}
            </div>
            <div style={{ fontSize: '6px', color: '#2a2a2a', marginTop: '4px' }}>Online & Presencial · Porto Alegre</div>
          </div>

          {/* NewSwift badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', padding: '4px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.03)', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <span style={{ fontSize: '6px', color: '#202020' }}>feito por</span>
            <span style={{ fontSize: '6.5px', fontWeight: 800, color: '#00FF88' }}>NewSwift</span>
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
