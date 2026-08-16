"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const SLIDES = [
  "/images/luxury-interior-design-hyderabad-01.jpg",
  "/images/living-room-interior-hyderabad-05.jpg",
  "/images/modular-kitchen-hyderabad-03.jpg",
  "/images/bedroom-interior-design-hyderabad-04.jpg",
  "/images/villa-interior-design-hyderabad-06.jpg",
  "/images/home-interior-design-hyderabad-07.jpg",
];

export default function HeroBg() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.heroBg}>
      {SLIDES.map((src, n) => (
        <div
          key={src}
          className={`${styles.heroSlide} ${n === i ? styles.heroSlideActive : ""}`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
    </div>
  );
}
