import styles from './ResumeSection.module.css'

export default function ResumeSection() {
  return (
    <section className={`page-section ${styles.resume}`} id="resume">
      <div className="gblur" style={{ width: 320, height: 320, background: 'rgba(245,158,11,0.06)', top: '20%', right: '15%' }} />
      <div className="sec-label reveal-up">resume</div>
      <h2 className="sec-title reveal-up">My Resume</h2>
      <p className="sec-sub reveal-up">Download my latest resume or view it in your browser.</p>

      <div className={`${styles.card} reveal-scale`}>
        <span className={styles.icon}>📄</span>
        <h3 className={styles.cardTitle}>Vignesh K S — Full Stack Developer</h3>
        <p className={styles.cardDesc}>
          B.E. ECE · KLN College of Engineering · Internship @ Sourcesys Technologies @ PBI Technology<br />
          React · Next.js · Django · LLM/RAG · Python
        </p>
        <div className={styles.cardBtns}>
          <a href="/Vignesh_K_S_RESUME_Updated.docx" download className={styles.btnDownload}>
            ⬇ Download Resume
          </a>
          <a href="/Vignesh_K_S_RESUME_Updated.docx" target="_blank" className="btn-ghost" style={{ padding: '0.85rem 2rem' }}>
            👁 View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
