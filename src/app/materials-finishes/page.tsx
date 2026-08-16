import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Materials & Finishes | Essence Interiors",
  description:
    "We believe that exceptional spaces begin with exceptional materials. Every texture, finish and detail is thoughtfully chosen to bring beauty, durability and timeless elegance to your space.",
};

const MATERIALS = [
  { name: "Natural Stone", icon: "diamond", desc: "Timeless elegance with unique patterns and natural beauty." },
  { name: "Fine Woods", icon: "water_drop", desc: "Rich textures and warmth that bring nature indoors." },
  { name: "Premium Fabrics", icon: "grid_4x4", desc: "Luxurious textiles that add comfort, depth and softness." },
  { name: "Metal Finishes", icon: "auto_awesome", desc: "Refined metals that add a touch of sophistication." },
  { name: "Artisan Finishes", icon: "texture", desc: "Handcrafted finishes that celebrate craft and detail." },
  { name: "Durable & Sustainable", icon: "shield", desc: "Sustainable choices that ensure beauty for years to come." },
];

const TRUST_POINTS = [
  { label: "Sustainable Choices", icon: "eco" },
  { label: "Premium Quality", icon: "workspace_premium" },
  { label: "Built To Last", icon: "shield" },
  { label: "Designed For You", icon: "design_services" },
];

export default function MaterialsFinishesPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Crafted With Intention</p>
          <h1 className={styles.heroTitle}>Materials &amp; Finishes</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Materials &amp; Finishes</p>
        <div className={styles.introRule}>
          <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
          <span style={{ width: 6, height: 6, background: "#B8863B", transform: "rotate(45deg)" }} />
          <span style={{ width: 70, height: 1, background: "rgba(184,134,59,0.5)" }} />
        </div>
        <h2 className={styles.introHeading}>Crafted From The Finest</h2>
        <p className={styles.introLede}>
          We believe that exceptional spaces begin with exceptional materials. Every texture, finish and detail
          is thoughtfully chosen to bring beauty, durability and timeless elegance to your space.
        </p>
      </section>

      <section className={styles.gallerySection}>
        <div>
          <span className={`ei-icon ${styles.sidebarIcon}`}>layers</span>
          <h3 className={styles.sidebarHeading}>
            Curated.
            <br />
            Quality.
            <br />
            Timeless.
          </h3>
          <div className={styles.sidebarDivider} />
          <p className={styles.sidebarText}>
            From natural stones to fine woods and luxurious finishes, our carefully selected materials bring
            depth, character and lasting value to every space we design.
          </p>
          <a href="#gallery" className={styles.sidebarCta}>
            EXPLORE MATERIALS <span>→</span>
          </a>
        </div>
        <div id="gallery" className={styles.materialsGrid}>
          {MATERIALS.map((m) => (
            <div key={m.name}>
              <div className={styles.materialImgWrap}>
                <div className={styles.materialImg} />
              </div>
              <div className={styles.materialIconWrap}>
                <span className={`ei-icon ${styles.materialIcon}`}>{m.icon}</span>
              </div>
              <h3 className={styles.materialName}>{m.name}</h3>
              <p className={styles.materialDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.trustWrap}>
        <div className={styles.trustBar}>
          {TRUST_POINTS.map((t) => (
            <div key={t.label} className={styles.trustPoint}>
              <span className={`ei-icon ${styles.trustIcon}`}>{t.icon}</span>
              <span className={styles.trustLabel}>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Want to See These In Your Space?</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          BOOK A CONSULTATION
        </Link>
      </section>

      <Footer />
    </div>
  );
}
