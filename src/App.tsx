import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import Preloader from './components/Preloader'
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
import ScrollReveal from './components/ScrollReveal'
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

function Landing({ ready }: { ready: boolean }) {
  return (
    <main style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <Header />
      {ready && <ScrollReveal />}
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

function AnimatedRoutes({ ready }: { ready: boolean }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing ready={ready} /></PageWrapper>} />
        <Route path="/equipe/:id" element={<PageWrapper><TeamMemberPage /></PageWrapper>} />
        <Route path="/contato" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/termos" element={<PageWrapper><TermsPage /></PageWrapper>} />
        <Route path="/privacidade" element={<PageWrapper><PrivacyPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <ReactLenis root>
      <BrowserRouter>
        <Preloader onComplete={() => setReady(true)} />
        <ScrollToTop />
        <ScrollToTopButton />
        <AnimatedRoutes ready={ready} />
      </BrowserRouter>
    </ReactLenis>
  )
}
