import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nuestra Historia' },
  { href: '#detalles', label: 'Detalles' },
  { href: '#confirmacion', label: 'Confirmar' },
  { href: '#regalos', label: 'Regalos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="#inicio" className={styles.logoLink}>S & A</a>
      </div>

      {/* Desktop links */}
      <div className={styles.links}>
        {links.map(link => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Menú"
      >
        <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
      </button>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
