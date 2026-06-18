import styles from './CodingSection.module.css'

const profiles = [
  { logo: '🐙', name: 'GitHub', sub: 'ksvigneshkumar', badge: '↗ View Profile', href: 'https://github.com/ksvigneshkumar' },
  { logo: '⚡', name: 'LeetCode', sub: 'Problem Solving', badge: '↗ View Profile', href: 'https://leetcode.com' },
  { logo: '🏆', name: 'SkillRack', sub: 'Competitive Coding', badge: '↗ View Profile', href: 'https://www.skillrack.com' },
  { logo: '💼', name: 'LinkedIn', sub: 'vignesh--k--s', badge: '↗ Connect', href: 'https://www.linkedin.com/in/vignesh--k--s' },
  { logo: '🟢', name: 'HackerRank', sub: 'Certifications', badge: '↗ View Profile', href: 'https://www.hackerrank.com' },
]

export default function CodingSection() {
  return (
    <section className={`page-section ${styles.coding}`} id="coding">
      <div className="gblur" style={{ width: 320, height: 320, background: 'rgba(245,158,11,0.05)', bottom: '10%', left: '10%' }} />
      <div className="sec-label reveal-up">coding profiles</div>
      <h2 className="sec-title reveal-up">Find Me Online</h2>
      <p className="sec-sub reveal-up">Track my coding journey and open-source contributions across platforms.</p>
      <div className={styles.grid}>
        {profiles.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} reveal-scale`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className={styles.logo}>{p.logo}</span>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.sub}>{p.sub}</div>
            <div className={styles.badge}>{p.badge}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
