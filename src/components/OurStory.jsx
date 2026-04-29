import styles from './OurStory.module.css'

export default function OurStory() {
  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>
        <p className="section-label">Nuestra historia</p>
        <h2 className={styles.title}>Un amor que comenzó<br /><em>casi por accidente</em></h2>

        <div className="gold-divider">
          <span className="gold-divider-icon">♦</span>
        </div>

        <div className={styles.timeline}>
          {[
            {
              year: '2019',
              title: 'El primer encuentro',
              desc: 'Nos conocimos en una tarde lluviosa que ninguno de los dos olvidará. Una mirada bastó para saber que algo especial comenzaba.',
              side: 'left',
            },
            {
              year: '2021',
              title: 'La primera aventura',
              desc: 'Nuestra primera escapada juntos nos confirmó que queríamos recorrer el mundo de la mano y construir memorias para toda la vida.',
              side: 'right',
            },
            {
              year: '2023',
              title: 'La propuesta',
              desc: 'Bajo un cielo estrellado, con el corazón en la garganta, la pregunta que lo cambió todo. Un sí que resonará por siempre.',
              side: 'left',
            },
            {
              year: '2025',
              title: '¡Nuestro gran día!',
              desc: 'Después de seis años compartiendo sueños, risas y aventuras, estamos listos para el capítulo más hermoso: la eternidad juntos.',
              side: 'right',
            },
          ].map((item, i) => (
            <div key={i} className={`${styles.item} ${item.side === 'right' ? styles.itemRight : ''}`}>
              <div className={styles.yearBadge}>{item.year}</div>
              <div className={styles.line}>
                <div className={styles.dot} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
