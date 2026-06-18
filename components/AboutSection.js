'use client'
import styles from './AboutSection.module.css'

const achievements = [
  { icon: '🎓', title: 'B.E. ECE — KLN College', sub: '2022–2026 · CGPA 7.8' },
  { icon: '💼', title: 'Sourcesys Technologies', sub: 'Full Stack Intern · BPI Tech' },
  { icon: '🚀', title: '3+ Live Projects', sub: 'Hosted & in production' },
  { icon: '🤖', title: 'LLM / RAG Developer', sub: 'AI-powered applications' },
  { icon: '📍', title: 'Madurai, Tamil Nadu', sub: 'Open to remote & hybrid' },
]

export default function AboutSection() {
  return (
    <section className={`page-section ${styles.about}`} id="about">
      <div className="gblur" style={{ width: 350, height: 350, background: 'rgba(16,185,129,0.05)', top: '10%', left: '40%' }} />

      <div className="sec-label reveal-up">about me</div>
      <h2 className="sec-title reveal-up">Who I Am</h2>
      <p className="sec-sub reveal-up">The story behind the code.</p>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal-left`}>
          <p>I'm a final-year Electronics & Communication Engineering student at KLN College of Engineering, Madurai. My passion lies in building full-stack web applications — clean UIs paired with smart, scalable backends.</p>
          <p>My internship at Sourcesys Technologies (BPI Tech) wasn't just learning — I shipped real features using React, Next.js, Supabase, and Django that actual users depend on every day.</p>
          <p>I'm drawn to the intersection of AI and web development. Working with LLMs and RAG architectures has opened up a new dimension in how I think about building intelligent products.</p>
          <p>Currently based in Madurai, TN. Open to remote, hybrid, or on-site roles anywhere.</p>
        </div>

        <div className={styles.cards}>
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`${styles.card} reveal-right`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.icon}>{a.icon}</div>
              <div>
                <div className={styles.cardTitle}>{a.title}</div>
                <div className={styles.cardSub}>{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
