'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    const els = document.querySelectorAll(selectors)

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = parseFloat(el.style.transitionDelay || '0')
          setTimeout(() => {
            el.classList.add('revealed')
          }, delay * 1000)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.12 })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
