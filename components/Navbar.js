'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#cta', label: 'Hire Me' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '#articles', label: 'Articles' },
  { href: '#coding', label: 'Profiles' },
  { href: '#social', label: 'Social' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let cur = 'hero'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 220) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={styles.nav}>
      <span className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
<<<<<<< HEAD
        vignesh.ks
=======
        Vignesh K S
>>>>>>> 7762d610299662934215776b08962385a8fdb8db
      </span>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
