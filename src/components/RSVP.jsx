import styles from "./RSVP.module.css";

export function RSVP({
  description = "Pulsa el botón y rellena el formulario para confirmar asistencia o añadir lo que necesites como intolerancias alimenticias o preguntar dudas.",
  buttonLabel = "¡Confirma tu asistencia!",
  formUrl = "/asistencia",
  leftImage,
  rightImage,
}) {
  return (
    <section id="asistencia" className={styles.section} aria-labelledby="rsvp-title">
      {leftImage && <img className={styles.leftImage} src={leftImage} alt="" />}

      <div className={styles.content}>
        <h2 id="rsvp-title" className={styles.title}>
          Queremos invitarte
          <br />
          a nuestra boda
        </h2>

        <div className={styles.divider} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className={styles.description}>{description}</p>

        <a className={styles.button} href={formUrl}>
          {buttonLabel}
        </a>
      </div>

      {rightImage && (
        <div className={styles.rightCard}>
          <img className={styles.rightImage} src={rightImage} alt="" />
        </div>
      )}
    </section>
  );
}

export default RSVP;