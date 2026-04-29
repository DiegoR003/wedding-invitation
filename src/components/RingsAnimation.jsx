import styles from './RingsAnimation.module.css'

export default function RingsAnimation() {
  return (
    <svg
      className={styles.rings}
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anillos de bodas animados"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="40%" stopColor="#C9A84C" />
          <stop offset="70%" stopColor="#E8C97A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="blushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDD5D5" />
          <stop offset="50%" stopColor="#D4A5A5" />
          <stop offset="100%" stopColor="#C48E8E" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left ring - gold */}
      <circle
        className={styles.ring1}
        cx="85" cy="50" r="32"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        filter="url(#glow)"
      />
      {/* Left ring inner detail */}
      <circle
        cx="85" cy="50" r="27"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Right ring - blush/rose gold */}
      <circle
        className={styles.ring2}
        cx="115" cy="50" r="32"
        fill="none"
        stroke="url(#blushGrad)"
        strokeWidth="4"
        filter="url(#glow)"
      />
      {/* Right ring inner detail */}
      <circle
        cx="115" cy="50" r="27"
        fill="none"
        stroke="#D4A5A5"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Diamond on left ring */}
      <g className={styles.diamond}>
        <polygon
          points="85,12 90,20 85,26 80,20"
          fill="url(#goldGrad)"
          stroke="#F5E6C8"
          strokeWidth="0.5"
        />
        <polygon
          points="85,20 90,20 85,26 80,20"
          fill="#C9A84C"
          opacity="0.6"
        />
        {/* Sparkles */}
        <line x1="85" y1="6" x2="85" y2="10" stroke="#F5E6C8" strokeWidth="0.8" opacity="0.8" />
        <line x1="91" y1="8" x2="89" y2="11" stroke="#F5E6C8" strokeWidth="0.8" opacity="0.6" />
        <line x1="79" y1="8" x2="81" y2="11" stroke="#F5E6C8" strokeWidth="0.8" opacity="0.6" />
      </g>

      {/* Small hearts between rings */}
      <g className={styles.hearts}>
        <path
          d="M100,48 C100,45 103,43 103,46 C103,43 106,45 106,48 C106,51 103,54 103,54 C103,54 100,51 100,48Z"
          fill="#D4A5A5"
          opacity="0.7"
        />
      </g>
    </svg>
  )
}
