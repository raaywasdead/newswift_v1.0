import { useEffect, useRef } from 'react'
import { feature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'

interface Dot {
  x: number
  y: number
  phase: number
}

function mercator(lon: number, lat: number, W: number, H: number): [number, number] {
  const x = ((lon + 180) / 360) * W
  const latRad = (lat * Math.PI) / 180
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2))
  const y = H / 2 - (W * mercN) / (2 * Math.PI)
  return [x, y]
}

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dots: Dot[] = []
    let alive = true

    const setup = () => {
      const DPR = window.devicePixelRatio || 1
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      canvas.width = W * DPR
      canvas.height = H * DPR
      ctx.scale(DPR, DPR)
      return { W, H }
    }

    const animate = (t: number) => {
      if (!alive) return
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      for (const d of dots) {
        const a = 0.28 + 0.22 * Math.sin(t * 0.0007 + d.phase)
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${a.toFixed(3)})`
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    const build = (
      features: Array<{ geometry: { type: string; coordinates: unknown } }>
    ) => {
      const { W, H } = setup()
      const DOT_STEP = 5

      // Rasterise countries on off-screen canvas
      const off = document.createElement('canvas')
      off.width = W
      off.height = H
      const offCtx = off.getContext('2d')!
      offCtx.fillStyle = '#fff'

      for (const f of features) {
        const geom = f.geometry
        const polys: number[][][][] =
          geom.type === 'MultiPolygon'
            ? (geom.coordinates as number[][][][])
            : [(geom.coordinates as number[][][])]

        for (const poly of polys) {
          offCtx.beginPath()
          for (const ring of poly) {
            ;(ring as [number, number][]).forEach(([lon, lat], i) => {
              const [x, y] = mercator(lon, lat, W, H)
              if (i === 0) offCtx.moveTo(x, y)
              else offCtx.lineTo(x, y)
            })
            offCtx.closePath()
          }
          offCtx.fill()
        }
      }

      // Sample pixels → dots
      const img = offCtx.getImageData(0, 0, W, H)
      dots = []
      for (let py = DOT_STEP; py < H - DOT_STEP; py += DOT_STEP) {
        for (let px = DOT_STEP; px < W - DOT_STEP; px += DOT_STEP) {
          const i = (py * W + px) * 4
          if (img.data[i] > 128) {
            dots.push({ x: px, y: py, phase: Math.random() * Math.PI * 2 })
          }
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(r => r.json())
      .then((topo: Topology) => {
        const land = feature(
          topo,
          topo.objects['countries'] as GeometryCollection
        )
        build(land.features as Parameters<typeof build>[0])
      })
      .catch(() => {
        // Fallback: just skip if fetch fails
      })

    return () => {
      alive = false
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(0,255,136,0.1)',
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 0 40px rgba(0,255,136,0.04) inset',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,255,136,0.04) 0%, transparent 70%)',
      }} />

      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}
