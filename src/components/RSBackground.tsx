import { useEffect, useRef } from 'react'

// State codes: RS=43, SC=42, PR=41
const STATE_CODES = [
  { code: 43, primary: true  }, // Rio Grande do Sul
  { code: 42, primary: false }, // Santa Catarina
  { code: 41, primary: false }, // Paraná
]

interface GeoJsonFeature {
  type: string
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][] | number[][][][]
  }
}

function project(lon: number, lat: number, bbox: number[], W: number, H: number, padding: number): [number, number] {
  const [minLon, minLat, maxLon, maxLat] = bbox
  const scaleX = (W - padding * 2) / (maxLon - minLon)
  const scaleY = (H - padding * 2) / (maxLat - minLat)
  const scale  = Math.min(scaleX, scaleY)
  const offsetX = padding + ((W - padding * 2) - (maxLon - minLon) * scale) / 2
  const offsetY = padding + ((H - padding * 2) - (maxLat - minLat) * scale) / 2
  const x = offsetX + (lon - minLon) * scale
  const y = H - (offsetY + (lat - minLat) * scale) // flip Y
  return [x, y]
}

function drawFeature(
  ctx: CanvasRenderingContext2D,
  feature: GeoJsonFeature,
  bbox: number[],
  W: number,
  H: number,
  padding: number
) {
  const geom = feature.geometry
  const polys: number[][][][] =
    geom.type === 'MultiPolygon'
      ? (geom.coordinates as number[][][][])
      : [(geom.coordinates as number[][][])]

  for (const poly of polys) {
    ctx.beginPath()
    for (const ring of poly) {
      ;(ring as [number, number][]).forEach(([lon, lat], i) => {
        const [x, y] = project(lon, lat, bbox, W, H, padding)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.closePath()
    }
    ctx.fill()
  }
}

export default function RSBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DPR = window.devicePixelRatio || 1
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width  = W * DPR
    canvas.height = H * DPR
    ctx.scale(DPR, DPR)

    // RS bounding box (approximate) - center the view on RS
    // RS: lon -57.64 to -49.69, lat -33.75 to -27.08
    // Add some context around RS
    const bbox = [-60.5, -34.5, -47.5, -24.5]

    const DOT_STEP = 4

    // Off-screen canvases for each state
    const renderState = async (code: number, isPrimary: boolean) => {
      const url = `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${code}?formato=application/vnd.geo+json`
      const res  = await fetch(url)
      const geo  = await res.json()
      const features: GeoJsonFeature[] = geo.features ?? [geo]

      // Rasterise on off-screen canvas
      const off    = document.createElement('canvas')
      off.width    = W
      off.height   = H
      const offCtx = off.getContext('2d')!
      offCtx.fillStyle = '#fff'
      for (const f of features) drawFeature(offCtx, f, bbox, W, H, 40)

      // Sample → dots
      const img = offCtx.getImageData(0, 0, W, H)

      if (isPrimary) {
        // Primary RS: bright green dots with glow
        ctx.shadowBlur  = 4
        ctx.shadowColor = 'rgba(0,255,136,0.6)'
        ctx.fillStyle   = 'rgba(0,255,136,0.55)'
        for (let py = DOT_STEP; py < H; py += DOT_STEP) {
          for (let px = DOT_STEP; px < W; px += DOT_STEP) {
            if (img.data[(py * W + px) * 4] > 128) {
              ctx.beginPath()
              ctx.arc(px, py, 1, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
        ctx.shadowBlur = 0

        // Outline stroke
        ctx.strokeStyle = 'rgba(0,255,136,0.25)'
        ctx.lineWidth   = 1
        for (const f of features) {
          const geom = f.geometry
          const polys: number[][][][] =
            geom.type === 'MultiPolygon'
              ? (geom.coordinates as number[][][][])
              : [(geom.coordinates as number[][][])]
          for (const poly of polys) {
            ctx.beginPath()
            for (const ring of poly) {
              ;(ring as [number, number][]).forEach(([lon, lat], i) => {
                const [x, y] = project(lon, lat, bbox, W, H, 40)
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
              })
              ctx.closePath()
            }
            ctx.stroke()
          }
        }
      } else {
        // Neighboring states: very dim outline only
        ctx.strokeStyle = 'rgba(0,255,136,0.07)'
        ctx.lineWidth   = 0.8
        ctx.fillStyle   = 'rgba(0,255,136,0.025)'
        for (const f of features) {
          const geom = f.geometry
          const polys: number[][][][] =
            geom.type === 'MultiPolygon'
              ? (geom.coordinates as number[][][][])
              : [(geom.coordinates as number[][][])]
          for (const poly of polys) {
            ctx.beginPath()
            for (const ring of poly) {
              ;(ring as [number, number][]).forEach(([lon, lat], i) => {
                const [x, y] = project(lon, lat, bbox, W, H, 40)
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
              })
              ctx.closePath()
            }
            ctx.fill()
            ctx.stroke()
          }
        }
      }
    }

    // Draw neighbors first (behind RS), then RS on top
    const run = async () => {
      for (const { code, primary } of [...STATE_CODES].reverse()) {
        await renderState(code, primary).catch(() => {})
      }
    }
    run()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    />
  )
}
