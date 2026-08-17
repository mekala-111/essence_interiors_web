"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only show on homepage
    if (pathname !== "/") {
      setPhase("done");
      return;
    }

    // Check if splash was already shown in this session
    const hasSeenSplash = sessionStorage.getItem("ei-splash-shown");

    // Skip if user prefers reduced motion
    if (hasSeenSplash || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      setShouldShow(false);
      return;
    }

    // Mark splash as shown for this session
    sessionStorage.setItem("ei-splash-shown", "1");
    setShouldShow(true);

    // Prevent body scroll during splash
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Fade out animation starts at 3.4s
    const fadeTimer = window.setTimeout(() => {
      setPhase("out");
    }, 3400);

    // Hide completely at 4.1s
    const hideTimer = window.setTimeout(() => {
      document.body.style.overflow = prevOverflow;
      setPhase("done");
      setShouldShow(false);
    }, 4100);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [pathname]);

  // Only render if on home page AND should show splash
  if (pathname !== "/" || !shouldShow || phase === "done") return null;

  return (
    <div
      className={`${styles.splash} ${phase === "out" ? styles.leaving : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Welcome to Essence Interiors"
    >
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.frame} />

      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.mono} aria-hidden="true">
            <span className={styles.monoE}>E</span>
            <span className={styles.monoI}>I</span>
          </div>
          <p className={styles.essence}>ESSENCE</p>
          <p className={styles.interiors}>
            <span className={styles.line} />
            INTERIORS
            <span className={styles.line} />
          </p>
          <p className={styles.tagline}>Where Science &amp; Art Breakeven</p>
        </div>

        <div className={styles.stage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/welcome.png" alt="Welcome" className={styles.welcomeImg} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gif.png" alt="" className={styles.scene} />
        </div>

        <div className={styles.loader}>
          <div className={styles.track}>
            <div className={styles.bar} />
          </div>
          <p className={styles.loadingText}>Loading experience...</p>
        </div>
      </div>
    </div>
  );
}
