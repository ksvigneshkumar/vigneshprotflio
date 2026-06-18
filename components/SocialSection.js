import styles from './SocialSection.module.css'

const socials = [
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vignesh--k--s' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/ksvigneshkumar' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '🐦', label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: '▶️', label: 'YouTube', href: 'https://youtube.com' },
]

export default function SocialSection() {
  return (
    <section className={`page-section ${styles.social}`} id="social">
      <div className={styles.inner}>
        <div className="sec-label" style={{ opacity: 1, textAlign: 'center' }}>social links</div>
        <h2 className={`${styles.heading} reveal-up`}>Follow My Journey</h2>
        <div className={styles.icons}>
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} reveal-scale`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.sicon}>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
