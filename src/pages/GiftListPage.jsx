import { useState } from "react";
import Navbar from "../components/Navbar";
import StickyRSVPBar from "../components/StickyRSVPBar";
import Hashtag from "../components/Hashtag";
import WeddingSummary from "../components/WeddingSummary";
import Footer from "../components/Footer";

import { weddingData } from "../data/weddingData";
import styles from "./GiftListPage.module.css";

import ListaBoda from "../assets/wedding/Lista-de-boda.jpg";

export default function GiftListPage() {
  const iban = "IBAN ES00 1111 2222 3333 4444 5555";
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section
          className={styles.heroImage}
          style={{ backgroundImage: `url(${ListaBoda})` }}
          aria-label="Lista de regalos"
        >
          <h1 className={styles.heroTitle}>Lista de Regalos</h1>
        </section>

        <section className={styles.giftSection} aria-labelledby="gift-title">
          <div className={styles.inner}>
            {/* <p className={styles.kicker}>Regalo de boda</p> */}

            <p className={styles.intro}>
              El regalo es opcional, pero la asistencia es obligatoria. Si
              quieres tener un detalle con nosotros y contribuir de alguna otra
              forma, puedes colaborar aquí:
            </p>

            <div className={styles.card}>
              <div className={styles.row}>
                <span className={styles.label}>Banco:</span>
                <span className={styles.value}>Santander</span>
              </div>

              <div className={styles.row}>
                <span className={styles.label}>Núm. cuenta:</span>
                <span className={styles.value}>{iban}</span>
              </div>

              <button
                className={styles.copyButton}
                type="button"
                onClick={handleCopy}
              >
                {copied ? "Copiado" : "Copiar cuenta"}
              </button>
            </div>

            <h1 id="gift-title" className={styles.thanks}>
              ¡Muchísimas gracias!
            </h1>

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
