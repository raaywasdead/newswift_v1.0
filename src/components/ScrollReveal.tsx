import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Reveal Up (Generic & Immediate)
      const revealUpElements = document.querySelectorAll('.reveal-up, .reveal-immediate')
      revealUpElements.forEach((el) => {
        const isHero = el.classList.contains('reveal-immediate')
        const isSooner = el.classList.contains('reveal-sooner')
        gsap.fromTo(el, 
          { 
            opacity: 0, 
            y: 60, 
            filter: 'blur(10px)',
            visibility: 'hidden'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            visibility: 'visible',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: isHero ? 'top 100%' : (isSooner ? 'top 90%' : 'top 65%'),
              toggleActions: 'play none none none',
            }
          }
        )
      })

      // 2. Reveal Stagger (Containers)
      const revealStaggerContainers = document.querySelectorAll('.reveal-stagger')
      revealStaggerContainers.forEach((container) => {
        const children = container.children
        if (children.length > 0) {
          gsap.fromTo(children, 
            { 
              opacity: 0, 
              y: 40, 
              filter: 'blur(8px)',
              visibility: 'hidden'
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              visibility: 'visible',
              duration: 1,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 65%',
                toggleActions: 'play none none none',
              }
            }
          )
        }
      })

      // 3. Hero Sequenced Timeline (Formal Entry)
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const tl = gsap.timeline({
          defaults: { ease: 'power4.out', duration: 1.4 }
        })

        tl.fromTo('.hero-badge', 
          { opacity: 0, y: 30, scale: 0.9, visibility: 'hidden' },
          { opacity: 1, y: 0, scale: 1, visibility: 'visible', duration: 1.2 }
        )
        .fromTo('.hero-title',
          { opacity: 0, y: 60, filter: 'blur(15px)', visibility: 'hidden' },
          { opacity: 1, y: 0, filter: 'blur(0px)', visibility: 'visible' },
          '-=0.8'
        )
        .fromTo('.hero-subline',
          { opacity: 0, y: 30, visibility: 'hidden' },
          { opacity: 1, y: 0, visibility: 'visible' },
          '-=1.0'
        )
        .fromTo('.hero-ctas',
          { opacity: 0, y: 20, visibility: 'hidden' },
          { opacity: 1, y: 0, visibility: 'visible' },
          '-=1.0'
        )
        .fromTo('.hero-stats',
          { opacity: 0, y: 20, visibility: 'hidden' },
          { opacity: 1, y: 0, visibility: 'visible' },
          '-=0.9'
        )
        .fromTo('.hero-photo',
          { opacity: 0, x: 40, scale: 0.98, filter: 'blur(20px)', visibility: 'hidden' },
          { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', visibility: 'visible', duration: 1.8 },
          '-=2.2'
        )
      }

    })

    return () => ctx.revert()
  }, [])

  return null // This component doesn't render anything, just manages listeners
}
