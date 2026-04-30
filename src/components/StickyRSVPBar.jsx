import styles from "./StickyRSVPBar.module.css";

export function StickyRSVPBar({
  href = "#asistencia",
  label = "¡Confirma asistencia!",
}) {
  return (
    <a className={styles.bar} href={href} aria-label={label}>
      <span className={styles.text}>{label}</span>

      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v12A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-12A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Zm12.5 7h-15v9.5a.5.5 0 0 0 .5.5h14.5a.5.5 0 0 0 .5-.5V9ZM5 6a.5.5 0 0 0-.5.5V7h15v-.5A.5.5 0 0 0 19 6H5Zm10.7 5.3a1 1 0 0 1 0 1.4l-4.25 4.25a1 1 0 0 1-1.42 0L8.3 15.2a1 1 0 1 1 1.4-1.42l1.04 1.04 3.55-3.55a1 1 0 0 1 1.42 0Z" />
      </svg>
    </a>
  );
}

export default StickyRSVPBar;