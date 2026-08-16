import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Essence Interiors",
  description:
    "Have a project in mind or simply want to say hello? We'd love to hear from you. Let's design spaces that inspire and elevate everyday living.",
};

const INFO_BLOCKS = [
  {
    icon: "location_on",
    title: "Our Office",
    line1: "ESSENCE INTERIORS, HUDA Layout,",
    line2: "Gopanpalle, Nallagandla, Telangana 500019",
  },
  { icon: "call", title: "Call Us", line1: "+91 9666199943" },
  { icon: "mail", title: "Email Us", line1: "info@essenceinteriors.co.in" },
  {
    icon: "schedule",
    title: "Working Hours",
    line1: "Monday – Saturday, 10:00 AM – 7:00 PM",
    line2: "(Sunday by appointment only)",
  },
];

function SocialIcon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const SOCIAL_ICONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919666199943",
    external: true,
    icon: (
      <SocialIcon d="M7.5 19.2 4.4 20.4V6.8A2.3 2.3 0 0 1 6.7 4.5h10.6A2.3 2.3 0 0 1 19.6 6.8v8.4a2.3 2.3 0 0 1-2.3 2.3H8.2l-.7 1.7ZM8 9.2h8M8 12.4h5.5" />
    ),
  },
  {
    label: "Call",
    href: "tel:+919666199943",
    icon: (
      <SocialIcon d="M8.2 3.8h2.2l1.2 3.6-2 1.2a11 11 0 0 0 5.6 5.6l1.2-2 3.6 1.2v2.2c0 1.1-.9 2-2.1 1.9C9.4 17.2 4.8 12.6 4.5 5.9c-.1-1.2.8-2.1 1.9-2.1Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:info@essenceinteriors.co.in",
    icon: <SocialIcon d="M4 7.2h16v10.2H4V7.2Zm0 0 8 6 8-6" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/essenceinteriors.hyd",
    external: true,
    icon: <SocialIcon d="M8 4.5h8A3.5 3.5 0 0 1 19.5 8v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5Zm4 4.2A3.3 3.3 0 1 1 8.7 12 3.3 3.3 0 0 1 12 8.7Zm5.1-1.6h.01" />,
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>CONTACT US</span>
        </div>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <div className={styles.heroDivider} />
            <p className={styles.heroTagline}>
              Let&apos;s create something
              <br />
              beautiful together.
            </p>
            <p className={styles.heroLede}>
              Have a project in mind or simply want to say hello? We&apos;d love to hear from you. Let&apos;s
              design spaces that inspire and elevate everyday living.
            </p>
            <div className={styles.heroImg} />
          </div>

          <div className={styles.infoList}>
            {INFO_BLOCKS.map((b) => (
              <div key={b.title} className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <span className="ei-icon">{b.icon}</span>
                </span>
                <div>
                  <p className={styles.infoTitle}>{b.title}</p>
                  <p className={styles.infoLine}>
                    {b.line1}
                    {"line2" in b && b.line2 && (
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

          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Get In Touch</h2>
            <div className={styles.formTitleDivider} />

            <ContactForm />

            <div className={styles.orRow}>
              <span className={styles.orLine} />
              <span className={styles.orLabel}>Or Connect With Us</span>
              <span className={styles.orLine} />
            </div>
            <div className={styles.socialRow}>
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialLink}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapGrid}>
          <div className={styles.mapPanel}>
            <iframe
              className={styles.mapFrame}
              title="Essence Interiors studio on Google Maps"
              src="https://maps.google.com/maps?q=17.4676365,78.3076287+(ESSENCE+INTERIORS)&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className={styles.bookPanel}>
            <span className={`ei-icon ${styles.bookIcon}`}>calendar_month</span>
            <p className={styles.bookTitle}>Book A Consultation</p>
            <p className={styles.bookText}>Schedule a personalized consultation with our design experts.</p>
            <Link href="/book-consultation" className={styles.bookCta}>
              BOOK NOW <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.footerSpacer} />
      <Footer />
    </div>
  );
}
