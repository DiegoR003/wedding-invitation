import styles from './Hero.module.css'
import RingsAnimation from './RingsAnimation'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Particle background dots */}
      <div className={styles.particles}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }} />
        ))}
      </div>

      {/* Top ornament */}
      <div className={`${styles.topLabel} animate-fade-up delay-1`}>
        <span className="section-label">Con amor te invitamos a</span>
      </div>

      {/* Rings Animation */}
      <div className={`${styles.ringsWrap} animate-fade delay-2`}>
        <RingsAnimation />
      </div>

      {/* Names */}
      <div className={`${styles.namesBlock} animate-fade-up delay-2`}>
        <h1 className={styles.name1}>Sofía</h1>
        <div className={styles.ampersand}>&</div>
        <h1 className={styles.name2}>Alejandro</h1>
      </div>

      <div className={`${styles.subtitle} animate-fade-up delay-3`}>
        <p>¡Nos casamos!</p>
      </div>

      <div className={`${styles.date} animate-fade-up delay-4`}>
        <span>15 · Noviembre · 2025</span>
      </div>

      {/* Gold divider */}
      <div className={`gold-divider animate-fade delay-4`}>
        <span className="gold-divider-icon">◆</span>
      </div>

      <div className={`${styles.scroll} animate-fade delay-5`}>
        <a href="#nosotros" className="btn-gold">Descubrir</a>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  )
}
