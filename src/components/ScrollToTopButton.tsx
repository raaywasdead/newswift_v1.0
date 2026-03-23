import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollUp}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 100,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1px solid rgba(0,255,136,0.25)',
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            color: '#00FF88',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 18px rgba(0,255,136,0.1)',
            transition: 'border-color 0.18s, box-shadow 0.18s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(0,255,136,0.55)'
            el.style.boxShadow = '0 0 24px rgba(0,255,136,0.22)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(0,255,136,0.25)'
            el.style.boxShadow = '0 0 18px rgba(0,255,136,0.1)'
          }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
