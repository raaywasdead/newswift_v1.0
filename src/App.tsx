import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Header from './components/Header'
import Hero from './components/Hero'
import BeforeAfter from './components/BeforeAfter'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TeamMemberPage from './pages/TeamMemberPage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function Landing() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Process />
      <Projects />
      <CTA />
      <Footer />
    </main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/equipe/:id" element={<PageWrapper><TeamMemberPage /></PageWrapper>} />
        <Route path="/contato" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/termos" element={<PageWrapper><TermsPage /></PageWrapper>} />
        <Route path="/privacidade" element={<PageWrapper><PrivacyPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
