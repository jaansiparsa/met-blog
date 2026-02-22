'use client'

import { useState, useEffect } from 'react'

const phrases = ['an inside look', 'made by students', 'for students']

export function CyclingText() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('out')
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length)
        setPhase('in')
      }, 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      key={`${index}-${phase}`}
      style={{
        display: 'inline-block',
        fontSize: '1.6rem',
        animation: phase === 'in'
          ? 'cycling-slide-in 0.6s ease forwards'
          : 'cycling-fade-out 0.6s ease forwards',
      }}
    >
      {phrases[index]}
    </span>
  )
}
