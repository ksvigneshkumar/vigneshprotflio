'use client'
import { useEffect, useRef } from 'react'
import styles from './SkillsSection.module.css'

const frontendSkills = [
  { name: 'React.js', pct: 88 },
  { name: 'Next.js', pct: 82 },
  { name: 'HTML5 / CSS3', pct: 92 },
  { name: 'JavaScript', pct: 85 },
]
const backendSkills = [
  { name: 'Django / DRF', pct: 80 },
  { name: 'Python', pct: 83 },
  { name: 'LLM / RAG Integration', pct: 75 },
  { name: 'REST API Design', pct: 84 },
]
const icons = [
  { e: '⚛️', n: 'React' }, { e: '🔺', n: 'Next.js' },
  { e: '🐍', n: 'Python' }, { e: '🎸', n: 'Django' },
  { e: '🤖', n: 'LLM/RAG' }, { e: '🗄️', n: 'Supabase' },
  { e: '🌐', n: 'HTML/CSS' }, { e: '⚡', n: 'JavaScript' },
  { e: '🐙', n: 'Git' }, { e: '🔌', n: 'REST API' },
]

function SkillBar({ name, pct, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { bar.style.width = pct + '%' }, 200 + delay * 120)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    obs.observe(bar.closest('.' + styles.item))
    return () => obs.disconnect()
  }, [pct, delay])

  return (
    <div className={`${styles.item} reveal-left`} style={{ transitionDelay: `${delay * 0.08}s` }}>
      <div className={styles.info}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{pct}%</span>
      </div>
      <div className={styles.barBg}>
        <div className={styles.barFill} ref={barRef} />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className={`page-section ${styles.skills}`} id="skills">
      <div className="gblur" style={{ width: 330, height: 330, background: 'rgba(0,212,255,0.05)', top: '5%', left: '-5%' }} />
      <div className="sec-label reveal-up">tech stack</div>
      <h2 className="sec-title reveal-up">Skills &amp; Proficiency</h2>
      <p className="sec-sub reveal-up">Technologies I use to build real products.</p>

      <div className={styles.groups}>
        <div>
          <div className={styles.groupTitle}>// Frontend</div>
          {frontendSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i} />)}
        </div>
        <div>
          <div className={styles.groupTitle}>// Backend &amp; AI</div>
          {backendSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i} />)}
        </div>
      </div>

      <div className={styles.iconsGrid}>
        {icons.map((ic, i) => (
          <div
            key={ic.n}
            className={`${styles.iconCard} reveal-scale`}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <span className={styles.emoji}>{ic.e}</span>
            <span className={styles.iname}>{ic.n}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
