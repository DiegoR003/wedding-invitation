import styles from "./Hashtag.module.css";

export default function Hashtag({
  text = "Hashtag para la boda: #bodorriomónicajavier",
}) {
  return (
    <section className={styles.section} id="hashtag">
      <p className={styles.text}>{text}</p>
    </section>
  );
}