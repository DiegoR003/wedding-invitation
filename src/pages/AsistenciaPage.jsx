import { useState } from "react";
import Navbar from "../components/Navbar";
import StickyRSVPBar from "../components/StickyRSVPBar";
import Hashtag from "../components/Hashtag";
import WeddingSummary from "../components/WeddingSummary";
import Footer from "../components/Footer";
import styles from "./AsistenciaPage.module.css";
import { weddingData } from "../data/weddingData";

const attendanceOptions = ["Sí", "No", "No lo sé todavía"];

const hotelOptions = [
  "Parador de Cuenca",
  "Hospedería de Cuenca",
  "Leonor de Aquitania",
  "Cabañas Embid",
  "Hotel Torremangana",
  "Hostal Cánovas",
  "Otro hotel distinto a los propuestos",
];

const busOptions = [
  "Parador de Cuenca a Finca Embid",
  "Plaza Mayor/Calle San Pedro a Finca Embid",
  "Hotel Torremangana/Pl. de la Constitución a Finca Embid",
  "Iré por mi cuenta",
];

const shoeSizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43"];

export default function AsistenciaPage() {
  const [formData, setFormData] = useState({
    name: "",
    companion: "",
    attendance: "",
    preWedding: "",
    hotel: "",
    otherHotel: "",
    bus: "",
    shoeSize: "",
    foodNotes: "",
  });

  function updateField(field, value) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Aquí después puedes conectar EmailJS, Formspree, Firebase, Supabase, etc.
    console.log("RSVP enviado:", formData);
    alert("¡Gracias! Hemos recibido tu confirmación.");
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="asistencia-title">
          <div className={styles.inner}>
            <p className={styles.kicker}>Asistencia</p>

            <h1 id="asistencia-title" className={styles.title}>
              ¡Confirma tu asistencia!
            </h1>

            <p className={styles.intro}>
              Para poder hacer más fácil tu estancia y particularizar las
              necesidades de nuestros invitados te pedimos que rellenes algunas
              cuestiones de nuestro formulario:
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Nombre y apellido
                </label>
                <input
                  id="name"
                  className={styles.input}
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="companion">
                  Nombre y apellido de tu acompañante{" "}
                  <span>(incluye aquí hijos)</span>
                </label>
                <input
                  id="companion"
                  className={styles.input}
                  type="text"
                  value={formData.companion}
                  onChange={(event) =>
                    updateField("companion", event.target.value)
                  }
                />
              </div>

              <RadioGroup
                title="¿Confirmas asistencia a la boda?"
                name="attendance"
                options={attendanceOptions}
                value={formData.attendance}
                onChange={(value) => updateField("attendance", value)}
              />

              <RadioGroup
                title="¿Vendrás a la preboda que se celebra el viernes noche?"
                name="preWedding"
                options={attendanceOptions}
                value={formData.preWedding}
                onChange={(value) => updateField("preWedding", value)}
              />

              { /* <CheckboxGroup
                title="¿Has reservado hotel? En caso afirmativo, ¿podrías indicarnos cuál?"
                name="hotel"
                options={hotelOptions}
                value={formData.hotel}
                onChange={(value) => updateField("hotel", value)}
              />

              <div className={styles.field}>
                <label className={styles.label} htmlFor="otherHotel">
                  Si es un hotel distinto a los propuestos ¿Cuál sería?
                </label>
                <input
                  id="otherHotel"
                  className={styles.input}
                  type="text"
                  value={formData.otherHotel}
                  onChange={(event) =>
                    updateField("otherHotel", event.target.value)
                  }
                />
              </div>

              <CheckboxGroup
                title="Necesitas autobús de ida y vuelta el día de la boda"
                name="bus"
                options={busOptions}
                value={formData.bus}
                onChange={(value) => updateField("bus", value)}
              />

              <RadioGroup
                title="¡Pondremos zapatos planos! Indícanos tu talla:"
                name="shoeSize"
                options={shoeSizes}
                value={formData.shoeSize}
                onChange={(value) => updateField("shoeSize", value)}
                compact
              /> */}

              <div className={styles.field}>
                <label className={styles.label} htmlFor="foodNotes">
                  ¿Tienes intolerancia alimenticia, vegano, vegetariano,
                  embarazo?...
                </label>
                <textarea
                  id="foodNotes"
                  className={styles.textarea}
                  value={formData.foodNotes}
                  onChange={(event) =>
                    updateField("foodNotes", event.target.value)
                  }
                  rows={5}
                />
              </div>

              <button className={styles.submitButton} type="submit">
                Enviar
              </button>
            </form>

            <a className={styles.backButton} href="/informacion">
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

      <StickyRSVPBar href="#asistencia" />
    </>
  );
}

function RadioGroup({ title, name, options, value, onChange, compact = false }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.groupTitle}>{title}</legend>

      <div className={compact ? styles.optionsCompact : styles.options}>
        {options.map((option) => (
          <label className={styles.option} key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({ title, name, options, value, onChange }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.groupTitle}>{title}</legend>

      <div className={styles.optionsGrid}>
        {options.map((option) => (
          <label className={styles.option} key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}