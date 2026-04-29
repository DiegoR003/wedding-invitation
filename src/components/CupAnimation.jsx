import styles from './CupAnimation.module.css'

export default function CupAnimation() {
  return (
    <svg
      className={styles.cups}
      viewBox="0 0 160 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Copas de champán brindando"
    >
      <defs>
        <linearGradient id="cupGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#9B7B2E" />
        </linearGradient>
        <linearGradient id="champagne" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8C97A" stopOpacity="0.6" />
        </linearGradient>
        <filter id="cupGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Left cup */}
      <g className={styles.cupLeft}>
        {/* Cup bowl */}
        <path d="M42,15 L55,60 L38,60 Z" fill="url(#cupGold)" stroke="#C9A84C" strokeWidth="0.5" />
        {/* Champagne fill */}
        <path d="M44,28 L53,55 L40,55 Z" fill="url(#champagne)" opacity="0.7" />
        {/* Stem */}
        <line x1="46.5" y1="60" x2="46.5" y2="80" stroke="url(#cupGold)" strokeWidth="2" />
        {/* Base */}
        <ellipse cx="46.5" cy="80" rx="12" ry="3" fill="url(#cupGold)" stroke="#C9A84C" strokeWidth="0.5" />
        {/* Bubbles */}
        <circle className={styles.bubble1} cx="47" cy="50" r="1" fill="#F5E6C8" opacity="0.6" />
        <circle className={styles.bubble2} cx="44" cy="42" r="0.8" fill="#F5E6C8" opacity="0.5" />
        <circle className={styles.bubble3} cx="49" cy="35" r="0.6" fill="#F5E6C8" opacity="0.4" />
      </g>

      {/* Right cup */}
      <g className={styles.cupRight}>
        <path d="M118,15 L105,60 L122,60 Z" fill="url(#cupGold)" stroke="#C9A84C" strokeWidth="0.5" />
        <path d="M116,28 L107,55 L120,55 Z" fill="url(#champagne)" opacity="0.7" />
        <line x1="113.5" y1="60" x2="113.5" y2="80" stroke="url(#cupGold)" strokeWidth="2" />
        <ellipse cx="113.5" cy="80" rx="12" ry="3" fill="url(#cupGold)" stroke="#C9A84C" strokeWidth="0.5" />
        <circle className={styles.bubble1} cx="113" cy="50" r="1" fill="#F5E6C8" opacity="0.6" />
        <circle className={styles.bubble2} cx="116" cy="40" r="0.8" fill="#F5E6C8" opacity="0.5" />
        <circle className={styles.bubble3} cx="111" cy="32" r="0.6" fill="#F5E6C8" opacity="0.4" />
      </g>

      {/* Sparkles from toast */}
      <g className={styles.sparkles}>
        <line x1="80" y1="12" x2="80" y2="5" stroke="#F5E6C8" strokeWidth="1" opacity="0.8" />
        <line x1="80" y1="12" x2="75" y2="6" stroke="#F5E6C8" strokeWidth="1" opacity="0.6" />
        <line x1="80" y1="12" x2="85" y2="6" stroke="#F5E6C8" strokeWidth="1" opacity="0.6" />
        <line x1="80" y1="12" x2="73" y2="10" stroke="#F5E6C8" strokeWidth="0.8" opacity="0.4" />
        <line x1="80" y1="12" x2="87" y2="10" stroke="#F5E6C8" strokeWidth="0.8" opacity="0.4" />
        <circle cx="80" cy="12" r="2" fill="#F5E6C8" opacity="0.5" />
      </g>
    </svg>
  )
}
