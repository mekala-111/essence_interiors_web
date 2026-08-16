import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DESCRIPTION =
  "The best Residential Interior Designers in Hyderabad is Essence Interiors. We provide residential interior designs as well as residential architectural";

export const metadata: Metadata = {
  title: { absolute: "Residential Interiors - Essence Interior Designers" },
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
  alternates: { canonical: "https://essenceinteriors.co.in/residential-interiors/" },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Residential Interiors - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/residential-interiors/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Interiors - Essence Interior Designers",
    description: DESCRIPTION,
  },
};

const SPACES = ["Living Spaces", "Bedrooms", "Kitchens", "Bathrooms", "Dining"];

const EXAMPLES = [
  { name: "The Kavuri Residence", slug: "serene-residence" },
  { name: "The Wren Apartment", slug: "luxury-apartment" },
  { name: "The Amara Flat", slug: "timeless-bedroom" },
];

export default function ResidentialInteriorsPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Residential Interiors</h1>
        </div>
      </section>

      <section className={styles.approach}>
        <div>
          <p className={styles.eyebrow}>Residential Interiors</p>
          <h2 className={styles.approachHeading}>The Best Residential Interior Designers in Hyderabad</h2>
          <p className={styles.approachText} style={{ marginBottom: 18 }}>
            The best Residential Interior Designers in Hyderabad is Essence Interiors. We provide residential
            interior designs as well as residential architectural designs. Our projects include luxury villa design
            (bedroom interior, bathroom interior, kitchen interior, hall entrance family living room, space
            planning), villa exterior design (exterior design proposals, boundaries design), and interior landscape
            design (garden, pool design) in Hyderabad.
          </p>
          <p className={styles.approachText} style={{ marginBottom: 18 }}>
            The leading interior designing company in Hyderabad is Essence Interiors. Our team recreates your
            wonderful living units to complement the prevailing fashions and trends. We focus our creative thought
            process as well as knowledge to serve you with brilliant designs. Our main strength lies in our ability
            to perfectly combine inspiring ideas and skills. No wonder, our efforts are obviously producing
            striking results for any type of residence, be it upscale or studio.
          </p>
          <p className={styles.approachText}>
            We believe in providing our clients with the best possible solutions that match their personalities,
            lifestyles and stylistic choice. Armed with beautiful ideas, we create polished, personalized settings
            that infuse comfort and functionality into every aspect. By keeping the theme of every room as the
            backbone of the planning, we as one of the successful residential interior designers in Hyderabad do not
            hesitate to expand our capabilities to bring out the unique environment to which you aspire.
          </p>
        </div>
        <div className={styles.approachImg} />
      </section>

      <section className={styles.spacesSection}>
        <div className={styles.spacesGrid}>
          {SPACES.map((s) => (
            <div key={s}>
              <div className={styles.spaceImg} />
              <p className={styles.spaceName}>{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.furnitureSection}>
        <div className={styles.furnitureInner}>
          <div className={styles.furnitureImg} />
          <div>
            <p className={styles.furnitureEyebrow}>Essence Interiors</p>
            <h2 className={styles.furnitureHeading}>Essence Interiors</h2>
            <p className={styles.furnitureText} style={{ marginBottom: 16 }}>
              To start working on any project, our hardworking team provides comprehensive space planning for your
              space. Our team of experts take care of any type of residential design from start to finish. Therefore,
              we are the best Interior Designers in Hyderabad.
            </p>
            <p className={styles.furnitureText} style={{ marginBottom: 16 }}>
              Our company provides the first-class service on interior decorations or various ranges of color
              combinations, textures, fabrics, furniture for interior space of office spaces in Hyderabad. We offer
              office interior design at an affordable price. The design of a meeting room is a tall order because it
              reflects the values and the status of the company in relation to its potential clients. With interior
              design being an obvious ingredient in architecture, everyone should own a euphonious residential
              interior in Hyderabad. Unique styling with functional and aesthetic appeal creates a feeling of
              comfort.
            </p>
            <p className={styles.furnitureText} style={{ marginBottom: 16 }}>
              Residence interior design is the complete creative solution for a programmed interview. We offer the
              option of interiors for the residence as per the specifications of the clients in Hyderabad. We
              undertake the interior design work of the residence from scratch and complete it on time. Apart from
              this we also suggest ways to enhance a space, furniture, color of walls, arches, and curves in
              Hyderabad. So we are the best residential interior designer in Hyderabad.
            </p>
            <p className={styles.furnitureText}>
              We offer residential interior design with a lot of comfortable living room, modular kitchen, bedroom,
              laundry area, wall designs etc. The main objective of Essence Interiors is to deliver its interior
              design and decoration thoughts and desires. As part of residential design, the prestigious interior
              design company also offers services for villas, farmhouse and apartments, etc.
            </p>
          </div>
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
