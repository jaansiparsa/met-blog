'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeout: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
        } else {
          clearTimeout(timeout)
          el.classList.remove('is-visible')
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [delay])

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  )
}
