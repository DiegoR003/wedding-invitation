import styles from "./Footer.module.css";

export default function Footer({
  couple = "Mónica & Javier",
  designerName = "Diego R",
  designerUrl = "https://tusitio.com",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.signature}>{couple}</p>

        <p className={styles.copy}>
          © {year} Invitación digital. Todos los derechos reservados.
        </p>

        <p className={styles.credit}>
          Design &amp; Powered by{" "}
          <a href={designerUrl} target="_blank" rel="noreferrer">
            {designerName}
          </a>
        </p>
      </div>
    </footer>
  );
}