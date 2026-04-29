import styles from './Hashtag.module.css'

export default function Hashtag() {
  return (
    <section className={styles.section} id="hashtag">
      <div className={styles.container}>
        <div className={styles.ornament}>✦ ✦ ✦</div>
        <p className="section-label">Durante nuestra boda comparte</p>
        <h2 className={styles.hashtag}>#BodaSofíaYAlejandro</h2>
        <p className={styles.text}>
          Comparte tus fotografías y videos con nosotros<br />
          en redes sociales usando nuestro hashtag.
        </p>
        <div className={styles.icons}>
          <span>📸</span>
          <span>🎥</span>
          <span>❤️</span>
        </div>
      </div>
    </section>
  )
}
