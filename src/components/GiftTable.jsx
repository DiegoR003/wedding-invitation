import { useState } from "react";
import styles from "./GiftTable.module.css";

export function GiftTable({
  title = "Por si os lo estabais planteando…",
  description = "Vuestra presencia es lo más importante para nosotros, pero si queréis tener un detalle con la boda y la luna de miel, os dejamos aquí la información.",
  buttonLabel = "¡Regalo de boda!",
  accountLabel = "Resumen:",
  accountValue = "#bodorriomónicajavier",
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(accountValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className={styles.section} aria-labelledby="gift-title">
      <div className={styles.inner}>
        <h2 id="gift-title" className={styles.title}>
          {title}
        </h2>

        <p className={styles.description}>{description}</p>

        <div className={styles.card}>
          <p className={styles.label}>{accountLabel}</p>
          <p className={styles.value}>{accountValue}</p>

          <button className={styles.copyButton} type="button" onClick={handleCopy}>
            {copied ? "Copiado" : buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

export default GiftTable;