import { useState } from "react";
import Navbar from "../components/Navbar";
import StickyRSVPBar from "../components/StickyRSVPBar";
import Hashtag from "../components/Hashtag";
import WeddingSummary from "../components/WeddingSummary";
import Footer from "../components/Footer";

import musicHero from "../assets/wedding/Fiesta-en-las-bodas.jpg";

import { weddingData } from "../data/weddingData";
import styles from "./MusicaPage.module.css";

export default function MusicaPage() {
  const [songs, setSongs] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name,
      songs,
    };

    console.log("Canciones enviadas:", payload);
    alert("¡Gracias! Hemos recibido tus canciones.");
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section
          className={styles.heroImage}
          style={{ backgroundImage: `url(${musicHero})` }}
          aria-label="Música"
        >
          <h1 className={styles.heroTitle}>Música</h1>
        </section>

        <section className={styles.musicSection} aria-labelledby="musica-title">
          <div className={styles.inner}>
            {/* <p className={styles.kicker}>Música</p>*/}

            <h1 id="musica-title" className={styles.title}>
              ¡Ayúdanos a crear una playlist para la boda!
            </h1>

            <div className={styles.copy}>
              <p>
                Queremos que disfrutes al máximo de la fiesta y para ello qué
                mejor que escuchar la música que te gustaría oír el día de
                nuestra boda.
              </p>

              <p>¡Ayúdanos a mejorar el repertorio!</p>
            </div>

            <form className={styles.formCard} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="guestName">
                  Tu nombre
                </label>

                <input
                  id="guestName"
                  className={styles.input}
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Escribe tu nombre"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="songs">
                  Canciones que quieres escuchar
                </label>

                <textarea
                  id="songs"
                  className={styles.textarea}
                  value={songs}
                  onChange={(event) => setSongs(event.target.value)}
                  placeholder={`Ejemplo:
Vivir mi vida - Marc Anthony
September - Earth, Wind & Fire
La Bicicleta - Carlos Vives y Shakira`}
                  rows={8}
                  required
                />
              </div>

              <button className={styles.primaryButton} type="submit">
                Enviar canciones
              </button>
            </form>

            <a className={styles.backButton} href="/">
              Volver a la página de inicio
            </a>
          </div>
        </section>

        <Hashtag />

        <WeddingSummary
          items={weddingData.summary.items}
          note={weddingData.summary.note}
        />

        <Footer
          couple="Mónica & Javier"
          designerName="Diego R"
          designerUrl="https://tusitio.com"
        />
      </main>

      <StickyRSVPBar href="/asistencia" />
    </>
  );
}
