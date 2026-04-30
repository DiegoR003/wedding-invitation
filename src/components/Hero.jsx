import styles from "./Hero.module.css";

import ringsImage from "../assets/wedding/anillos-de-matrimonio-para-pagina-de-bodas-estilo-clasico.png";
import musicImage from "../assets/wedding/Ya-esta-aqui-nuestra-boda.png";
import badgeImage from "../assets/wedding/Nos-casamos.png";

export function Hero({
  eyebrow = "¡Nos casamos!",
  couple = "Mónica & Javier",
  musicLabel = "¡Haz clic y deja que suene la magia!",
  weddingDate = "01/10/2026",
  ceremony = {
    time: "13:00 horas",
    place: "Parroquia San Fermín de los Navarros",
    address: "Paseo de Eduardo Dato, 10, Madrid",
    mapUrl:
      "https://www.google.com/maps/place/Parroquia+de+San+Ferm%C3%ADn+de+los+Navarros",
  },
  reception = {
    place: "Antigua Fábrica de Harinas",
    address: "Ctra. M-128, Km 1,3, Jarama, Madrid",
    mapUrl: "https://www.google.com/maps",
  },
  onPlayMusic,
}) {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.topSection}>
        <div className={styles.topInner}>
          <img className={styles.rings} src={ringsImage} alt="" />

          <p className={styles.eyebrow}>{eyebrow}</p>

          <h1 className={styles.title}>{couple}</h1>

          <p className={styles.musicLabel}>{musicLabel}</p>

          <div className={styles.musicCard}>
            <img
              className={styles.musicImage}
              src={musicImage}
              alt="Reproductor de música"
            />

            <button
              className={styles.playButton}
              type="button"
              aria-label="Reproducir música"
              onClick={onPlayMusic}
            >
              <svg viewBox="0 0 24 24" className={styles.playIcon} aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <img className={styles.badge} src={badgeImage} alt="" />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.bottomInner}>
          <div className={styles.detailGroup}>
            <p className={styles.label}>Fecha de la boda:</p>
            <p className={styles.valueLarge}>{weddingDate}</p>
          </div>

          <div className={styles.detailGroup}>
            <p className={styles.label}>Ceremonia:</p>
            <p className={styles.valueLarge}>{ceremony.time}</p>
            <p className={styles.valueMedium}>{ceremony.place}</p>
            <p className={styles.valueSmall}>{ceremony.address}</p>
            <a
              className={styles.link}
              href={ceremony.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              VER UBICACIÓN
            </a>
          </div>

          <div className={styles.detailGroup}>
            <p className={styles.label}>Banquete y celebración:</p>
            <p className={styles.valueMedium}>{reception.place}</p>
            <p className={styles.valueSmall}>{reception.address}</p>
            <a
              className={styles.link}
              href={reception.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              VER UBICACIÓN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}