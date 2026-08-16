import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Modular Kitchens | Essence Interiors",
  description: "Custom kitchen design, storage and premium hardware.",
};

const STYLES = ["Modern Kitchens", "Luxury Kitchens", "Minimal Kitchens", "Island Kitchens"];

const MATERIALS = [
  "Quartz Countertops",
  "Matte Laminate",
  "Solid Wood",
  "Soft-Close Hardware",
  "Under-Cabinet Lighting",
  "Stainless Steel",
  "Glass Shutters",
];

const GALLERY_RATIOS = ["4/3", "3/4", "1/1", "4/3", "3/4", "4/3"];

export default function ModularKitchensPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Services</p>
          <h1 className={styles.heroTitle}>Modular Kitchens</h1>
        </div>
      </section>

      <section className={styles.stylesSection}>
        <div className={styles.stylesGrid}>
          {STYLES.map((s) => (
            <div key={s}>
              <div className={styles.styleImg} />
              <p className={styles.styleName}>{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.storageSection}>
        <div className={styles.storageImg} />
        <div>
          <p className={styles.eyebrow}>Storage Solutions</p>
          <h2 className={styles.storageHeading}>Every Inch Planned, Nothing Wasted.</h2>
          <p className={styles.storageText}>
            The finished item will be natural looking, dyed, laminated or painted with high-quality paint and is
            made with vacuum-free powder paint. In Essence Interior decorators, we create high-quality modular
            kitchen furniture and kitchen desks with the most advanced space saving plans, the kitchen wall and
            more. We are the best interior designer Hyderabad will give complete interiors to your kitchen at an
            ideal cost.
          </p>
        </div>
      </section>

      <section className={styles.materialsSection}>
        <p className={styles.materialsHead}>Materials &amp; Hardware</p>
        <div className={styles.materialsRow}>
          {MATERIALS.map((m) => (
            <span key={m} className={styles.materialPill}>
              {m}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection}>
        <p className={styles.galleryHead}>Kitchen Gallery</p>
        <div className={styles.galleryMasonry}>
          {GALLERY_RATIOS.map((ratio, i) => (
            <div key={i} className={styles.galleryImg} style={{ aspectRatio: ratio }} />
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Design Your Dream Kitchen.</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          BOOK A CONSULTATION
        </Link>
      </section>

      <Footer />
    </div>
  );
}
