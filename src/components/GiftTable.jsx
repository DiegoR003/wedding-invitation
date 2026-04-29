import styles from './GiftTable.module.css'

export default function GiftTable() {
  return (
    <section className={styles.section} id="regalos">
      <div className={styles.container}>
        <p className="section-label">Mesa de regalos</p>
        <h2 className={styles.title}>El mejor regalo es tu presencia</h2>

        <div className="gold-divider">
          <span className="gold-divider-icon">◆</span>
        </div>

        <p className={styles.text}>
          Tu compañía en este día tan especial es todo lo que necesitamos.<br />
          Sin embargo, si deseas hacernos llegar un detalle, lo recibiremos con mucho amor.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.store}>Liverpool</p>
            <p className={styles.eventNum}>No. de evento: <strong>78541</strong></p>
            <a
              href="https://mesaderegalos.liverpool.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Ver mesa de regalos
            </a>
          </div>

          <div className={styles.card}>
            <p className={styles.store}>Palacio de Hierro</p>
            <p className={styles.eventNum}>No. de evento: <strong>98759</strong></p>
            <a
              href="https://www.elpalaciodehierro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Ver mesa de regalos
            </a>
          </div>

          <div className={styles.card}>
            <p className={styles.store}>Sobre de Efectivo</p>
            <p className={styles.eventNum}>También aceptamos con mucho cariño<br />cualquier contribución directa</p>
            <div className={styles.heartIcon}>♥</div>
          </div>
        </div>
      </div>
    </section>
  )
}
