import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import PixelBlast from './PixelBlast'

const WORDS = ['VENDEM.', 'ATRAEM.', 'MARCAM.', 'LUCRAM.']
const TYPE_MS = 85
const DEL_MS = 40
const PAUSE_MS = 2000

function useTypewriter() {
  const [display, setDisplay] = useState(WORDS[0])
  const wordIdxRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = WORDS[wordIdxRef.current]

      if (!deletingRef.current) {
        // Typing
        if (display.length < word.length) {
          setDisplay(word.slice(0, display.length + 1))
          timer = setTimeout(tick, TYPE_MS)
        } else {
          // Finished typing — pause then delete
          timer = setTimeout(() => {
            deletingRef.current = true
            tick()
          }, PAUSE_MS)
        }
      } else {
        // Deleting
        if (display.length > 0) {
          setDisplay(word.slice(0, display.length - 1))
          timer = setTimeout(tick, DEL_MS)
        } else {
          // Finished deleting — move to next word
          deletingRef.current = false
          wordIdxRef.current = (wordIdxRef.current + 1) % WORDS.length
          setDisplay('')
          timer = setTimeout(tick, TYPE_MS)
        }
      }
    }

    timer = setTimeout(tick, TYPE_MS)
    return () => clearTimeout(timer)
  }, [display])

  return display
}

const icons = [
  { src: '/icons/java.png', alt: 'Java' },
  { src: '/icons/css.png', alt: 'CSS3' },
  { src: '/icons/javascript.png', alt: 'JavaScript' },
  { src: '/icons/typescript.png', alt: 'TypeScript' },
  { src: '/icons/html.png', alt: 'HTML5' },
  { src: '/icons/figma.png', alt: 'Figma' },
  { src: '/icons/react.png', alt: 'React' },
  { src: '/icons/postgresql.png', alt: 'PostgreSQL' },
  { src: '/icons/vscode.png', alt: 'VS Code' },
]

const ticker = [...icons, ...icons, ...icons, ...icons]

const stats = [
  { value: '100%', label: 'Satisfação' },
  { value: '<10d', label: 'Entrega média' },
  { value: '3', label: 'Devs dedicados' },
]

