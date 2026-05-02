import { useState } from "react";
import styles from "./Navbar.module.css";

import logoImage from "../assets/wedding/Logo-boda2.png";

const leftLinks = [
  { href: "/informacion", label: "Información" },
  { href: "/asistencia", label: "Asistencia" },
  { href: "#desplazamientos", label: "Desplazamientos" },
];

const rightLinks = [
  { href: "/musica", label: "Música" },

  { href: "/regalos", label: "Regalo de boda" },
];

const mobileLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.desktopNav} aria-label="Navegación principal">
        <div className={styles.navSide}>
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#inicio" className={styles.logoLink} aria-label="Inicio">
          <img className={styles.logo} src={logoImage} alt="Mónica y Javier" />
        </a>

        <div className={styles.navSide}>
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <nav className={styles.mobileNav} aria-label="Navegación móvil">
        <button
          className={styles.burger}
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#inicio" className={styles.mobileLogoLink} aria-label="Inicio">
          <img
            className={styles.mobileLogo}
            src={logoImage}
            alt="Mónica y Javier"
          />
        </a>

        <a className={styles.mobileCta} href="/asistencia">
          ¡Confirma asistencia!
        </a>
      </nav>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        {mobileLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
