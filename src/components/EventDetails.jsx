import styles from './EventDetails.module.css'
import CupAnimation from './CupAnimation'

export default function EventDetails() {
  return (
    <section className={styles.section} id="detalles">
      <div className={styles.container}>
        <p className="section-label">¿Dónde & cuándo?</p>
        <h2 className={styles.title}>Los detalles del gran día</h2>

        <div className="gold-divider">
          <span className="gold-divider-icon">◆</span>
        </div>

        <div className={styles.cupWrap}>
          <CupAnimation />
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⛪</div>
            <p className={styles.cardTag}>Ceremonia</p>
            <h3 className={styles.cardTitle}>Catedral de Nuestra Señora</h3>
            <p className={styles.cardTime}>15 de Noviembre, 2025 · 17:00 h</p>
            <p className={styles.cardAddress}>Av. Principal 100, Centro Histórico<br />Ciudad de México</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-gold ${styles.mapBtn}`}
            >
              Ver en el mapa
            </a>
          </div>

          <div className={styles.dividerVert}>
            <div className={styles.dividerLine} />
            <div className={styles.dividerDot}>♦</div>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🥂</div>
            <p className={styles.cardTag}>Recepción</p>
            <h3 className={styles.cardTitle}>Hacienda Los Almendros</h3>
            <p className={styles.cardTime}>18:30 h — ¡hasta el amanecer!</p>
            <p className={styles.cardAddress}>Carretera Escénica km 4.5<br />Ciudad de México</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-gold ${styles.mapBtn}`}
            >
              Ver en el mapa
            </a>
          </div>
        </div>

        {/* Timeline / itinerary */}
        <div className={styles.itinerary}>
          <p className={styles.itinLabel}>Itinerario del día</p>
          <div className={styles.itinGrid}>
            {[
              { time: '16:30', icon: '🎊', event: 'Llegada de invitados' },
              { time: '17:00', icon: '💒', event: 'Ceremonia religiosa' },
              { time: '18:30', icon: '🥂', event: 'Cóctel de bienvenida' },
              { time: '20:00', icon: '🍽️', event: 'Banquete' },
              { time: '22:00', icon: '💃', event: 'Baile y celebración' },
            ].map((item, i) => (
              <div key={i} className={styles.itinItem}>
                <span className={styles.itinTime}>{item.time}</span>
                <span className={styles.itinDot} />
                <span className={styles.itinIcon}>{item.icon}</span>
                <span className={styles.itinEvent}>{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dresscode */}
        <div className={styles.dresscode}>
          <p className="section-label">Código de vestimenta</p>
          <p className={styles.dcText}>Riguroso Formal · Black Tie</p>
          <p className={styles.dcNote}>Los colores de la boda son blanco marfil, dorado y negro. Te pedimos evitar el blanco para los invitados.</p>
        </div>
      </div>
    </section>
  )
}
