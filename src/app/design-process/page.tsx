import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Design Process | Essence Interiors",
  description: "A clear, collaborative process that turns your vision into timeless, functional spaces.",
};

const STEPS = [
  { icon: "forum", title: "Consultation", desc: "We begin by understanding your vision, needs, lifestyle and budget through an in-depth consultation." },
  { icon: "edit", title: "Concept & Design", desc: "Our team creates mood boards, layouts and 3D visuals that bring your ideas to life with creativity and precision." },
  { icon: "fact_check", title: "Plan & Approve", desc: "We refine the design, finalize materials and provide detailed plans with transparent estimates for your approval." },
  { icon: "chair", title: "Execution", desc: "Our skilled team brings the approved design to life with quality craftsmanship and strict attention to detail." },
  { icon: "home", title: "Delivery & Support", desc: "We deliver your dream space on time and continue to support you for a complete hassle-free experience." },
].map((s, i) => ({ ...s, number: `0${i + 1}` }));

const FEATURES = [
  { icon: "group", label: "Dedicated Team" },
  { icon: "workspace_premium", label: "Quality Assured" },
  { icon: "event_available", label: "On-Time Delivery" },
  { icon: "support_agent", label: "Ongoing Support" },
];

export default function DesignProcessPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div>
          <div className={styles.eyebrowRow}>
            <p className={styles.eyebrowLabel}>Our Process</p>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowDiamond} />
          </div>
          <h1 className={styles.heroTitle}>How We Work</h1>
          <p className={styles.heroTagline}>Our Design Process</p>
          <p className={styles.heroLede}>
            A clear, collaborative process that turns your vision into timeless, functional spaces.
          </p>
          <Link href="/book-consultation" className={styles.darkCta}>
            START YOUR JOURNEY <span>→</span>
          </Link>
        </div>
        <div className={styles.heroImg} />
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.stepsGrid}>
          {STEPS.map((step) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.stepCircleWrap}>
                <div className={styles.stepCircle}>
                  <span className="ei-icon">{step.icon}</span>
                </div>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bandWrap}>
        <div className={styles.band}>
          <div>
            <p className={styles.bandQuote}>
              From Concept to Completion, <em>We Craft Experiences.</em>
            </p>
          </div>
          <div className={styles.bandFeatures}>
            {FEATURES.map((f) => (
              <div key={f.label} className={styles.bandFeature}>
                <span className="ei-icon">{f.icon}</span>
                <p className={styles.bandFeatureLabel}>{f.label}</p>
              </div>
            ))}
          </div>
          <div className={styles.bandCtaWrap}>
            <p className={styles.bandCtaText}>Let&apos;s create something extraordinary together.</p>
            <Link href="/book-consultation" className={styles.bandCta}>
              BOOK A CONSULTATION <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
