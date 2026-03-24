import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // If it already ran this session, skip entirely
    if (sessionStorage.getItem('ns_preloader_done')) {
      onComplete()
      return
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('ns_preloader_done', 'true')
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  // If it's already done, don't render anything
  if (sessionStorage.getItem('ns_preloader_done') === 'true') {
    return null
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 3.0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        backgroundColor: '#050505',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative' }}>
        <motion.img
          src="/logo-ns.png"
          alt="NewSwift"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ width: 'min(200px, 50vw)', position: 'relative', zIndex: 1 }}
        />

        {/* Subtle pulsing background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '180px', height: '180px',
            background: 'radial-gradient(circle, #00FF88 0%, transparent 60%)',
            filter: 'blur(40px)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
      </div>
    </motion.div>
  )
}
