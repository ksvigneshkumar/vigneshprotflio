'use client'
import { useRef } from 'react'
import styles from './ProjectsSection.module.css'

const projects = [
  {
    num: '01',
    title: 'ScalUp – Modern Business Website',
    desc: 'Designed and developed a professional business website with modern UI/UX using Next.js and React.js. Responsive and optimized for all devices.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript'],
    live: true,
    link: 'https://scalup-website-frontend.vercel.app',
  },
 
  {
    num: '02',
    title: 'Employee Login System',
    desc: 'Responsive employee authentication interface with form validation, component-based React architecture, and a clean dashboard UI. Hosted and fully functional in production.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'Auth Flow'],
    live: true,
    link: null,
  },
  {
    num: '03',
    title: 'Smart Agriculture System',
    desc: 'IoT-based smart farming system monitoring soil moisture, temperature, and rainfall via sensors. Integrated Python ML model for plant disease detection and automated irrigation control.',
    stack: ['IoT', 'Python', 'Machine Learning', 'Sensors'],
    live: false,
    link: null,
  },
   {
    num: '04',
    title: 'AI Resume Analyzer',
    desc: 'AI-powered tool that parses PDF resumes and analyzes candidate skills using Gemini LLM. Built with Next.js + Django REST Framework. Deployed and used in real hiring workflows.',
    stack: ['Next.js', 'Django', 'Gemini AI', 'PDF Parsing', 'REST API'],
    live: true,
    link: null,
  },
]

function ProjectCard({ p, delay }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const el = cardRef.current
    const r = el.getBoundingClientRect()

    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2

    el.style.transform = `translateY(-8px) rotateX(${-(y / r.height) * 12}deg) rotateY(${(x / r.width) * 12}deg)`
  }

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }

  const handleClick = () => {
    if (p.link) {
      window.open(p.link, '_blank')
    }
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${p.coming ? styles.coming : ''} reveal-up`}
      style={{
        transitionDelay: `${delay}s`,
        transformStyle: 'preserve-3d',
        perspective: '800px',
        cursor: p.link ? 'pointer' : 'default',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.num}>{p.num}</div>
      <div className={styles.title}>{p.title}</div>
      <p className={styles.desc}>{p.desc}</p>

      <div className={styles.stack}>
        {p.stack.map((s) => (
          <span key={s} className={styles.pill}>
            {s}
          </span>
        ))}
      </div>

      {!p.coming && (
        <div className={styles.links}>
          <a
            href="https://github.com/ksvigneshkumar"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            ↗ GitHub
          </a>

          {p.live && <span className={styles.live}>✓ Live</span>}
        </div>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className={`page-section ${styles.projects}`} id="projects">

      <div
        className="gblur"
        style={{
          width: 380,
          height: 380,
          background: 'rgba(124,58,237,0.07)',
          bottom: '10%',
          right: '-5%',
        }}
      />

      <div className="sec-label reveal-up">projects</div>
      <h2 className="sec-title reveal-up">Things I&apos;ve Built</h2>
      <p className="sec-sub reveal-up">
        Shipped, deployed, and production-ready — not just weekend experiments.
      </p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} p={p} delay={i * 0.1} />
        ))}
      </div>

    </section>
  )
}