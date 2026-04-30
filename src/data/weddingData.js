import ceremonia from "../assets/wedding/ceremonia.png";
import ring from "../assets/wedding/ring.png";
import comida from "../assets/wedding/comida.png";
import baile from "../assets/wedding/baile.png";
import rsvpLeft from "../assets/wedding/Pon-tu-foto-aqui-1.jpg";
import rsvpRight from "../assets/wedding/Pon-tu-foto-aqui-de-novios.png";

import storyImage1 from "../assets/wedding/story-1.png";
import storyImage2 from "../assets/wedding/story-2.png";



export const weddingData = {
  couple: "Nancy & Jose",
  date: "2026-10-01T13:00:00",

  calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE",

  hero: {
    eyebrow: "¡Nos casamos!",
    musicLabel: "¡Haz clic y deja que suene la magia!",
  },

  ceremony: {
    time: "13:00 horas",
    place: "Parroquia San Fermín de los Navarros",
    address: "Paseo de Eduardo Dato, 10, Madrid",
    mapUrl: "https://www.google.com/maps",
  },

  reception: {
    place: "Antigua Fábrica de Harinas",
    address: "Ctra. M-128, Km 1,3, Jarama, Madrid",
    mapUrl: "https://www.google.com/maps",
  },

  itineraryIntro: {
    title: "Itinerario Boda",
    text:
      "La ceremonia será religiosa en la **Finca Embid** donde también posteriormente será la celebración. Todo ello **comenzará** en torno a las **13:00 horas** y hasta que el cuerpo aguante.",
    dressCode: "El **código de vestimenta** es de día formal.",
    kidsNote: "María y Jesús preferimos que sea una boda sin niños.",
  },

  schedule: [
      {
    time: "13:00 - 14:00",
    title: "Ceremonia",
    description:
      "Será una ceremonia en la **Parroquia de San Fermín**. Esperamos que la podáis disfrutar.",
    image: ceremonia,
    
  },
    {
    time: "14:00 - 15:00",
    title: "Cocktail",
    description:
      "Disfrutaremos de un **cocktail al aire libre** con aperitivos y bebidas.",
    image: ring,
    
  },
    {
      title: "Comida",
      description:
        "Una vez se haya quitado el gusanillo, y disfrutado del lugar y el ambiente, se ofrecerá una comida para poder asentar, reposar y coger fuerzas para continuar la marcha.",
    image: comida,
    
    },
    {
      title: "Baile",
      description:
        "Para los más animados y los que continúen con sed, moveremos el esqueleto con música de vuestra elección.",
    image: baile,
    
    },
  ],

  transport: {
    title: "¿Cómo ir a la boda?",
    description:
      "Podéis llegar tanto en autobús como en vuestro propio coche. Habrá autobuses disponibles para que no tengáis que preocuparos por nada, pero si preferís venir en coche, la finca cuenta con aparcamiento de sobra.",
    note:
      "¡Si vais a utilizar el autobús, avisadnos al confirmar asistencia para reservaros plaza!",
    buttonLabel: "Ver desplazamientos",
  },

  faq: [
    {
      question: "¿Hay un código de vestimenta?",
      answer:
        "El **código de vestimenta** será venir muy guapos, arreglados/formales pero no de blanco.",
    },
    {
      question: "¿Pueden asistir niños a la boda?",
      answer:
        "Sí, los **niños son bienvenidos**. Hemos preparado un **espacio especial** con entretenimiento para ellos para que disfruten tanto como los adultos.",
    },
    {
      question: "¿Habrá zapatos planos para las invitadas?",
      answer:
        "Sí. Sabemos que después de unas horas de baile los tacones pueden convertirse en una tortura, así que **tendremos zapatos planos disponibles**.",
    },
    {
      question: "¿Cómo será el clima en esa fecha?",
      answer:
        "Octubre en Madrid es impredecible. Os recomendamos traer algo de **abrigo** por si bajan las temperaturas.",
    },
  ],

  story: [
    {
      title: "¿Cómo nos conocimos?",
      text:
        "Fue en el primer día de bachillerato y María estaba sentada sola en el comedor. Jesús se acercó a ella y le preguntó si podía sentarse a su lado. Ella, un poco tímida, aceptó y así comenzó nuestra historia de amor.",
    },
    {
      title: "Universidad",
      text:
        "Decidimos estudiar en la misma ciudad, Salamanca, y compartir piso. Fue entonces cuando la relación se volvió más seria.",
    },
    {
      title: "Relación a distancia",
      text:
        "Los 2 últimos años de carrera, María obtuvo una beca para estudiar en el extranjero. Fue difícil mantener una relación a distancia, pero nos esforzamos para hacerlo funcionar.",
    },
    {
      title: "Madrid",
      text:
        "Finalmente, María regresó a España y por trabajo nos mudamos juntos a Madrid. Allí hemos construido una vida feliz juntos.",
    },
  ],

  storyImages: [storyImage1, storyImage2],

  rsvp: {
    title: "Queremos invitarte a nuestra boda",
    description:
      "Pulsa el botón y rellena el formulario para confirmar asistencia o añadir lo que necesites como intolerancias alimenticias o preguntar dudas.",
    buttonLabel: "¡Confirma tu asistencia!",
    leftImage: rsvpLeft,
    rightImage: rsvpRight,
  },

  gift: {
    title: "Por si os lo estabais planteando…",
    description:
      "Vuestra presencia es lo más importante para nosotros, pero si queréis tener un detalle con la boda y la luna de miel, os dejamos aquí la información.",
    buttonLabel: "¡Regalo de boda!",
    accountLabel: "Resumen:",
    accountValue: "#bodorriomónicajavier",
  },

  summary: {
    items: [
      { label: "Fecha de la boda", value: "01/10/2026" },
      { label: "Lugar", value: "Madrid, España" },
      { label: "Ceremonia", value: "Parroquia San Fermín a las 13:00" },
      { label: "Dirección", value: "Paseo de Eduardo Dato, 10, Madrid" },
      { label: "Comida y baile", value: "Antigua Fábrica de Harinas" },
    ],
    note:
      "Servicio de autobuses, tanto para ir de Madrid a la ceremonia, como para volver a Madrid después del baile en diferentes horarios.",
  },
};