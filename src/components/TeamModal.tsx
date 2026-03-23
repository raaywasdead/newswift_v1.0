import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code2, Palette, BarChart2, Globe, GraduationCap, ExternalLink } from 'lucide-react'

export interface TeamMember {
  id: string
  name: string
  role: string
  photo: string          // /public path
  color: string
  tagline: string
  bio: string[]
  origin: string
  skills: { label: string; level: number }[]
  highlights: { icon: typeof Code2; text: string }[]
  tags: string[]
}

export const members: TeamMember[] = [
  {
    id: 'joaovitor',
    name: 'Joao Vitor',
    role: 'Full Stack Developer · Lead · Co-fundador',
    photo: '/João.webp',
    color: '#00C896',
    tagline: 'Da arquitetura ao deploy — cada camada pensada, cada detalhe entregue.',
    bio: [
      'Joao Vitor é o pilar técnico da NewSwift. Com domínio que vai do banco de dados ao front-end, passando por APIs, infraestrutura e estratégia de dados, ele garante que cada projeto funcione de verdade — não só pareça bonito.',
      'Formado pelo IOS — curso de Desenvolvimento Web dentro da PUC-RS, patrocinado pela Dell e TOTVS, com foco em HTML, CSS e JavaScript. Foi lá que a ideia da NewSwift nasceu. Após o curso, expandiu por conta própria para React, Node.js, TypeScript e bancos de dados, tornando-se o lead técnico da consultoria.',
      'Com inglês B2 (Upper-Intermediate) e domínio sólido de hardware e software, é o membro da equipe com maior abrangência técnica — atuando desde a escolha de stack até o deploy em produção, com liderança natural e comunicação direta com o cliente.',
    ],
    origin: 'Estudante do Ensino Médio · IOS na PUC-RS · Dell & TOTVS · Lead Dev',
    skills: [
      { label: 'React / Next.js',      level: 93 },
      { label: 'TypeScript',           level: 90 },
      { label: 'Node.js / REST APIs',  level: 88 },
      { label: 'Banco de Dados / SQL', level: 86 },
      { label: 'Infraestrutura / CI',  level: 82 },
      { label: 'Inglês B2',            level: 80 },
      { label: 'Hardware & Redes',     level: 78 },
    ],
    highlights: [
      { icon: Code2,         text: 'Full Stack completo — front, back, banco e infra' },
      { icon: BarChart2,     text: 'Idealizador e lead técnico da NewSwift' },
      { icon: Globe,         text: 'Inglês B2 — leitura de docs, comunicação internacional' },
      { icon: GraduationCap, text: 'IOS na PUC-RS · patrocinado por Dell e TOTVS' },
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel', 'REST APIs', 'Git', 'Linux', 'Hardware'],
  },
  {
    id: 'brayan',
    name: 'Brayan',
    role: 'UI/UX Designer & Frontend Developer',
    photo: '/brayan.webp',
    color: '#00C896',
    tagline: 'Interfaces que parecem fáceis porque foram difíceis de fazer.',
    bio: [
      'Brayan é o responsável pela identidade visual e pela experiência do usuário em cada projeto da NewSwift. Com olhar apurado para estética e usabilidade, transforma briefings em protótipos que encantam antes do código existir.',
      'Sua especialidade está na interseção entre design e desenvolvimento: criando no Figma sistemas de design completos e implementando-os em React com a mesma fidelidade. O resultado? Interfaces bonitas que também funcionam.',
      'Dentro da equipe, é o primeiro filtro criativo — quem garante que nenhum projeto sai feio ou confuso para o usuário final.',
    ],
    origin: 'Estudante do Ensino Médio · IOS na PUC-RS · Dell & TOTVS',
    skills: [
      { label: 'Figma / Protótipo', level: 92 },
      { label: 'UI/UX Design',      level: 90 },
      { label: 'React / CSS',       level: 85 },
      { label: 'Design Systems',    level: 87 },
      { label: 'Animações Web',     level: 78 },
      { label: 'Pesquisa UX',       level: 75 },
    ],
    highlights: [
      { icon: Palette,     text: 'Design Systems e identidades visuais do zero' },
      { icon: Code2,       text: 'React com fidelidade total ao design criado' },
      { icon: BarChart2,   text: 'Testes de usabilidade e iteração rápida' },
      { icon: GraduationCap, text: 'IOS na PUC-RS · HTML, CSS & JS · patrocinado por Dell e TOTVS' },
    ],
    tags: ['Figma', 'React', 'CSS', 'Tailwind', 'Framer Motion', 'Design System', 'UX Research', 'Prototipagem'],
  },
  {
    id: 'arthur',
    name: 'Arthur',
    role: 'Analista Técnico & Developer',
    photo: '/Arthur.webp',
    color: '#00C896',
    tagline: 'Onde os outros veem código, ele vê padrões.',
    bio: [
      'Arthur é o pensamento crítico da NewSwift. Enquanto a equipe avança na construção, ele é quem questiona, analisa e garante que cada decisão técnica faz sentido para o projeto como um todo.',
      'Sua abordagem analítica vai além do código: antes de escrever uma linha, já mapeou os riscos, os gargalos de performance e as melhores estratégias de escalabilidade. É por isso que projetos da NewSwift têm poucos bugs e muita robustez.',
      'Formado pelo IOS na PUC-RS — curso de Desenvolvimento Web patrocinado pela Dell e TOTVS — Arthur combina o desenvolvimento React com uma visão analítica apurada, sempre perguntando "por quê?" antes de perguntar "como?".',
    ],
    origin: 'Estudante do Ensino Médio · IOS na PUC-RS · Dell & TOTVS',
    skills: [
      { label: 'React / TypeScript', level: 76 },
      { label: 'Análise Técnica',    level: 84 },
      { label: 'Code Review',        level: 80 },
      { label: 'Performance Web',    level: 75 },
      { label: 'Resolução de Bugs',  level: 82 },
      { label: 'Arquitetura',        level: 70 },
    ],
    highlights: [
      { icon: BarChart2,   text: 'Pensamento analítico e crítico aplicado ao código' },
      { icon: Code2,       text: 'React com foco em qualidade, testes e escalabilidade' },
      { icon: Globe,       text: 'Performance e Core Web Vitals como prioridade' },
      { icon: GraduationCap, text: 'IOS na PUC-RS · HTML, CSS & JS · patrocinado por Dell e TOTVS' },
    ],
    tags: ['React', 'TypeScript', 'Code Review', 'Performance', 'Debugging', 'Arquitetura', 'Testes', 'Git'],
  },
]

interface Props {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamModal({ member, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  // Lock scroll
  useEffect(() => {
    if (member) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [member])

  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 100 }}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '100%', maxWidth: '560px',
              backgroundColor: '#080808',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRight: 'none',
              zIndex: 101,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex', justifyContent: 'flex-end', padding: '20px 24px', backgroundColor: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(8px)', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#555', fontSize: '12px' }}>
                <span>Fechar</span>
                <X size={14} />
              </div>
            </button>

            <div style={{ padding: '32px 32px 56px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Header */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                {/* Avatar */}
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0, overflow: 'hidden', border: '2px solid rgba(0,200,150,0.2)', backgroundColor: 'rgba(0,200,150,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const parent = el.parentElement
                      if (parent) {
                        const span = document.createElement('span')
                        span.style.cssText = 'font-size:28px;font-weight:900;color:#00C896'
                        span.textContent = member.name[0]
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="section-label mono">Co-fundador</span>
                    {member.id === 'joaovitor' && (
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00C896', backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.25)', padding: '2px 7px', borderRadius: '4px' }}>
                        LEAD DEV
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: '4px' }}>{member.name}</h2>
                  <p style={{ fontSize: '13px', color: '#00C896' }}>{member.role}</p>
                  <p style={{ fontSize: '12px', color: '#444', marginTop: '4px' }}>{member.origin}</p>
                </div>
              </div>

              {/* Tagline */}
              <div style={{ padding: '18px 20px', borderRadius: '12px', border: '1px solid rgba(0,200,150,0.12)', backgroundColor: 'rgba(0,200,150,0.03)' }}>
                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#888', lineHeight: 1.6 }}>"{member.tagline}"</p>
              </div>

              {/* Bio */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333' }}>História</p>
                {member.bio.map((p, i) => (
                  <p key={i} style={{ fontSize: '14px', lineHeight: 1.8, color: '#666' }}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '14px' }}>Destaques</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {member.highlights.map((h, i) => {
                    const Icon = h.icon
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <Icon size={14} style={{ color: '#00C896', marginTop: '2px', flexShrink: 0, opacity: 0.7 }} />
                        <span style={{ fontSize: '13px', color: '#666', lineHeight: 1.5 }}>{h.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Skills */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '16px' }}>Habilidades</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {member.skills.map(skill => (
                    <div key={skill.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ fontSize: '12px', color: '#777' }}>{skill.label}</span>
                        <span className="mono" style={{ fontSize: '11px', color: '#333' }}>{skill.level}%</span>
                      </div>
                      <div style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          style={{ height: '100%', backgroundColor: '#00C896', borderRadius: '2px', opacity: 0.7 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#333', marginBottom: '12px' }}>Stack & Ferramentas</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {member.tags.map(t => (
                    <span key={t} style={{ fontSize: '11px', color: '#555', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '4px 10px', borderRadius: '5px' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contato"
                onClick={onClose}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '13px 24px', borderRadius: '10px', backgroundColor: '#00C896', color: '#000', fontSize: '13px', fontWeight: 700, textDecoration: 'none', marginTop: '8px', transition: 'all 0.2s' }}
              >
                Falar com a equipe <ExternalLink size={13} />
              </a>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
