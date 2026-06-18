'use client'
import { useEffect, useRef } from 'react'

export default function ParticlesCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let W, H, animId
    const particles = []
    const mouse = { x: -9999, y: -9999 }
    const COUNT = 130

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function makeParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.45 + 0.1,
      }
    }

    function reset(p) {
      Object.assign(p, makeParticle())
    }

    resize()
    for (let i = 0; i < COUNT; i++) particles.push(makeParticle())

    const onResize = () => resize()
    const onMouse = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onTouch = e => {
      if (e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Mouse glow
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200)
      g.addColorStop(0, 'rgba(0,212,255,0.05)')
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 130) {
          p.vx -= (dx / dist) * 0.035
          p.vy -= (dy / dist) * 0.035
        }

        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) reset(p)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`
        ctx.fill()

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ddx = p.x - q.x
          const ddy = p.y - q.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < 95) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,255,${0.07 * (1 - d / 95)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
