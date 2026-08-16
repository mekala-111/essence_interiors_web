import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Luxury Villas | Essence Interiors",
  description: "Complete architectural and interior execution for standalone luxury homes.",
};

const PILLARS = [
  { title: "Architecture + Interiors", desc: "A single team overseeing structural and interior decisions together." },
  { title: "Custom Furniture", desc: "Bespoke pieces fabricated to fit each room exactly." },
  { title: "Premium Materials", desc: "Natural stone, hardwood and metal finishes sourced for longevity." },
  { title: "Lighting Design", desc: "Layered lighting plans built into the architecture, not added after." },
  { title: "3D Visualization", desc: "Full walkthroughs before construction begins." },
  { title: "Turnkey Execution", desc: "From foundation to furnishing, managed end to end." },
];

const EXAMPLES = [
  { name: "Aparna Sky Villa", slug: "the-modern-villa" },
  { name: "Hillcrest Villa", slug: "serene-residence" },
];

export default function LuxuryVillasPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Services</p>
          <h1 className={styles.heroTitle}>Luxury Villas</h1>
          <p className={styles.heroLede}>
            Complete architectural and interior execution for standalone luxury homes.
          </p>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.pillarsGrid}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.pillarCard}>
              <div className={styles.pillarImg} />
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.examplesSection}>
        <p className={styles.examplesHead}>Featured Villas</p>
        <div className={styles.examplesGrid}>
          {EXAMPLES.map((ex) => (
            <Link key={ex.name} href={`/projects/${ex.slug}`} className={styles.exampleCard}>
              <div className={styles.exampleImg} />
              <p className={styles.exampleName}>{ex.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Building a Villa? Let&apos;s Talk.</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          BOOK A CONSULTATION
        </Link>
      </section>

      <Footer />
    </div>
  );
}
