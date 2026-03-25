import { useState, useRef, useCallback, useEffect } from 'react'

function BeforeMockup() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', fontFamily: 'Arial, sans-serif', overflow: 'hidden', position: 'relative', color: '#1a1a1a' }}>
      {/* Generic Logistics Site */}
      <div style={{ backgroundColor: '#1e3a8a', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: '13px', letterSpacing: '0.05em' }}>GLOBAL LOGS</span>
        <div style={{ display: 'flex', gap: '14px' }}>
          {['HOME', 'ABOUT', 'CONTACT'].map(l => (
            <span key={l} style={{ color: '#aaa', fontSize: '9px', fontWeight: 700 }}>{l}</span>
          ))}
        </div>
      </div>
      
      <div style={{ padding: '60px 40px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#1e3a8a', lineHeight: 1.1, marginBottom: '16px' }}>WE DELIVER<br />ANYTHING.</h1>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px', maxWidth: '300px', margin: '0 auto 24px' }}>Our logistics network covers 190 countries with 24/7 support.</p>
        <button style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '12px 28px', border: 'none', borderRadius: '4px', fontWeight: 700 }}>GET QUOTE</button>
      </div>

      <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', textAlign: 'center' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#eee', borderRadius: '50%', margin: '0 auto 10px' }} />
            <div style={{ height: '8px', width: '60%', backgroundColor: '#eee', margin: '0 auto' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function AfterMockup() {
  const ac = '#8B5CF6'
  const bg = '#060608'

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: bg, fontFamily: 'Inter, sans-serif', overflow: 'hidden', position: 'relative' }}>
      {/* AETHER Luxe Hero */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 70% 30%, ${ac}15 0%, transparent 60%)` }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
      
      <nav style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="syne" style={{ fontSize: '18px', fontWeight: 900, color: '#fff', letterSpacing: '0.2em' }}>AETHER</div>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
           {['STUDIO', 'EDITIONS', 'LABS'].map(l => (
             <span key={l} style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>{l}</span>
           ))}
        </div>
      </nav>

      <div style={{ padding: '100px 48px', position: 'relative', zIndex: 1 }}>

        <h2 className="syne" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 0.85, letterSpacing: '-0.06em', marginBottom: '32px' }}>
          The Evolution of<br /><span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Atmosphere.</span>
        </h2>
        
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px' }}>
          Crafting digital ecosystems that command attention through silence and technical superiority.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
           <div style={{ padding: '18px 40px', borderRadius: '2px', backgroundColor: '#fff', color: '#000', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em' }}>GET ACCESS</div>
           <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '4px' }}>VIEW MANIFESTO</div>
        </div>
      </div>

    </div>
  )
}

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  // Prevent accidental jumps on load
  useEffect(() => {
    setPosition(50)
  }, [])

  return (
    <section id="resultados" style={{ backgroundColor: '#09090B', padding: '160px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Ambient background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(0, 255, 136, 0.03) 0%, transparent 100%)', zIndex: 0, filter: 'blur(120px)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Header - Editorial Style */}
        <div
          className="reveal-up"
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label mono">Antes & Depois</span>
          <h2 className="syne" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#fff', marginTop: '16px', lineHeight: 0.9 }}>
            O antes é genérico.<br />O depois é seu.
          </h2>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, maxWidth: '440px', margin: '24px auto 0' }}>
            Deslize o divisor para comparar a mediocridade do mercado com a engenharia de precisão da NewSwift.
          </p>
        </div>

        {/* Comparison Stage - Theatrical Container */}
        <div
          className="reveal-up"
          style={{ 
            position: 'relative',
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.06)', 
            boxShadow: '0 64px 120px -30px rgba(0,0,0,0.8)',
            backgroundColor: '#000', // Solid black base to prevent leakage
            height: '640px'
          }}
        >
          {/* Interaction Area */}
          <div
            ref={containerRef}
            style={{ position: 'relative', width: '100%', height: '100%', cursor: 'col-resize', userSelect: 'none', overflow: 'hidden', touchAction: 'none' }}
            onPointerDown={e => {
              isDragging.current = true
              ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
              updatePosition(e.clientX)
            }}
            onPointerMove={e => { if (isDragging.current) updatePosition(e.clientX) }}
            onPointerUp={() => { isDragging.current = false }}
            onPointerCancel={() => { isDragging.current = false }}
          >
            {/* BEFORE LAYER */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <BeforeMockup />
            </div>

            {/* AFTER LAYER - This one clips the Before layer */}
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              zIndex: 2, 
              clipPath: `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`, 
              backgroundColor: '#000'
            }}>
              <AfterMockup />
            </div>

            {/* HUD Status Label - Bottom Right */}
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 30, pointerEvents: 'none' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '100px', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00FF88', boxShadow: '0 0 10px rgba(0,255,136,0.6)' }} />
                <span className="mono" style={{ fontSize: '10px', color: '#fff', fontWeight: 800, letterSpacing: '0.12em' }}>NSWIFT_ENGINEERING</span>
              </div>
            </div>

            {/* Refined Divider */}
            <div
              style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, width: '1px', backgroundColor: 'rgba(255,255,255,0.2)', transform: 'translateX(-50%)', zIndex: 20, pointerEvents: 'none' }}
            >
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)' }} />
            </div>

            {/* Tactile Handle */}
            <div style={{ position: 'absolute', top: '50%', left: `${position}%`, transform: 'translate(-50%, -50%)', zIndex: 21, pointerEvents: 'none' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '50%', 
                backgroundColor: '#fff', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                boxShadow: '0 12px 32px rgba(0,0,0,0.5)' 
              }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                   {[1, 2].map(i => <div key={i} style={{ width: '2px', height: '14px', backgroundColor: '#000', borderRadius: '10px' }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
