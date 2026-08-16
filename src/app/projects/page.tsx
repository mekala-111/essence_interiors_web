import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/projects";
import ProjectsFilterGrid from "./ProjectsFilterGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Portfolio | Essence Interiors",
  description:
    "Explore a collection of our finest residential and commercial projects that reflect our commitment to design excellence, functionality and timeless beauty.",
};

const PORTFOLIO_STATS = [
  { icon: "apartment", value: "250+", label: "Projects Completed" },
  { icon: "location_on", value: "50+", label: "Cities Served" },
  { icon: "star", value: "10+", label: "Years of Experience" },
  { icon: "workspace_premium", value: "98%", label: "Client Satisfaction" },
];

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string | string[] }>;
}) {
  const cat = (await searchParams).cat;
  const initialCat = Array.isArray(cat) ? cat[0] : cat;

  return (
    <div className={styles.page}>
      <Header forceSolid />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <div className={styles.breadcrumb}>
            <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>OUR PORTFOLIO</span>
          </div>
          <h1 className={styles.heroTitle}>Our Portfolio</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroTagline}>Spaces Crafted With Purpose.</p>
          <p className={styles.heroLede}>
            Explore a collection of our finest residential and commercial projects that reflect our commitment to
            design excellence, functionality and timeless beauty.
          </p>
          <a href="#grid" className={styles.darkCta}>
            DISCOVER OUR WORK <span>→</span>
          </a>
        </div>
      </section>

      <ProjectsFilterGrid projects={PROJECTS} initialCat={initialCat} />

      <div className={styles.viewAllWrap}>
        <a href="#grid" className={styles.outlineCta}>
          VIEW ALL PROJECTS <span>→</span>
        </a>
      </div>

      <div className={styles.statsWrap}>
        <div className={styles.statsBar}>
          {PORTFOLIO_STATS.map((s) => (
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
      </div>

      <div className={styles.ctaStripWrap}>
        <div className={styles.ctaStrip}>
          <div className={styles.ctaStripLeft}>
            <span className="ei-icon" style={{ color: "#B8863B", fontSize: 34 }}>
              chair
            </span>
            <div>
              <p className={styles.ctaStripEyebrow}>Have a Project in Mind?</p>
              <p className={styles.ctaStripHeading}>Let&apos;s create something extraordinary together.</p>
            </div>
          </div>
          <Link href="/book-consultation" className={styles.darkCta} style={{ whiteSpace: "nowrap" }}>
            BOOK A CONSULTATION <span>→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
