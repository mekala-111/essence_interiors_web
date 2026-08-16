import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../commercial-interiors/page.module.css";

const DESCRIPTION =
  "We provide the best Turnkey Interior Projects Designers in Hyderabad. Our interior designing team does all type of interior works with the interior material.";

export const metadata: Metadata = {
  title: { absolute: "Turnkey Projects - Essence Interior Designers" },
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://essenceinteriors.co.in/turnkey-projects/" },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Turnkey Projects - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/turnkey-projects/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Projects - Essence Interior Designers",
    description: DESCRIPTION,
  },
};

const EXAMPLES = [
  { name: "The Kavuri Residence", slug: "serene-residence" },
  { name: "North Star Offices", slug: "north-star-offices" },
  { name: "Aparna Sky Villa", slug: "the-modern-villa" },
];

export default function TurnkeyProjectsPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Turnkey Projects</h1>
        </div>
      </section>

      <section className={styles.segmentsSection}>
        <h2 className={styles.introHeading}>Turnkey Projects</h2>
        <p className={styles.introText}>
          We provide the best Turnkey Interior Projects Designers in Hyderabad. Our interior designing team does
          all type of interior works with the interior material. We are the perfect interior designers for your
          dream home.
        </p>
        <p className={styles.introText}>
          The Turnkey Interior Designers in Hyderabad are Essence Interiors. Essence Interiors provides one point of
          contact for interiors to scale back the danger of handling multiple suppliers. Here, a contractor controls
          and manages the whole interior design project from start to end. Turnkey projects reduce stress and work
          for various sorts of professionals, an outsized design project for a home or commercial space is typically
          a task for the homeowner if it involves different types of excess. However, Essence Interiors will provide
          some extent of contact and full responsibility for the work until delivery.
        </p>
        <p className={styles.introText}>
          Interior design has become a clever practice that analyzes programmatic information, establishes a
          conceptual direction, refines design direction. This also produces graphic communication and construction
          documents. Simply put, it establishes your first impression. Turnkey Interiors are the most recent
          innovation in this field, contributing to an efficient style statement for homes of all types, sizes, and
          classes. So, we are the simplest Turnkey Interior Project Designers in Hyderabad.
        </p>
        <p className={styles.introText} style={{ marginBottom: 0 }}>
          Essence turnkey interior design projects accompany our full commitment and excellent service. We
          concentrate on the minutest detail and fork over the projects within promised dates. We provide great
          interior design aesthetics and efficiency. We offer personalized interior design solutions for homes and
          offices. An ultra-modern or a standard country style homes, or offices spaces – we do the most effective
          that suits your taste. Our expert interior designers guide you to the simplest designs and that fit your
          needs.
        </p>
      </section>

      <section className={styles.examplesSection}>
        <h2 className={styles.introHeading} style={{ textAlign: "center" }}>
          A Creative Interior Designers In Hyderabad To Make Your Space Beautiful
        </h2>
        <p className={styles.examplesHead}>Bringing Life to Your Inner World</p>
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
        <h2 className={styles.ctaHeading}>Contact Us For Your Free Consultation.</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          GET A FREE QUOTE
        </Link>
      </section>

      <Footer />
    </div>
  );
}
