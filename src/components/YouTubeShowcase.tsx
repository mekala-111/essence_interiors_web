"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { youtubeEmbedSrc, type Video } from "@/lib/videos";
import styles from "./YouTubeShowcase.module.css";

function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2ZM9.8 15.5V8.5L15.7 12Z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M8.5 6.8v10.4L18 12Z" />
    </svg>
  );
}

export function VideoCards({ videos }: { videos: Video[] }) {
  const [open, setOpen] = useState<Video | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className={styles.grid}>
        {videos.map((video) => (
          <button
            key={video.id}
            type="button"
            className={styles.card}
            onClick={() => setOpen(video)}
          >
            <span className={styles.thumbWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumbnail} alt="" className={styles.thumb} />
              <span className={styles.play} aria-hidden>
                <PlayIcon />
              </span>
              <span className={styles.duration}>{video.duration}</span>
            </span>
            <span className={styles.title}>{video.title}</span>
            <span className={styles.meta}>
              {video.views} · {video.publishedAt}
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div className={styles.modal} onClick={() => setOpen(null)} role="presentation">
          <div
            className={styles.modalInner}
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close video">
              ×
            </button>
            <div className={styles.player}>
              <iframe
                src={youtubeEmbedSrc(open)}
                title={open.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className={styles.modalTitle}>{open.title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function YouTubeShowcase({ videos }: { videos: Video[] }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!videos.length) return null;

  return (
    <section
      ref={rootRef}
      className={`${styles.section} ${inView ? styles.inView : ""}`}
      aria-labelledby="youtube-showcase-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              YouTube Showcase
              <span className={styles.eyebrowLine} />
            </p>
            <h2 id="youtube-showcase-heading" className={styles.heading}>
              Design Stories.
              <br />
              Spaces Brought to Life.
            </h2>
            <p className={styles.lede}>
              Watch our latest videos and get inspired by real spaces, expert insights and behind-the-scenes
              moments from our design journey.
            </p>
          </div>
          <Link href="/inspiration/videos" className={styles.viewAll}>
            <YouTubeMark />
            VIEW ALL VIDEOS <span>→</span>
          </Link>
        </div>
        <VideoCards videos={videos} />
      </div>
      <div className={styles.footerRule} />
    </section>
  );
}
