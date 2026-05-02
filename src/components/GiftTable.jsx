import { Link } from "react-router-dom";
import styles from "./GiftTable.module.css";

export function GiftTable({
  title = "Por si os lo estabais planteando…",
  description = "Vuestra presencia es lo más importante para nosotros, pero si queréis tener un detalle con la boda y la luna de miel, os dejamos aquí la información.",
  buttonLabel = "¡Regalo de boda!",
  buttonHref = "/regalos",
}) {
  return (
    <section className={styles.section} id="regalos">
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>

        <Link className={styles.button} to={buttonHref}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export default GiftTable;
