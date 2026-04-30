import styles from "./WeddingSummary.module.css";

export function WeddingSummary({
  title = "Resumen:",
  items = [],
  note,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <p className={styles.item} key={item.label}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  );
}

export default WeddingSummary;