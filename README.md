# 💍 Wedding Invitation — React + Vite

Landing page de invitación digital de boda. Diseño de lujo oscuro con animaciones de anillos y copas.

## Stack
- **React 18** + **Vite 5**
- **CSS Modules** (sin Tailwind, estilos totalmente custom)
- **EmailJS** para el formulario de confirmación de asistencia
- Deploy: **Vercel** (gratis)

---

## Personalización rápida

### 1. Nombres y fecha
Edita `src/components/Hero.jsx`:
```jsx
// Cambia los nombres
<h1 className={styles.name1}>Sofía</h1>
<h1 className={styles.name2}>Alejandro</h1>
```

Edita `src/components/Countdown.jsx`:
```js
const WEDDING_DATE = new Date('2025-11-15T18:00:00') // Tu fecha aquí
```

### 2. Lugares del evento
Edita `src/components/EventDetails.jsx` con tu iglesia/venue y links de Google Maps reales.

### 3. Mesa de regalos
Edita `src/components/GiftTable.jsx` con tus números de evento reales.

### 4. Hashtag
Edita `src/components/Hashtag.jsx` con tu hashtag.

### 5. Footer — créditos
En `src/components/Footer.jsx` la línea `Diego R.` ya está incluida en el footer.

---

## Configurar EmailJS (formulario de confirmación)

1. Crea cuenta gratuita en [emailjs.com](https://emailjs.com)
2. Crea un **Service** (Gmail, Outlook, etc.)
3. Crea un **Template** con estas variables:
   - `{{name}}` — Nombre completo
   - `{{email}}` — Correo
   - `{{attending}}` — ¿Asistirá? (yes/no)
   - `{{guests}}` — Número de pases
   - `{{dietary}}` — Restricciones alimenticias
   - `{{message}}` — Mensaje
4. Copia tus credenciales en `src/components/RSVP.jsx`:

```js
const EMAILJS_SERVICE_ID = 'tu_service_id'
const EMAILJS_TEMPLATE_ID = 'tu_template_id'
const EMAILJS_PUBLIC_KEY = 'tu_public_key'
```

---

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Build para producción

```bash
npm run build
```

---

## Deploy en Vercel (gratis)

1. Sube el proyecto a un repositorio en GitHub
2. Entra a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
3. Importa el repositorio → Vercel detecta Vite automáticamente
4. Haz clic en **Deploy** ✅

No necesitas ninguna configuración adicional. Vercel maneja todo.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx / .module.css       — Navegación fija con scroll
│   ├── Hero.jsx / .module.css         — Portada con nombres animados
│   ├── RingsAnimation.jsx / .module.css — SVG anillos animados
│   ├── Countdown.jsx / .module.css    — Cuenta regresiva en tiempo real
│   ├── OurStory.jsx / .module.css     — Línea de tiempo de la historia
│   ├── EventDetails.jsx / .module.css — Detalles del evento + itinerario
│   ├── CupAnimation.jsx / .module.css — SVG copas de champán
│   ├── RSVP.jsx / .module.css         — Formulario de confirmación
│   ├── GiftTable.jsx / .module.css    — Mesa de regalos
│   ├── Hashtag.jsx / .module.css      — Sección hashtag
│   └── Footer.jsx / .module.css       — Pie de página
├── App.jsx
├── main.jsx
└── index.css                          — Variables globales de diseño
```

---

## Paleta de colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--gold` | `#C9A84C` | Dorado principal |
| `--gold-light` | `#E8C97A` | Dorado claro |
| `--gold-pale` | `#F5E6C8` | Dorado pálido |
| `--cream` | `#F8F2E6` | Texto principal |
| `--blush` | `#D4A5A5` | Rosa champagne |
| `--noir` | `#0E0C0A` | Fondo principal |

---

*© 2025 · Diseño & Desarrollo por Diego R. · Todos los derechos reservados*
