'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

const WORDS = [
  'full stack apps.',
  'AI-powered tools.',
  'React + Next.js UIs.',
  'Django REST APIs.',
  'LLM integrations.',
  'clean, fast products.',
]

export default function HeroSection() {
  const typedRef = useRef(null)
  const threeRef = useRef(null)
  const statsRef = useRef([])

  /* ── Typing Animation ── */
  useEffect(() => {
    let wi = 0, ci = 0, del = false, timer
    const el = typedRef.current
    if (!el) return
    function tick() {
      const w = WORDS[wi]
      if (!del) {
        el.textContent = w.slice(0, ci + 1)
        ci++
        if (ci === w.length) { del = true; timer = setTimeout(tick, 1900); return }
      } else {
        el.textContent = w.slice(0, ci - 1)
        ci--
        if (ci === 0) { del = false; wi = (wi + 1) % WORDS.length }
      }
      timer = setTimeout(tick, del ? 48 : 88)
    }
    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])

  /* ── Three.js Icosahedron ── */
  useEffect(() => {
    const canvas = threeRef.current
    if (!canvas || typeof window === 'undefined') return
    let animId

    import('three').then(THREE => {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(canvas.clientWidth || 380, canvas.clientHeight || 380)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
      camera.position.z = 4

      // Wireframe outer
      const geo = new THREE.IcosahedronGeometry(1.6, 1)
      const mat = new THREE.MeshStandardMaterial({
        color: 0x00d4ff, wireframe: true,
        transparent: true, opacity: 0.45,
      })
      const mesh = new THREE.Mesh(geo, mat)
      scene.add(mesh)

      // Solid inner
      const geo2 = new THREE.IcosahedronGeometry(1.1, 0)
      const mat2 = new THREE.MeshStandardMaterial({
        color: 0x7c3aed, transparent: true, opacity: 0.12,
      })
      scene.add(new THREE.Mesh(geo2, mat2))

      // Orbiting torus
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.04, 8, 60),
        new THREE.MeshStandardMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.2 })
      )
      scene.add(torus)

      scene.add(new THREE.PointLight(0x00d4ff, 3, 12))
      scene.add(new THREE.AmbientLight(0xffffff, 0.3))

      let mx = 0, my = 0
      const onMouse = e => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2
        my = (e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouse)

      let t = 0
      function animate() {
        animId = requestAnimationFrame(animate)
        t += 0.01
        mesh.rotation.x += 0.004 + my * 0.008
        mesh.rotation.y += 0.007 + mx * 0.008
        torus.rotation.x = t * 0.4
        torus.rotation.y = t * 0.6
        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      }
      window.addEventListener('resize', onResize)

      canvas._cleanup = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('mousemove', onMouse)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    })

    return () => { if (canvas._cleanup) canvas._cleanup() }
  }, [])

  /* ── Counter Animation ── */
  useEffect(() => {
    const stats = [
      { el: statsRef.current[0], target: 3, suffix: '+' },
      { el: statsRef.current[1], target: 1, suffix: '' },
      { el: statsRef.current[2], target: 78, suffix: '', display: '7.8' },
      { el: statsRef.current[3], target: 6, suffix: '+' },
    ]
    const timers = stats.map(({ el, target, suffix, display }) => {
      if (!el) return
      let cur = 0
      const step = Math.ceil(target / 40)
      return setInterval(() => {
        cur = Math.min(cur + step, target)
        el.textContent = cur >= target ? (display || cur + suffix) : cur
        if (cur >= target) clearInterval(timers[stats.indexOf({ el, target, suffix, display })])
      }, 45)
    })
    return () => timers.forEach(t => t && clearInterval(t))
  }, [])

  return (
    <section className={`page-section ${styles.hero}`} id="hero">
      <div className="gblur" style={{ width: 520, height: 520, background: 'rgba(0,212,255,0.07)', top: '-10%', right: '-5%' }} />
      <div className="gblur" style={{ width: 380, height: 380, background: 'rgba(124,58,237,0.06)', bottom: 0, left: '-5%' }} />
      <div className="grid-bg" />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          status: open_to_work
        </div>

        <p className={styles.greeting}>// Hello, World! 👋</p>

        <h1 className={styles.name}>
          <span className={styles.nameGlow}>Vignesh K S</span>
        </h1>

        <div className={styles.typedWrap}>
          <span className={styles.typedStatic}>I build </span>
          <span className={styles.typedWord} ref={typedRef} />
          <span className={styles.cursor} />
        </div>

        <p className={styles.desc}>
          Full Stack Developer with hands-on experience in React, Next.js, Django, and LLM/RAG
          integrations. Interned at Sourcesys Technologies — shipped real products used by real people.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className="btn-glow">View My Work</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>

        <div className={styles.stats}>
          {[
            { label: 'Projects Shipped' },
            { label: 'Internship' },
            { label: 'CGPA (7.8)' },
            { label: 'Tech Stack' },
          ].map((s, i) => (
            <div key={i}>
              <div
                className={styles.statNum}
                ref={el => statsRef.current[i] = el}
              >0</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <canvas ref={threeRef} className={styles.threeCanvas} />
    </section>
  )
}
