"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const [percent, setPercent] = useState(50);
  const [trackWidth, setTrackWidth] = useState(960);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPercent(pct);
    setTrackWidth(rect.width);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    setTrackWidth(track.getBoundingClientRect().width);
    const ro = new ResizeObserver((entries) => {
      setTrackWidth(entries[0].contentRect.width);
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (ev: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const clientX = "touches" in ev ? ev.touches[0].clientX : ev.clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={trackRef}
      className={styles.track}
      onMouseDown={() => {
        draggingRef.current = true;
      }}
      onTouchStart={() => {
        draggingRef.current = true;
      }}
    >
      <div className={styles.after} />
      <div className={styles.beforeWrap} style={{ width: `${percent}%` }}>
        <div className={styles.before} style={{ width: trackWidth }} />
      </div>
      <div className={styles.handleLine} style={{ left: `${percent}%` }}>
        <div className={styles.handleKnob}>↔</div>
      </div>
      <span className={`${styles.tag} ${styles.tagBefore}`}>BEFORE</span>
      <span className={`${styles.tag} ${styles.tagAfter}`}>AFTER</span>
    </div>
  );
}
