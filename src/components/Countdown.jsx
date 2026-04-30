import { useEffect, useMemo, useState } from "react";
import styles from "./Countdown.module.css";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const difference = target - now;

  if (Number.isNaN(target) || difference <= 0) {
    return {
      isFinished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    isFinished: false,
    days: Math.floor(difference / DAY),
    hours: Math.floor((difference % DAY) / HOUR),
    minutes: Math.floor((difference % HOUR) / MINUTE),
    seconds: Math.floor((difference % MINUTE) / SECOND),
  };
}

function formatUnit(value) {
  return String(value).padStart(2, "0");
}

export function Countdown({
  targetDate = "2026-10-01T13:00:00",
  title = "¡YA QUEDA MENOS!",
  finishedMessage = "¡Ya estáis casados!",
  calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE",
}) {
  const initialTimeLeft = useMemo(() => getTimeLeft(targetDate), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));

    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, SECOND);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  const units = [
    { label: "Días", value: timeLeft.days, shouldPad: false },
    { label: "Horas", value: timeLeft.hours, shouldPad: true },
    { label: "Minutos", value: timeLeft.minutes, shouldPad: true },
    { label: "Segundos", value: timeLeft.seconds, shouldPad: true },
  ];

  return (
    <section className={styles.countdown} aria-labelledby="countdown-title">
      <div className={styles.inner}>
        <h2 id="countdown-title" className={styles.title}>
          {title}
        </h2>

        {timeLeft.isFinished ? (
          <p className={styles.finishedMessage}>{finishedMessage}</p>
        ) : (
          <div className={styles.timer} role="timer" aria-live="polite">
            {units.map((unit, index) => (
              <div className={styles.unitWrapper} key={unit.label}>
                <div className={styles.unit}>
                  <span className={styles.amount}>
                    {unit.shouldPad ? formatUnit(unit.value) : unit.value}
                  </span>
                  <span className={styles.label}>{unit.label}</span>
                </div>

                {index < units.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        <a
          className={styles.calendarButton}
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
        >
          Guardar fecha Google Calendar
        </a>
      </div>
    </section>
  );
}

export default Countdown;