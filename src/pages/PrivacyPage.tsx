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

export default function PrivacyPage() {
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
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', margin: '12px 0 8px', lineHeight: 1.05 }}>Política de Privacidade</h1>
          <p style={{ fontSize: '13px', color: '#333' }}>Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        <Section title="1. Informações que Coletamos">
          <p style={{ marginBottom: '10px' }}>Coletamos apenas as informações estritamente necessárias para prestação dos nossos serviços:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Nome e e-mail fornecidos voluntariamente via formulário de contato</li>
            <li>Mensagens enviadas para fins de orçamento ou consultoria</li>
            <li>Dados de navegação anonimizados via ferramentas de analytics</li>
          </ul>
        </Section>

        <Section title="2. Como Usamos suas Informações">
          As informações coletadas são usadas exclusivamente para:
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Responder a solicitações de contato e consultorias</li>
            <li>Elaborar propostas comerciais personalizadas</li>
            <li>Melhorar nossos serviços com base em feedbacks</li>
          </ul>
        </Section>

        <Section title="3. Compartilhamento de Dados">
          A NewSwift não vende, aluga ou compartilha seus dados pessoais com terceiros, exceto quando exigido por lei ou necessário para prestação do serviço contratado (ex.: plataformas de hospedagem, serviços de pagamento).
        </Section>

        <Section title="4. Armazenamento e Segurança">
          Os dados são armazenados de forma segura e acessados apenas pelos membros da equipe NewSwift diretamente envolvidos no projeto. Adotamos medidas técnicas para proteger suas informações contra acesso não autorizado.
        </Section>

        <Section title="5. Cookies e Analytics">
          Podemos utilizar ferramentas de analytics (como Google Analytics) para entender como os visitantes interagem com nosso site. Os dados coletados são anonimizados e não identificam usuários individualmente. Você pode desativar cookies nas configurações do seu navegador.
        </Section>

        <Section title="6. Seus Direitos (LGPD)">
          Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Confirmar a existência de tratamento dos seus dados</li>
            <li>Acessar, corrigir ou excluir seus dados pessoais</li>
            <li>Revogar o consentimento dado anteriormente</li>
            <li>Solicitar a portabilidade dos seus dados</li>
          </ul>
        </Section>

        <Section title="7. Retenção de Dados">
          Mantemos seus dados pelo tempo necessário para cumprimento das finalidades descritas nesta política ou conforme exigido por lei. Dados de contato são removidos após 2 anos sem interação ativa.
        </Section>

        <Section title="8. Alterações nesta Política">
          Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página, com a data da última atualização.
        </Section>

        <Section title="9. Contato">
          Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato:{' '}
          <a href="mailto:contato@newswift.com.br" style={{ color: '#00C896', textDecoration: 'none' }}>contato@newswift.com.br</a>
        </Section>

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '16px' }}>
          <Link to="/termos" style={{ fontSize: '13px', color: '#444', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00C896')}
            onMouseLeave={e => (e.currentTarget.style.color = '#444')}
          >
            → Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  )
}
