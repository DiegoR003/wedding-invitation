import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

const WEDDING_DATE = new Date('2025-11-15T18:00:00')

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    function update() {
      const now = new Date()
      const diff = WEDDING_DATE - now
      if (diff <= 0) {
        setPassed(true)
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.section} id="cuenta-regresiva">
      <div className={styles.inner}>
        <p className="section-label">Faltan</p>
        {passed ? (
          <p className={styles.passedMsg}>¡Hoy es el gran día! 🥂</p>
        ) : (
          <div className={styles.grid}>
            {[
              { value: time.days, label: 'Días' },
              { value: time.hours, label: 'Horas' },
              { value: time.minutes, label: 'Minutos' },
              { value: time.seconds, label: 'Segundos' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.block}>
                <div className={styles.number}>{pad(value)}</div>
                <div className={styles.label}>{label}</div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.tagline}>
          <p>para unir nuestras vidas para siempre</p>
        </div>
      </div>
    </section>
  )
}
