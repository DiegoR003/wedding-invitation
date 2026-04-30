import styles from "./EventDetails.module.css";



function renderRichText(text) {
  if (!text) return null;

  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <span key={index}>{part}</span>;
  });
}

export function EventDetails({ intro, schedule = [] }) {
  return (
    <section className={styles.section} aria-labelledby="event-details-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="event-details-title" className={styles.title}>
            {intro?.title ?? "Itinerario Boda"}
          </h2>

          {intro?.text && (
            <p className={`${styles.intro} ${styles.richText}`}>
              {renderRichText(intro.text)}
            </p>
          )}

          {intro?.dressCode && (
            <p className={`${styles.note} ${styles.richText}`}>
              {renderRichText(intro.dressCode)}
            </p>
          )}

         {/* {intro?.kidsNote && (
            <p className={`${styles.noteStrong} ${styles.richText}`}>
              {renderRichText(intro.kidsNote)}
            </p>
          )} */}
        </header>

        <div className={styles.timeline}>
          {schedule.map((item, index) => (
            <article
              className={`${styles.event} ${
                index % 2 === 0 ? styles.eventRight : styles.eventLeft
              }`}
              key={`${item.title}-${index}`}
            >
              <div className={styles.mediaCol}>
                {item.image && (
                  <img
                    className={styles.eventImage}
                    src={item.image}
                    alt={item.title}
                  />
                )}
              </div>

              <div className={styles.lineCol}>
                <span className={styles.dot} />
              </div>

              <div className={styles.contentCol}>
                {item.time && <p className={styles.time}>{item.time}</p>}

                <h3 className={styles.cardTitle}>{item.title}</h3>

                {item.description && (
                  <p className={`${styles.description} ${styles.richText}`}>
                    {renderRichText(item.description)}
                  </p>
                )}

                {item.button && (
                  <a className={styles.musicButton} href={item.button.href}>
                    {item.button.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      
    </section>
  );
}

export default EventDetails;