export default function Hero() {
  const typed = useTypewriter()


  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#09090B', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* PixelBlast Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <PixelBlast
          color="#00FF88"
          variant="circle"
          pixelSize={4}
          patternScale={3}
          patternDensity={0.6}
          speed={0.3}
          edgeFade={0.35}
          enableRipples={true}
          rippleIntensityScale={0.8}
          liquid={false}
          transparent={true}
        />
      </div>

      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px', zIndex: 0, pointerEvents: 'none' }} />
      {/* Radial fade over dots */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, #09090B 100%)', zIndex: 0, pointerEvents: 'none' }} />

      {/* Animated ambient blobs */}
      <div className="blob-drift" style={{ position: 'absolute', bottom: '-18%', left: '-12%', width: '720px', height: '720px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.09) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="blob-drift-r" style={{ position: 'absolute', top: '-12%', right: '-10%', width: '540px', height: '540px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Left edge accent line */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(0,255,136,0.12) 30%, rgba(0,255,136,0.12) 70%, transparent)', zIndex: 1 }} />

      {/* ── Main two-column ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '100px 48px 40px', gap: '72px', position: 'relative', zIndex: 1 }}>

        {/* LEFT */}
        <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Availability badge */}
          <div
            className="hero-badge"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px 6px 9px', borderRadius: '100px', border: '1px solid rgba(0,255,136,0.28)', backgroundColor: 'rgba(0,255,136,0.07)', width: 'fit-content', opacity: 0, visibility: 'hidden' }}
          >
            <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#00FF88', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', color: '#00FF88', fontWeight: 600, letterSpacing: '0.07em' }}>Disponível para novos projetos</span>
          </div>

          {/* Headline */}
          <h1
            className="hero-title"
            style={{ fontSize: 'clamp(3.6rem, 7.5vw, 6.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.045em', margin: 0, opacity: 0, visibility: 'hidden' }}
          >
            <span style={{ color: '#fff', display: 'block' }}>CRIAMOS</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(130deg, #00FF88 0%, #00D4A0 55%, #009E78 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 28px rgba(0,255,136,0.35))',
            }}>SITES QUE</span>
            <span style={{ color: '#fff', display: 'block' }}>
              {typed}
              <span style={{
                display: 'inline-block',
                width: '4px',
                height: '0.78em',
                backgroundColor: '#00FF88',
                marginLeft: '4px',
                verticalAlign: 'middle',
                borderRadius: '1px',
                animation: 'blink 1s step-end infinite',
              }} />
            </span>
          </h1>

          {/* Subline */}
          <p
            className="hero-subline"
            style={{ fontSize: '15px', color: '#8888a0', lineHeight: 1.85, maxWidth: '440px', margin: 0, opacity: 0, visibility: 'hidden' }}
          >
            Somos três desenvolvedores formados pelo IOS na PUC-RS. Transformamos ideias em presença digital com prazo real, código limpo e design que de fato converte.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', opacity: 0, visibility: 'hidden' }}
          >
            <a
              href="#contato"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '14px 28px', borderRadius: '10px', backgroundColor: '#00FF88', color: '#000', fontSize: '13px', fontWeight: 800, letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.22s', boxShadow: '0 4px 24px rgba(0,255,136,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#00e07a'; e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,255,136,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#00FF88'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,255,136,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              ENTRE EM CONTATO <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <a
              href="#sobre"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '14px 24px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', color: '#888', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textDecoration: 'none', textTransform: 'uppercase', backgroundColor: 'transparent', transition: 'all 0.22s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.35)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#888'; e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              VER PROJETOS
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{ display: 'flex', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', width: 'fit-content', marginTop: '4px', opacity: 0, visibility: 'hidden' }}
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{ paddingRight: '32px', marginRight: '32px', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 900, color: '#00FF88', letterSpacing: '-0.03em', lineHeight: 1, textShadow: '0 0 24px rgba(0,255,136,0.35)' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#777788', marginTop: '6px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: photo with rotating gradient border */}
        <div
          className="hero-photo"
          style={{ flex: '1 1 440px', position: 'relative', maxWidth: '540px', opacity: 0, visibility: 'hidden' }}
        >
          {/* Deep ambient glow */}
          <div style={{ position: 'absolute', inset: '-24%', background: 'radial-gradient(ellipse 70% 70% at 50% 62%, rgba(0,255,136,0.1) 0%, transparent 65%)', zIndex: 0, filter: 'blur(24px)', borderRadius: '50%' }} />

          {/* Rotating gradient border ring */}
          <div
            className="rotating-border"
            style={{ position: 'absolute', inset: '-2px', borderRadius: '14px', zIndex: 0 }}
          />

          {/* Photo container — sits inside the rotating border */}
          <div style={{ position: 'relative', zIndex: 1, borderRadius: '12px', overflow: 'hidden', backgroundColor: '#09090B', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img
              src="/equipe-ns.png"
              alt="Equipe NewSwift"
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
            />
            {/* Bottom gradient fade */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, rgba(9,9,11,0.85), transparent)' }} />
          </div>

          {/* Corner accent brackets */}
          {[
            { top: -16, left: -16, borderTop: true, borderLeft: true },
            { top: -16, right: -16, borderTop: true, borderRight: true },
            { bottom: -16, left: -16, borderBottom: true, borderLeft: true },
            { bottom: -16, right: -16, borderBottom: true, borderRight: true },
          ].map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 32, height: 32,
              zIndex: 2,
              ...(c.top !== undefined ? { top: c.top } : { bottom: c.bottom }),
              ...(c.left !== undefined ? { left: c.left } : { right: c.right }),
              borderTop: c.borderTop ? '2px solid rgba(0,255,136,0.55)' : undefined,
              borderBottom: c.borderBottom ? '2px solid rgba(0,255,136,0.55)' : undefined,
              borderLeft: c.borderLeft ? '2px solid rgba(0,255,136,0.55)' : undefined,
              borderRight: c.borderRight ? '2px solid rgba(0,255,136,0.55)' : undefined,
            }} />
          ))}

        </div>
      </div>

      {/* ── Icon conveyor belt ── */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '56px', overflow: 'hidden' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent)', marginBottom: '28px' }} />

        <div style={{ position: 'absolute', right: 0, top: '1px', bottom: 0, width: '88px', background: 'linear-gradient(to left, #09090B, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="icon-ticker-track" style={{ padding: '4px 0' }}>
          {ticker.map((icon, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '78px', flexShrink: 0, padding: '0 6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s ease' }}>
                <img src={icon.src} alt={icon.alt} style={{ width: '36px', height: '36px', objectFit: 'contain', opacity: 0.75 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
