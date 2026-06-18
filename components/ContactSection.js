'use client'
import { useState } from 'react'
import styles from './ContactSection.module.css'

const contactLinks = [
  { icon: '✉️', label: 'email', val: 'ssvnklvignesh@gmail.com', href: 'mailto:ssvnklvignesh@gmail.com' },
  { icon: '💼', label: 'linkedin', val: 'vignesh--k--s', href: 'https://www.linkedin.com/in/vignesh--k--s' },
  { icon: '🐙', label: 'github', val: 'ksvigneshkumar', href: 'https://github.com/ksvigneshkumar' },
  { icon: '📞', label: 'phone', val: '+91 99448 61470', href: 'tel:+919944861470' },
]

export default function ContactSection() {
  const [vals, setVals] = useState({ name: '', email: '', subject: '', message: '' })
  const [errs, setErrs] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (vals.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(vals.email)) e.email = 'Please enter a valid email.'
    if (vals.subject.trim().length < 3) e.subject = 'Please enter a subject.'
    if (vals.message.trim().length < 10) e.message = 'Please write a message (min 10 chars).'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    setErrs(e)
    if (Object.keys(e).length === 0) setSent(true)
  }

  const set = k => e => setVals(v => ({ ...v, [k]: e.target.value }))

  return (
    <section className={`page-section ${styles.contact}`} id="contact">
      <div className="gblur" style={{ width: 380, height: 380, background: 'rgba(124,58,237,0.06)', top: '20%', right: 0 }} />
      <div className="sec-label reveal-up">contact</div>
      <h2 className="sec-title reveal-up">Get In Touch</h2>
      <p className="sec-sub reveal-up">Have a project in mind? I&apos;d love to hear about it.</p>

      <div className={styles.wrap}>
        <div className={`${styles.form} reveal-up`}>
          {!sent ? (
            <>
              {[
                { k: 'name', label: '// your name', placeholder: 'John Doe', type: 'text' },
                { k: 'email', label: '// email address', placeholder: 'john@email.com', type: 'email' },
                { k: 'subject', label: '// subject', placeholder: 'Project Inquiry', type: 'text' },
              ].map(f => (
                <div className={styles.group} key={f.k}>
                  <label className={styles.label}>{f.label}</label>
                  <input
                    type={f.type}
                    value={vals[f.k]}
                    onChange={set(f.k)}
                    placeholder={f.placeholder}
                    className={`${styles.input} ${errs[f.k] ? styles.errInput : ''}`}
                  />
                  {errs[f.k] && <div className={styles.err}>{errs[f.k]}</div>}
                </div>
              ))}
              <div className={styles.group}>
                <label className={styles.label}>// message</label>
                <textarea
                  value={vals.message}
                  onChange={set('message')}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${styles.input} ${errs.message ? styles.errInput : ''}`}
                />
                {errs.message && <div className={styles.err}>{errs.message}</div>}
              </div>
              <button className={styles.btnSend} onClick={handleSubmit}>
                Send Message →
              </button>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.check}>✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
            </div>
          )}
        </div>

        <div className={`${styles.info} reveal-right`}>
          <div className="sec-label" style={{ opacity: 1, transform: 'none' }}>reach me at</div>
          <h3 className={styles.infoTitle}>Let&apos;s Connect</h3>
          <p className={styles.infoDesc}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>
          <div className={styles.links}>
            {contactLinks.map(l => (
              <a key={l.label} className={styles.clItem} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className={styles.clIcon}>{l.icon}</div>
                <div>
                  <div className={styles.clLabel}>// {l.label}</div>
                  <div className={styles.clVal}>{l.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
