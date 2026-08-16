import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import styles from "./page.module.css";

const GALLERY_RATIOS = ["4/3", "3/4", "1/1", "4/3", "3/4", "4/3"];

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Essence Interiors`,
    description: project.concept,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className={styles.heroInner}>
          <Link href="/projects" className={styles.backLink}>
            ← All Projects
          </Link>
          <h1 className={styles.heroTitle}>{project.name}</h1>
        </div>
      </section>

      <section className={styles.factsWrap}>
        <div className={styles.factsBar}>
          <div className={styles.factCell}>
            <p className={styles.factLabel}>Location</p>
            <p className={styles.factValue}>{project.location}</p>
          </div>
          <div className={styles.factCell}>
            <p className={styles.factLabel}>Area</p>
            <p className={styles.factValue}>{project.area}</p>
          </div>
          <div className={styles.factCell}>
            <p className={styles.factLabel}>Type</p>
            <p className={styles.factValue}>{project.category}</p>
          </div>
          <div className={styles.factCell}>
            <p className={styles.factLabel}>Year</p>
            <p className={styles.factValue}>{project.year}</p>
          </div>
        </div>
      </section>

      <section className={styles.conceptSection}>
        <p className={styles.eyebrow}>Design Concept</p>
        <p className={styles.conceptText}>{project.concept}</p>
      </section>

      <section className={styles.roomsSection}>
        <div className={styles.roomsGrid}>
          {project.rooms.map((room) => (
            <div key={room}>
              <div className={styles.roomImg} />
              <p className={styles.roomName}>{room}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.materialsSection}>
        <div className={styles.materialsHead}>
          <p className={styles.eyebrow} style={{ marginBottom: 0 }}>
            Materials Used
          </p>
        </div>
        <div className={styles.materialsRow}>
          {project.materials.map((m) => (
            <span key={m} className={styles.materialPill}>
              {m}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.baSection}>
        <div className={styles.baHead}>
          <p className={styles.eyebrow} style={{ marginBottom: 0 }}>
            Before &amp; After
          </p>
        </div>
        <div className={styles.baGrid}>
          <div className={styles.baCell}>
            <div className={styles.baImg} />
            <span className={`${styles.baTag} ${styles.baTagBefore}`}>BEFORE</span>
          </div>
          <div className={styles.baCell}>
            <div className={`${styles.baImg} ${styles.baImgAfter}`} />
            <span className={`${styles.baTag} ${styles.baTagAfter}`}>AFTER</span>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHead}>
          <p className={styles.eyebrow} style={{ marginBottom: 0 }}>
            Gallery
          </p>
        </div>
        <div className={styles.galleryMasonry}>
          {GALLERY_RATIOS.map((ratio, i) => (
            <div key={i} className={styles.galleryImg} style={{ aspectRatio: ratio }} />
          ))}
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.quoteText}>{project.testimonial.quote}</p>
          <p className={styles.quoteName}>{project.testimonial.name}</p>
          <p className={styles.quoteProject}>{project.testimonial.project}</p>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <p className={styles.relatedHead}>Related Projects</p>
        <div className={styles.relatedGrid}>
          {related.map((r) => (
            <Link key={r.slug} href={`/projects/${r.slug}`} className={styles.relatedCard}>
              <div className={styles.relatedImg} />
              <p className={styles.relatedName}>{r.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Have a Similar Project in Mind?</h2>
        <Link href="/book-consultation" className={styles.ctaBtn}>
          BOOK A CONSULTATION
        </Link>
      </section>

      <Footer />
    </div>
  );
}
