import { useState } from "react";
import styles from "./FAQ.module.css";

import badgeImage from "../assets/wedding/Nos-casamos.png";

function renderRichText(text) {
  if (!text) return null;

  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <span key={index}>{part}</span>;
  });
}

export function FAQ({ title = "Antes de que preguntéis...", items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <h2 id="faq-title" className={styles.title}>
          {title}
        </h2>

        <div className={styles.accordion}>
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                key={item.question}
              >
                <button
                  className={styles.questionButton}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={styles.questionText}>
                    {renderRichText(item.question)}
                  </span>

                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>

                <div className={styles.answerWrapper}>
                  <div className={styles.answerPanel}>
                    <p className={`${styles.answer} ${styles.richText}`}>
                      {renderRichText(item.answer)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <img className={styles.badge} src={badgeImage} alt="" />
    </section>
  );
}

export default FAQ;