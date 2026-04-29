import styles from './Footer.module.css'
import RingsAnimation from './RingsAnimation'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ringsSmall}>
          <RingsAnimation />
        </div>

        <div className={styles.names}>
          <span className={styles.name}>Sofía</span>
          <span className={styles.amp}>&</span>
          <span className={styles.name}>Alejandro</span>
        </div>

        <p className={styles.date}>15 · Noviembre · 2025</p>

        <div className={styles.divider} />

        <nav className={styles.nav}>
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#nosotros', label: 'Nuestra Historia' },
            { href: '#detalles', label: 'Detalles' },
            { href: '#confirmacion', label: 'Confirmar' },
            { href: '#regalos', label: 'Regalos' },
          ].map(link => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.divider} />

        <div className={styles.credits}>
          <p className={styles.love}>Con amor, para siempre ♥</p>
          <p className={styles.copy}>
            © 2025 · Diseño & Desarrollo por{' '}
            <span className={styles.author}>Diego R.</span>
            {' '}· Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
