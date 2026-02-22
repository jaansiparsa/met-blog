'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeout: ReturnType<typeof setTimeout>

    const check = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top < vh * 0.88 && !visibleRef.current) {
        // Element scrolled into view — reveal
        visibleRef.current = true
        timeout = setTimeout(() => setVisible(true), delay)
      } else if (rect.top > vh && visibleRef.current) {
        // Element fully below viewport (scrolled back up past it) — reset
        visibleRef.current = false
        clearTimeout(timeout)
        setVisible(false)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })

    return () => {
      window.removeEventListener('scroll', check)
      clearTimeout(timeout)
    }
  }, [delay])

  return (
    <div ref={ref} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
