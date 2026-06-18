import styles from './CtaSection.module.css'

export default function CtaSection() {
  return (
    <section className={`page-section ${styles.cta}`} id="cta">
      <div className="gblur" style={{ width: 600, height: 600, background: 'rgba(0,212,255,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="grid-bg" />
      <div className={styles.inner}>
        <div className="sec-label reveal-up" style={{ textAlign: 'center' }}>let&apos;s work together</div>
        <h2 className={`sec-title reveal-up ${styles.heading}`}>
          Ready to Build<br />Something <span className={styles.accent}>Amazing?</span>
        </h2>
        <p className={`sec-sub reveal-up ${styles.sub}`}>
          I&apos;m available for full-time roles, internships, freelance projects, and open-source collaborations. If you have an idea, let&apos;s make it real.
        </p>
        <div className={`${styles.btns} reveal-up`}>
          <a href="#contact" className={styles.btnPulse}>✉ Hire Me</a>
          <a href="#resume" className="btn-ghost">📄 View Resume</a>
        </div>
      </div>
    </section>
  )
}
