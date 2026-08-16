import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DESCRIPTION =
  "Best Interior Designing Company in Hyderabad is Essence Interiors. Essence Interior Design and Decorators Company is one of the top interior design companies";

export const metadata: Metadata = {
  title: { absolute: "About Us - Essence Interior Designers" },
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
  alternates: { canonical: "https://essenceinteriors.co.in/about/" },
  openGraph: {
    locale: "en_IN",
    type: "article",
    title: "About Us - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/about/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Essence Interior Designers",
    description: DESCRIPTION,
  },
};

const JOURNEY_POINTS = [
  { icon: "home", line1: "Homes & Offices.", line2: "Customized Services." },
  { icon: "apartment", line1: "Residential Indoor", line2: "& Outdoor Design." },
  { icon: "storefront", line1: "Commercial, Architecture", line2: "& Turnkey Projects." },
];

const VALUES = [
  { icon: "home", title: "Home Interiors", desc: "Home interior design aligned with key principles and dynamic use of space." },
  { icon: "bathtub", title: "Bathroom Interiors", desc: "Bathroom interior design as part of exceptionally designed interiors in Hyderabad." },
  { icon: "countertops", title: "Kitchen Interiors", desc: "Kitchen interior design for stylish, aesthetically pleasing residential spaces." },
  { icon: "bed", title: "Bedroom & Dining", desc: "Bedroom, dining room and kids room interior design across Hyderabad homes." },
  { icon: "apartment", title: "Commercial & Office", desc: "Commercial and office interior design. Outstanding design in all aspects of interior spaces." },
];

const ABOUT_STATS = [
  { icon: "diversity_3", value: "10+", label: "Years of Experience" },
  { icon: "apartment", value: "250+", label: "Projects Completed" },
  { icon: "location_on", value: "50+", label: "Cities Served" },
  { icon: "star", value: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>ABOUT US</span>
        </div>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>About Us</h1>
            <div className={styles.heroDivider} />
            <p className={styles.heroTagline}>
              Best Interior Designing Company
              <br />
              in Hyderabad.
            </p>
            <p className={styles.heroLede}>
              Best Interior Designing Company in Hyderabad is Essence Interiors. Essence Interior Design and
              Decorators Company is one of the top interior design companies offering exclusive services for living
              and working in Hyderabad. The experts of the prestigious interior design company for residential
              interior design and exterior interior design, offering interior design, commercial interiors,
              interior design architectures services, restaurant interior design decorators in Hyderabad. Essence
              Interiors is made up of a group of highly skilled and extremely productive interior designers and
              experts who understand customer needs.
            </p>
            <a href="#philosophy" className={styles.darkCta}>
              ABOUT THE COMPANY <span>→</span>
            </a>
          </div>
          <div className={styles.heroImg} />
        </div>
      </section>

      <section id="philosophy" className={styles.journey}>
        <div className={styles.journeyImg} />
        <div>
          <p className={styles.eyebrow}>About The Company</p>
          <h2 className={styles.journeyHeading}>About The Company</h2>
          <p className={styles.journeyText}>
            Essence Interior Design and Decorators is one of the leading interior design companies in Hyderabad,
            providing customized services for homes and offices. The prestigious interior design firm specializes
            in residential indoor and outdoor interior design. Commercial interiors, architectural interior
            design, and turnkey projects are among the services we offer. We also design for restaurants and
            offices in Hyderabad, in addition to everything else. Essence Interiors is made up of a team of highly
            trained and productive designers who understand what their clients require.
          </p>
          <p className={styles.journeyText} style={{ marginBottom: 0 }}>
            Essence Interiors works on projects such as home interior design, bathroom interior design, kitchen
            interior design, bedroom interior design, dining room interior design, kids room interior design, as
            well as commercial and office interior design. In the creation of exceptionally designed interiors in
            Hyderabad, our team aligns key principles and dynamic use of space. Essence Interiors creates stylish
            and aesthetically pleasing residential and commercial interior spaces in Hyderabad. We specialize in
            providing outstanding design in all aspects of interior spaces. So we are the best interior designing
            company in Hyderabad.
          </p>
        </div>
        <div className={styles.journeyPoints}>
          {JOURNEY_POINTS.map((j) => (
            <div key={j.line1} className={styles.journeyPoint}>
              <span className="ei-icon">{j.icon}</span>
              <p className={styles.journeyPointText}>
                {j.line1}
                <br />
                {j.line2}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHead}>
          <p className={styles.eyebrow}>How We Do</p>
          <div className={styles.valuesHeadRule}>
            <span style={{ width: 60, height: 1, background: "rgba(184,134,59,0.5)" }} />
          </div>
          <h2 className={styles.valuesHeading}>How We Do</h2>
          <p className={styles.journeyText} style={{ marginTop: 18 }}>
            Being the top interior designers in Hyderabad. We are always serious about the standard services we
            provide to you. Essence Architects Interior Designers will keep your client as the end point of all
            design-related decisions. The visuals of your restaurant are the main impression you will make on a
            customer. We will carry the concept, as unique as it is, of your menu inside.
          </p>
          <p className={styles.journeyText} style={{ marginBottom: 0 }}>
            The biggest challenge for an interior designer in India today would be to create some kind of haven
            for the guests — a memorable experience away from home, a challenge that we are fully prepared to take
            up. Our Essence interior designers have a solid understanding of the knowledge. As a result we give
            accurate designs to our clients because we are the best interior designing company in Hyderabad.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueCell}>
              <span className={`ei-icon ${styles.valueIcon}`}>{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {ABOUT_STATS.map((s) => (
            <div key={s.label} className={styles.statCell}>
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
      </section>

      <Footer />
    </div>
  );
}
