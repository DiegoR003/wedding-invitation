import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './RSVP.module.css'

// ⚠️ Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function RSVP() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    message: '',
    dietary: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.attending) return

    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', attending: '', guests: '1', message: '', dietary: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="confirmacion">
      <div className={styles.container}>
        <p className="section-label">Confirma tu asistencia</p>
        <h2 className={styles.title}>¿Nos acompañas?</h2>

        <div className="gold-divider">
          <span className="gold-divider-icon">♥</span>
        </div>

        <p className={styles.subtitle}>
          Por favor confirma tu asistencia antes del <strong>15 de octubre de 2025</strong>.<br />
          Tu presencia es el mejor regalo que nos puedes dar.
        </p>

        {status === 'success' ? (
          <div className={styles.successMsg}>
            <div className={styles.successIcon}>✦</div>
            <h3>¡Gracias por confirmar!</h3>
            <p>Tu respuesta ha sido recibida. ¡Estamos emocionados de celebrar contigo!</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Nombre completo *</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Correo electrónico</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>¿Asistirás? *</label>
              <div className={styles.radioGroup}>
                {[
                  { value: 'yes', label: '🥂 Sí, asistiré con gusto' },
                  { value: 'no', label: '😢 Lo siento, no podré asistir' },
                ].map(opt => (
                  <label key={opt.value} className={`${styles.radioLabel} ${form.attending === opt.value ? styles.radioSelected : ''}`}>
                    <input
                      type="radio"
                      name="attending"
                      value={opt.value}
                      checked={form.attending === opt.value}
                      onChange={handleChange}
                      className={styles.radioInput}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {form.attending === 'yes' && (
              <>
                <div className={styles.field}>
                  <label className={styles.label}>Número de pases confirmados</label>
                  <select
                    className={styles.input}
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                  >
                    {['1', '2', '3', '4', '5'].map(n => (
                      <option key={n} value={n}>{n} {n === '1' ? 'pase' : 'pases'}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Restricciones alimenticias</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="dietary"
                    value={form.dietary}
                    onChange={handleChange}
                    placeholder="Vegetariano, alergias, etc. (opcional)"
                  />
                </div>
              </>
            )}

            <div className={styles.field}>
              <label className={styles.label}>Déjanos un mensaje</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escríbenos un mensaje bonito..."
                rows="4"
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>Ocurrió un error. Por favor intenta de nuevo o contáctanos directamente.</p>
            )}

            <button
              type="submit"
              className={`btn-gold btn-filled ${styles.submitBtn}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
