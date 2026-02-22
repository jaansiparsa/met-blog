'use client'

import { useEffect, useRef, useCallback } from 'react'

export function ExplodingGrid({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const offsetsRef = useRef<{ el: HTMLElement; x: number; y: number }[] | null>(null)
  const stateRef = useRef<'collapsed' | 'exploded'>('collapsed')
  const cleanupRef = useRef<(() => void) | null>(null)

  const measure = useCallback(() => {
    const grid = gridRef.current
    if (!grid) return
    ;(Array.from(grid.children) as HTMLElement[]).forEach((el) => {
      el.style.transition = 'none'
      el.style.transform = ''
    })
    const gridRect = grid.getBoundingClientRect()
    const cx = gridRect.left + gridRect.width / 2
    const cy = gridRect.top + gridRect.height / 2
    offsetsRef.current = (Array.from(grid.children) as HTMLElement[]).map((el) => {
      const rect = el.getBoundingClientRect()
      return { el, x: rect.left + rect.width / 2 - cx, y: rect.top + rect.height / 2 - cy }
    })
  }, [])

  const applyCollapsed = useCallback(() => {
    if (!offsetsRef.current || stateRef.current === 'collapsed') return
    stateRef.current = 'collapsed'
    offsetsRef.current.forEach(({ el, x, y }) => {
      el.style.transition = 'none'
      el.style.transform = `translate(${-x}px, ${-y}px)`
      el.style.opacity = '0'
    })
  }, [])

  const applyExploded = useCallback(() => {
    if (!offsetsRef.current || stateRef.current === 'exploded') return
    stateRef.current = 'exploded'
    offsetsRef.current.forEach(({ el }, i) => {
      el.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms, opacity 0.6s ease ${i * 60}ms`
      el.style.transform = 'translate(0px, 0px)'
      el.style.opacity = '1'
    })
  }, [])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    ;(Array.from(grid.children) as HTMLElement[]).forEach((el) => { el.style.opacity = '0' })

    requestAnimationFrame(() => {
      measure()
      stateRef.current = 'exploded'
      applyCollapsed()

      let prevRectTop = grid.getBoundingClientRect().top
      // Ready to explode if element starts below the viewport
      let approachingFromBelow = prevRectTop >= window.innerHeight

      const onScroll = () => {
        const rect = grid.getBoundingClientRect()
        const vh = window.innerHeight

        // Detect downward entry: top edge crosses from below viewport into viewport.
        // This transition (prevRectTop >= vh → rect.top < vh) can only happen while scrolling DOWN.
        if (prevRectTop >= vh && rect.top < vh) {
          approachingFromBelow = true
        }

        // Element fully below viewport again (scrolled back up past it) — reset
        if (rect.top >= vh) {
          approachingFromBelow = false
          applyCollapsed()
        }

        // Explode only if we entered from below and the element is in the trigger zone
        if (approachingFromBelow && rect.top >= 0 && rect.top < vh * 0.85) {
          applyExploded()
        }

        prevRectTop = rect.top
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      cleanupRef.current = () => window.removeEventListener('scroll', onScroll)
    })

    const onResize = () => { stateRef.current = 'exploded'; measure(); applyCollapsed() }
    window.addEventListener('resize', onResize)

    return () => {
      cleanupRef.current?.()
      window.removeEventListener('resize', onResize)
    }
  }, [measure, applyCollapsed, applyExploded])

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  )
}
