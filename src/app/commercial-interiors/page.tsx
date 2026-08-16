import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DESCRIPTION =
  "COMMERCIAL INTERIORS Interior design is a salient of architecture. The company’s interior design gives a meaningful and professional finish to the office";

export const metadata: Metadata = {
  title: { absolute: "Commercial Interiors - Essence Interior Designers" },
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
  alternates: { canonical: "https://essenceinteriors.co.in/commercial-interiors/" },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Commercial Interiors - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/commercial-interiors/",
    siteName: "Essence Interiors",
    images: [
      {
        url: "https://essenceinteriors.co.in/wp-content/uploads/2024/04/Untitled-design-1.png",
        width: 300,
        height: 500,
        alt: "Commercial Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Interiors - Essence Interior Designers",
    description: DESCRIPTION,
    images: ["https://essenceinteriors.co.in/wp-content/uploads/2024/04/Untitled-design-1.png"],
  },
};

const SEGMENTS = ["Offices", "Retail Stores", "Shopping Malls", "Warehouses", "Cafes", "Community Centres"];

const EXAMPLES = [
  { name: "North Star Offices", slug: "north-star-offices" },
  { name: "Lumen Café", slug: "urban-restaurant" },
  { name: "Vertex Corporate HQ", slug: "elegant-workspace" },
];

export default function CommercialInteriorsPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Commercial Interiors</h1>
        </div>
      </section>

      <section className={styles.segmentsSection}>
        <h2 className={styles.introHeading}>Commercial Interiors</h2>
        <p className={styles.introText}>
          Interior design is a salient of architecture. The company&apos;s interior design gives a meaningful and
          professional finish to the office structure. A commercial space with an attractive look will evoke an
          expansion of the company. Increase productivity, workable furniture should be provided to the employee,
          suitable glass or wood partitions and furniture including decorations, carpets to spread on the floor
          providing exemplary comfort to the worker in Hyderabad. So, we are the best Commercial Interior Designers
          in Hyderabad.
        </p>
        <p className={styles.introText}>
          Interior designs in the commercial sector is driven by consumer demand as well as emerging technologies.
          The use of cutting-edge capabilities and materials to create world-class environments that turn into
          inspiring spaces. The growing influence of sustainability and green design are driving trends and
          rephrasing interiors. Along with team of experts we also have design professionals. We are a team who
          understands best and change customer needs and delivery, within an industry standard time frame. Starting
          from IT companies to major commercial brands, we have an amazing range of interiors in our portfolio.
        </p>
        <p className={styles.introText} style={{ marginBottom: 48 }}>
          In addition to interior designs, we also provide custom commercial interior designs. This includes
          offices, retail stores, shopping mall community centres, stores, warehouses and cafes. The goal of our
          commercial interior design solution is to make the most of the available space. We place great emphasis
          on maintaining the balance between practicality and aesthetics of the commercial building. Our smart
          commercial interior design solutions are sure to bring the perfect touch to your commercial space. Call
          our experts for bespoke commercial interior design solutions. We provide uniquely commercial interior
          designs in Hyderabad.
        </p>
        <div className={styles.segmentsGrid}>
          {SEGMENTS.map((s) => (
            <div key={s}>
              <div className={styles.segmentImg} />
              <h3 className={styles.segmentName}>{s}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.examplesSection}>
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
