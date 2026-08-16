"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  room: string;
};

const FILTERS = [
  "ALL SPACES",
  "RESIDENTIAL",
  "LIVING ROOM",
  "BEDROOM",
  "KITCHEN",
  "DINING",
  "BATHROOM",
  "OFFICE SPACES",
  "COMMERCIAL",
  "HOSPITALITY",
];

const CTA_POINTS = [
  { icon: "photo_library", title: "Beautifully Crafted Spaces", copy: "Designed with passion, delivered with perfection." },
  { icon: "chair", title: "Inspired By You, Designed For You", copy: "Every detail is thoughtfully curated to reflect your lifestyle." },
  { icon: "home", title: "From Concept To Creation", copy: "End-to-end design solutions tailored to your vision." },
];

export default function GalleryView({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState("ALL SPACES");
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible =
    filter === "ALL SPACES" || filter === "RESIDENTIAL"
      ? photos
      : photos.filter((p) => p.room === filter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [open]);

  const go = useCallback(
    (delta: number) => {
      setOpen((i) => {
        if (i === null || visible.length === 0) return i;
        return (i + delta + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const active = open !== null ? visible[open] : null;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>GALLERY</span>
          </div>
          <h1 className={styles.heroTitle}>Gallery</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroTagline}>Spaces That Inspire</p>
          <p className={styles.heroLede}>
            Explore a curated collection of our finest interiors. Each space tells a story of design, craftsmanship
            and detail.
          </p>
        </div>
        <button type="button" className={styles.slideshowBtn} onClick={() => setOpen(0)}>
          <span className="ei-icon">photo</span>
          VIEW SLIDESHOW
        </button>
      </section>

      <div className={styles.filterBar}>
        <div className={styles.filters}>
          {FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setFilter(label);
                setOpen(null);
              }}
              className={`${styles.filterBtn} ${filter === label ? styles.filterBtnActive : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className={styles.filterChip}>
          <span className="ei-icon" style={{ fontSize: 16 }}>
            tune
          </span>
          FILTER
        </span>
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>No photos in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {visible.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={styles.card}
              onClick={() => setOpen(i)}
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={styles.cardImg}
                preload={i < 4}
              />
              <span className={styles.cardLabel}>{photo.label}</span>
            </button>
          ))}
        </div>
      )}

      <section className={styles.ctaBar}>
        <div className={styles.ctaInner}>
          {CTA_POINTS.map((p) => (
            <div key={p.title} className={styles.ctaPoint}>
              <span className="ei-icon" style={{ color: "#d2aa68", fontSize: 28 }}>
                {p.icon}
              </span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
          <div className={styles.ctaTalk}>
            <p>Have a project in mind?</p>
            <Link href="/book-consultation" className={styles.talkBtn}>
              LET&apos;S TALK <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(null);
        }}
      >
        {active && (
          <>
            <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            <button type="button" className={styles.prev} onClick={() => go(-1)} aria-label="Previous photo">
              ‹
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="90vw"
              className={styles.lightboxImg}
            />
            <button type="button" className={styles.next} onClick={() => go(1)} aria-label="Next photo">
              ›
            </button>
          </>
        )}
      </dialog>
    </div>
  );
}
