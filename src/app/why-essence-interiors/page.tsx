import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../commercial-interiors/page.module.css";

const DESCRIPTION =
  "Why Essence Interiors designing company provides the best quality materials for interior designing in Hyderabad and around. The evergreen interior designing";

export const metadata: Metadata = {
  title: { absolute: "Why Essence Interiors - Essence Interior Designers" },
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
  alternates: { canonical: "https://essenceinteriors.co.in/why-essence-interiors/" },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Why Essence Interiors - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/why-essence-interiors/",
    siteName: "Essence Interiors",
    images: [
      {
        url: "https://essenceinteriors.co.in/wp-content/uploads/2024/04/IMG-20190706-WA0013.jpg",
        width: 1200,
        height: 900,
        alt: "Why Essence Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Essence Interiors - Essence Interior Designers",
    description: DESCRIPTION,
    images: ["https://essenceinteriors.co.in/wp-content/uploads/2024/04/IMG-20190706-WA0013.jpg"],
  },
};

const EXAMPLES = [
  { name: "Living Room", slug: "serene-residence", bg: "var(--p16)" },
  { name: "Bedroom", slug: "luxury-apartment", bg: "var(--p19)" },
  { name: "Kitchen", slug: "serene-residence", bg: "var(--p18)" },
  { name: "Villa Interior", slug: "the-modern-villa", bg: "var(--p21)" },
  { name: "Dining", slug: "luxury-apartment", bg: "var(--p20)" },
  { name: "Wardrobe", slug: "serene-residence", bg: "var(--p22)" },
  { name: "Office", slug: "north-star-offices", bg: "var(--p23)" },
  { name: "Luxury Suite", slug: "luxury-apartment", bg: "var(--p24)" },
];

export default function WhyEssenceInteriorsPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Why Essence Interiors</h1>
        </div>
      </section>

      <section className={styles.segmentsSection}>
        <div className={styles.split}>
          <div>
            <h2 className={styles.introHeading}>Why Essence Interiors</h2>
            <p className={styles.introText}>
              Why Essence Interiors designing company provides the best quality materials for interior designing in
              Hyderabad and around. The evergreen interior designing company uses worldwide materials and models for our
              Interiors designing, from all over the world. Modular kitchens, false ceilings, electricity works are very
              updated and safe for any kind of commercial, residential and villas.
            </p>
            <p className={styles.introText}>
              Essence Interiors designing company is directly importing for these worldwide sourcing materials in
              Hyderabad, and the quality is perfect. As well as these materials are personally tested and then accepts by
              our company, and these are perfectly satisfied for luxury interiors designing which designed of 3D designs
              as per your taste.
            </p>
            <p className={styles.introText}>
              We create a beautiful environment, our priority is to deliver the best results by implementing the most
              suitable modern interior design for your home that is satisfied with your tastes and needs, and most
              importantly availability of spaces to organize and provide the latest home appliances.
            </p>
            <p className={styles.introText} style={{ marginBottom: 0 }}>
              We are also operating in main cities like Tirupati, Nellore, Vijayawada
            </p>
          </div>
          <div className={styles.splitImgs}>
            <div className={styles.splitImg} role="img" aria-label="Essence Interiors living space" />
            <div className={styles.splitImg} role="img" aria-label="Essence Interiors bedroom" />
          </div>
        </div>
      </section>

      <section className={styles.examplesSection}>
        <h2 className={styles.introHeading} style={{ textAlign: "center" }}>
          A Creative Interior Designers In Hyderabad To Make Your Space Beautiful
        </h2>
        <p className={styles.examplesHead}>Bringing Life to Your Inner World</p>
        <div className={styles.examplesGrid}>
          {EXAMPLES.map((ex) => (
            <Link key={ex.name} href={`/projects/${ex.slug}`} className={styles.exampleCard}>
              <div
                className={styles.exampleImg}
                style={{ background: `${ex.bg} center/cover no-repeat` }}
              />
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
