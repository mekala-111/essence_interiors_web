"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"in" | "out" | "done">(pathname === "/" ? "in" : "done");

  useEffect(() => {
    if (pathname !== "/") {
      setPhase("done");
      return;
    }

    if (sessionStorage.getItem("ei-splash") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    sessionStorage.setItem("ei-splash", "1");
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fade = window.setTimeout(() => setPhase("out"), 3400);
    const hide = window.setTimeout(() => {
      document.body.style.overflow = prev;
      setPhase("done");
    }, 4100);

    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(hide);
      document.body.style.overflow = prev;
    };
  }, [pathname]);

  if (pathname !== "/" || phase === "done") return null;

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
