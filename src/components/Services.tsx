import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Palette, Gauge, CheckCircle, ArrowUpRight, LayoutTemplate, Zap, Shield, Cpu } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    subtitle: 'High-Performance Ecosystems',
    summary: 'Sites e sistemas modernos em React / Next.js, otimizados para conversão e SEO.',
    deliverables: [
      'Design exclusivo Syne-based',
      'Desenvolvimento React / Next.js',
      'SEO técnico on-page incluso',
      'Responsividade Multi-device',
    ],
    timeline: '10–21 dias',
    tags: ['React', 'Next.js', 'Vercel'],
    accent: '#00FF88',
    featured: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Visual Identity & Systems',
    summary: 'Protótipos no Figma, sistemas de design e identidade visual antes de uma linha de código.',
    deliverables: [
      'Pesquisa de usuário & Fluxos',
      'Protótipo interativo no Figma',
      'Design system escalável',
      'Guia de uso para equipes',
    ],
    timeline: '7–14 dias',
    tags: ['Figma', 'System', 'Prototyping'],
    accent: '#8B5CF6',
    featured: false,
  },
  {
    icon: Gauge,
    title: 'Performance',
    subtitle: 'Core Web Vitals Optimization',
    summary: 'Diagnóstico e correção de Core Web Vitals, SEO técnico e taxa de conversão do seu site atual.',
    deliverables: [
      'Auditoria técnica detalhada',
      'Otimização Core Web Vitals',
      'Lazy load & Image compression',
      'Relatório Antes/Depois',
    ],
    timeline: '5–10 dias',
    tags: ['PageSpeed', 'Web Vitals', 'SEO'],
    accent: '#00C896',
    featured: false,
  },
  {
    icon: LayoutTemplate,
    title: 'Templates',
    subtitle: 'Premium Pre-built Structures',
    summary: 'Projetos completos e sofisticados em React e Next.js com foco em animação e performance.',
    deliverables: [
      'Código limpo (TS + Tailwind)',
      'Animações GSAP/Framer inclusas',
      'Acessibilidade & Responsivo',
      'Suporte inicial de 30 dias',
    ],
    timeline: 'Entrega Imediata',
    tags: ['Templates', 'TypeScript', 'Clean'],
    accent: '#FFD700',
    featured: false,
  },
]

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = s.icon

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '24px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: hovered ? `1px solid ${s.accent}40` : '1px solid rgba(255,255,255,0.06)',
        padding: '40px 32px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: hovered ? `0 32px 64px -20px rgba(0,0,0,0.6), 0 0 0 1px ${s.accent}10` : 'none',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-20%', width: '150px', height: '150px',
        background: `radial-gradient(circle, ${s.accent}15 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0.3, transition: 'opacity 0.4s', zIndex: 0, filter: 'blur(40px)'
      }} />

      {/* Header HUD */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          width: '56px', height: '56px', borderRadius: '16px', 
          backgroundColor: 'rgba(255,255,255,0.03)', 
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? `0 0 20px ${s.accent}20` : 'none',
          transition: 'all 0.4s'
        }}>
          <Icon size={24} style={{ color: hovered ? s.accent : '#fff', transition: 'color 0.4s' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
           <span className="mono" style={{ fontSize: '9px', fontWeight: 800, color: '#444', letterSpacing: '0.15em' }}>SVC_ID_{i + 1}</span>
           {s.featured && (
             <span style={{ fontSize: '8px', fontWeight: 900, color: s.accent, backgroundColor: `${s.accent}15`, padding: '3px 8px', borderRadius: '4px', border: `1px solid ${s.accent}30`, letterSpacing: '0.1em' }}>TOP PRIORITY</span>
           )}
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <span className="mono" style={{ fontSize: '10px', color: s.accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{s.subtitle}</span>
        <h3 className="syne" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '20px' }}>{s.title}</h3>
        <p style={{ fontSize: '14px', color: '#8888a0', lineHeight: 1.7, marginBottom: '32px' }}>{s.summary}</p>

        {/* Deliverables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '40px' }}>
           {s.deliverables.map(d => (
             <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <CheckCircle size={14} style={{ color: s.accent, opacity: 0.6 }} />
               <span style={{ fontSize: '12px', color: '#c0c0d0', letterSpacing: '-0.01em' }}>{d}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Footer HUD */}
      <div style={{ 
        paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'relative', zIndex: 1
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
           <span className="mono" style={{ fontSize: '9px', color: '#444', letterSpacing: '0.1em' }}>TIMELINE</span>
           <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>{s.timeline}</span>
        </div>
        <a 
          href="#contato" 
          style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: hovered ? s.accent : 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', textDecoration: 'none' }}
        >
          <ArrowUpRight size={18} style={{ color: hovered ? '#000' : '#666', transition: 'color 0.3s' }} />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  

  return (
    <section id="sobre" style={{ backgroundColor: '#09090B', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Ambient static background elements */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.03, pointerEvents: 'none' }}>
         <Cpu size={400} color="#fff" strokeWidth={0.5} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        <div
          className="reveal-up"
          style={{ marginBottom: '100px', textAlign: 'center' }}
        >
          <span className="section-label mono" style={{ margin: '0 auto' }}>O Que Fazemos</span>
            <h2 className="syne" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.9 }}>
              Nossas<br />especialidades.
            </h2>
          <p style={{ fontSize: '15px', color: '#666', maxWidth: '480px', margin: '32px auto 0', lineHeight: 1.8 }}>
            Unimos design editorial com engenharia de precisão para entregar produtos que não apenas funcionam, mas respiram autoridade.
          </p>
        </div>

        {/* 3x3 or Grid of Services */}
        <div 
          className="reveal-stagger"
          style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {[
            { icon: Zap, text: 'Ultra Performance' },
            { icon: Shield, text: 'Segurança Blindada' },
            { icon: Cpu, text: 'Tech Stack Moderna' },
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon size={16} color="#444" />
                <span className="mono" style={{ fontSize: '11px', color: '#444', letterSpacing: '0.1em' }}>{item.text}</span>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
