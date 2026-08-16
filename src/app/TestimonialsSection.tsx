"use client";

import { useEffect, useState } from "react";
import styles from "./TestimonialsSection.module.css";

const TESTIMONIALS = [
  {
    quote:
      "Essence understood exactly what we wanted before we could put it into words. The result feels effortless.",
    name: "Ananya & Rohit Sharma",
    project: "Residential",
    location: "Banjara Hills",
  },
  {
    quote: "The attention to detail on materials and finishes was remarkable. Every corner feels considered.",
    name: "Vikram Reddy",
    project: "Commercial Office",
    location: "HITEC City",
  },
  {
    quote: "From the first sketch to the final handover, communication was clear and the execution flawless.",
    name: "Priya Menon",
    project: "Villa",
    location: "Gachibowli",
  },
  {
    quote: "They transformed a difficult layout into the most functional, beautiful home we could imagine.",
    name: "The Kapoor Family",
    project: "Residential",
    location: "Jubilee Hills",
  },
];

const STATS = [
  { icon: "diversity_3", value: "250+", label: "Happy Clients" },
  { icon: "star", value: "98%", label: "Client Satisfaction" },
  { icon: "home", value: "10M+", label: "Sq.Ft. Transformed" },
  { icon: "workspace_premium", value: "4.9/5", label: "Average Rating" },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[index];

  return (
    <>
      <div className={styles.top}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Client Stories</p>
          <div className={styles.dividerRow}>
            <span className={styles.line} />
            <span className={styles.diamond} />
          </div>
          <h2 className={styles.heading}>Stories That Inspire Trust</h2>
          <div className={styles.dividerRow}>
            <span className={styles.line} style={{ width: 24 }} />
            <span className={styles.diamond} />
            <span className={styles.line} style={{ width: 24 }} />
          </div>
          <p className={styles.lede}>
            At Essence Interiors, every project is a partnership built on trust, creativity and attention to
            detail. Here&apos;s what our clients have to say about their journey with us.
          </p>
          <a href="#testimonial-grid" className={styles.outlineCta}>
            READ MORE REVIEWS <span>→</span>
          </a>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photo} />
          <div className={styles.quoteCard}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quoteText}>{active.quote}</p>
            <div className={styles.smallDivider} />
            <p className={styles.quoteName}>{active.name}</p>
            <p className={styles.quoteMeta}>
              {active.project}, {active.location}
            </p>
            <div className={styles.dots}>
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  aria-label="Show testimonial"
                  onClick={() => setIndex(i)}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="testimonial-grid" className={styles.grid}>
        <div className={styles.gridInner}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.card}>
              <span className={styles.cardQuote}>&ldquo;</span>
              <p className={styles.cardText}>{t.quote}</p>
              <div className={styles.smallDivider} style={{ width: 20 }} />
              <div className={styles.cardFooter}>
                <div className={styles.avatar} />
                <div>
                  <p className={styles.cardName}>{t.name}</p>
                  <p className={styles.cardMeta}>
                    {t.project},
                    <br />
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.statsWrap}>
        <div className={styles.statsBar}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className="ei-icon" style={{ color: "#D2AA68", fontSize: 26 }}>
                {s.icon}
              </span>
              <div>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
