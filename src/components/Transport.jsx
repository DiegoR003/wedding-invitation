import styles from "./Transport.module.css";

export function Transport({
  title = "¿Cómo ir a la boda?",
  description,
  note,
  buttonLabel = "Ver desplazamientos",
  buttonHref = "#desplazamientos",
}) {
  return (
    <section id="desplazamientos" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}
        {note && <p className={styles.note}>{note}</p>}

        <a className={styles.button} href={buttonHref}>
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export default Transport;