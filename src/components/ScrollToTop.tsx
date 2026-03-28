import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    const timer = setTimeout(() => {
      lenis?.scrollTo(0, { immediate: true })
    }, 220)
    return () => clearTimeout(timer)
  }, [pathname, lenis])

  return null
}
