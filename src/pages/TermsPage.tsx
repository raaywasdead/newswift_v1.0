import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '12px' }}>{title}</h2>
      <div style={{ fontSize: '14px', color: '#555', lineHeight: 1.85 }}>{children}</div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(9,9,11,0.9)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#555', textDecoration: 'none', fontSize: '13px', fontWeight: 600, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555')}
          >
            <ArrowLeft size={15} /> Voltar
          </Link>
          <Link to="/" style={{ fontSize: '17px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', textDecoration: 'none' }}>
            New<span style={{ color: '#00FF88' }}>Swift</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '72px 32px 120px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#00C896', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', margin: '12px 0 8px', lineHeight: 1.05 }}>Termos de Uso</h1>
          <p style={{ fontSize: '13px', color: '#333' }}>Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        <Section title="1. Aceitação dos Termos">
          Ao acessar e utilizar o site da NewSwift, você concorda com estes Termos de Uso em sua totalidade. Caso não concorde com alguma das condições aqui descritas, pedimos que não utilize nossos serviços.
        </Section>

        <Section title="2. Sobre a NewSwift">
          A NewSwift é uma empresa de desenvolvimento web formada por três desenvolvedores formados pelo Instituto da Oportunidade Social (IOS) na PUC-RS. Oferecemos serviços de criação de sites, UI/UX design e otimização de performance para pessoas físicas e jurídicas.
        </Section>

        <Section title="3. Serviços Prestados">
          <p style={{ marginBottom: '10px' }}>Os serviços oferecidos pela NewSwift incluem, mas não se limitam a:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Criação e desenvolvimento de sites e sistemas web</li>
            <li>Design de interfaces (UI/UX) e protótipos no Figma</li>
            <li>Otimização de performance e SEO técnico</li>
            <li>Consultoria gratuita inicial sem compromisso</li>
          </ul>
        </Section>

        <Section title="4. Consultoria Gratuita">
          A consulta inicial é gratuita e sem compromisso. Não implica contratação obrigatória de qualquer serviço. Ao agendar uma consultoria, o cliente está apenas solicitando uma conversa para entender o escopo do projeto.
        </Section>

        <Section title="5. Contratação e Pagamento">
          A formalização de qualquer serviço se dá mediante proposta escrita e aceite expresso pelo cliente. Os valores, prazos e condições de pagamento são acordados individualmente e documentados em contrato ou proposta comercial.
        </Section>

        <Section title="6. Propriedade Intelectual">
          Todo o conteúdo deste site — incluindo textos, imagens, design e código — é de propriedade da NewSwift. Os projetos entregues ao cliente tornam-se de propriedade integral do contratante após quitação total do serviço.
        </Section>

        <Section title="7. Limitação de Responsabilidade">
          A NewSwift não se responsabiliza por danos indiretos decorrentes do uso dos sites desenvolvidos, incluindo perda de dados, lucros cessantes ou interrupções de negócio, salvo quando comprovada negligência direta de nossa parte.
        </Section>

        <Section title="8. Alterações nos Termos">
          A NewSwift reserva-se o direito de atualizar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas aos clientes ativos por e-mail.
        </Section>

        <Section title="9. Contato">
          Para dúvidas sobre estes Termos, entre em contato pelo e-mail{' '}
          <a href="mailto:contato@newswift.com.br" style={{ color: '#00C896', textDecoration: 'none' }}>contato@newswift.com.br</a>.
        </Section>

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '16px' }}>
          <Link to="/privacidade" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00C896')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}
          >
            → Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  )
}
