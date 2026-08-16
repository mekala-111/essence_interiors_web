"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export const PDF = "/Our_Portfolio.pdf";

function isIos() {
  if (typeof navigator === "undefined") return true;
  return (
    /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export default function PortfolioViewer() {
  const [embed, setEmbed] = useState(false);

  useEffect(() => {
    const desktop = !isIos() && window.matchMedia("(min-width: 861px)").matches;
    setEmbed(desktop);
  }, []);

  if (!embed) {
    return (
      <div className={styles.mobileFallback}>
        <img
          src="/images/luxury-interior-design-hyderabad-01.jpg"
          alt="Essence Interiors portfolio"
          className={styles.cover}
        />
        <p className={styles.fallbackCopy}>iPhone cannot show a PDF inside the page. Open it in Safari.</p>
        <a href={PDF} target="_blank" rel="noopener noreferrer" className={styles.download}>
          OPEN LOOKBOOK
        </a>
      </div>
    );
  }

  return <iframe title="Essence Interiors portfolio" src={`${PDF}#view=FitH`} className={styles.viewer} />;
}
