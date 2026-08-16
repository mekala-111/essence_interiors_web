import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Services | Essence Interiors",
  description: "Full-scope interior design and execution, from a single room to a complete turnkey build.",
};

const SERVICES = [
  { title: "Residential Interiors", desc: "Personalized homes that balance comfort and style, from family rooms to master suites.", href: "/residential-interiors" },
  { title: "Luxury Villas", desc: "Luxury villa design including bedroom, bathroom, kitchen, living room, exterior and landscape.", href: "/luxury-villas" },
  { title: "Modular Kitchens", desc: "High-quality modular kitchen furniture and space-saving plans at an ideal cost.", href: "/modular-kitchens" },
  { title: "Commercial Interiors", desc: "Offices, retail stores, shopping malls, warehouses and cafes designed for brand and flow.", href: "/commercial-interiors" },
  { title: "Office Interiors", desc: "Corporate office, warehouse, store, retail outlet and library interiors in Hyderabad.", href: "/commercial-interiors" },
  { title: "Restaurant Interiors", desc: "Restaurant interiors that carry your menu concept into a memorable guest experience.", href: "/commercial-interiors" },
  { title: "Turnkey Interiors", desc: "One point of contact managing the whole interior project from start to delivery.", href: "/turnkey-projects" },
  { title: "Renovation", desc: "Reimagining existing spaces without starting from scratch.", href: "/residential-interiors" },
  { title: "3D Visualization", desc: "Photorealistic renders before a single wall is touched.", href: "/design-process" },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>What We Do</p>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroLede}>
            Full-scope interior design and execution, from a single room to a complete turnkey build.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {SERVICES.map((s) => (
            <Link key={s.title} href={s.href} className={styles.card}>
              <div className={styles.cardImg} />
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>EXPLORE →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Not Sure Which Service You Need?</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          BOOK A FREE CONSULTATION
        </Link>
      </section>

      <Footer />
    </div>
  );
}
