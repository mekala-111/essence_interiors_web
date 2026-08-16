import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationForm from "./ConsultationForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Book a Consultation | Essence Interiors",
  description:
    "Schedule a one-on-one consultation with our design experts and take the first step toward a beautifully crafted space that reflects your style and needs.",
};

const PERKS = [
  {
    icon: "workspace_premium",
    title: "Personalized Expert Advice",
    desc: "Customized solutions tailored to your needs",
  },
  {
    icon: "design_services",
    title: "Innovative Designs",
    desc: "Creative ideas that bring your vision to life",
  },
  {
    icon: "request_quote",
    title: "Transparent Estimates",
    desc: "Clear pricing and no hidden surprises",
  },
  {
    icon: "schedule",
    title: "Save Time & Effort",
    desc: "End-to-end support for a seamless journey",
  },
];

const INFO_BLOCKS = [
  {
    icon: "location_on",
    title: "Visit Our Studio",
    line1: "ESSENCE INTERIORS, HUDA Layout,",
    line2: "Gopanpalle, Nallagandla, Telangana 500019",
  },
  {
    icon: "call",
    title: "Call Us",
    line1: "+91 9666199943",
  },
  {
    icon: "mail",
    title: "Email Us",
    line1: "info@essenceinteriors.co.in",
  },
  {
    icon: "schedule",
    title: "Working Hours",
    line1: "Monday – Saturday, 10:00 AM – 7:00 PM",
    line2: "(Sunday by appointment only)",
  },
];

export default function BookConsultationPage() {
  return (
    <div style={{ background: "#FAF8F3", color: "#20231F", overflowX: "hidden" }}>
      <Header forceSolid />

      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroGradient} />

        <div className={styles.heroInner}>
          <div>
            <div className={styles.breadcrumb}>
              <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>BOOK A CONSULTATION</span>
            </div>
            <h1 className={styles.title}>Book A Consultation</h1>
            <div className={styles.titleDivider} />
            <p className={styles.subhead}>Let&apos;s bring your dream space to life.</p>
            <p className={styles.lede}>
              Schedule a one-on-one consultation with our design experts and take the first step
              toward a beautifully crafted space that reflects your style and needs.
            </p>

            <div className={styles.perksGrid}>
              {PERKS.map((p) => (
                <div key={p.title}>
                  <span className={`ei-icon ${styles.perkIcon}`}>{p.icon}</span>
                  <p className={styles.perkTitle}>{p.title}</p>
                  <p className={styles.perkDesc}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.quoteBox}>
              <p className={styles.quoteText}>
                Great design begins with a great <em>conversation.</em>
              </p>
              <p className={styles.quoteSub}>We&apos;re here to listen and create spaces that inspire.</p>
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <span className={styles.formIconCircle}>
                <span className="ei-icon">event_available</span>
              </span>
              <h2 className={styles.formTitle}>Schedule Your Consultation</h2>
              <div className={styles.formTitleDivider} />
              <p className={styles.formSubtext}>
                Please fill out the form below and our team will get in touch with you shortly.
              </p>
            </div>

            <ConsultationForm />
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          {INFO_BLOCKS.map((b) => (
            <div key={b.title} className={styles.infoItem}>
              <span className={`ei-icon ${styles.infoIcon}`}>{b.icon}</span>
              <div className={styles.infoText}>
                <p className={styles.infoTitle}>{b.title}</p>
                <p className={styles.infoLine}>
                  {b.line1}
                  {b.line2 && (
                    <>
                      <br />
                      {b.line2}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
