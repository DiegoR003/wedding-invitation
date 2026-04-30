import { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

export function Timeline({
  title = "Nuestra historia",
  items = [],
  images = [],
}) {
  const [activeImage, setActiveImage] = useState(0);

  const middleIndex = Math.ceil(items.length / 2);
  const firstGroup = items.slice(0, middleIndex);
  const secondGroup = items.slice(middleIndex);

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className={styles.section} aria-labelledby="story-title">
      <div className={styles.inner}>
        <h2 id="story-title" className={styles.title}>
          {title}
        </h2>

        <div className={styles.storyGrid}>
          <div className={styles.column}>
            {firstGroup.map((item) => (
              <article className={styles.storyItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.imageWrap}>
            {images.length > 0 && (
              <img
                className={styles.image}
                src={images[activeImage]}
                alt=""
              />
            )}

            <div className={styles.dots} aria-label="Carrusel de imágenes">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dotButton} ${
                    index === activeImage ? styles.dotActive : ""
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            {secondGroup.map((item) => (
              <article className={styles.storyItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.mobileLayout}>
          <div className={styles.mobileGroup}>
            {firstGroup.map((item) => (
              <article className={styles.storyItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          {images.length > 0 && (
            <div className={styles.mobileImageWrap}>
              <img
                className={styles.image}
                src={images[activeImage]}
                alt=""
              />

              <div className={styles.dots} aria-label="Carrusel de imágenes">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.dotButton} ${
                      index === activeImage ? styles.dotActive : ""
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className={styles.mobileGroup}>
            {secondGroup.map((item) => (
              <article className={styles.storyItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;