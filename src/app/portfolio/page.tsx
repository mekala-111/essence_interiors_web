import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const DESCRIPTION =
  "Browse the Essence Interiors portfolio — a lookbook of residential interiors in Hyderabad, from kitchens and bedrooms to living spaces.";

const PDF = "/Our%20portfolio.pdf";

export const metadata: Metadata = {
  title: { absolute: "Portfolio - Essence Interior Designers" },
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
  alternates: { canonical: "https://essenceinteriors.co.in/portfolio/" },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Portfolio - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/portfolio/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Essence Interior Designers",
    description: DESCRIPTION,
  },
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <Header forceSolid />
      <div className={styles.bar}>
        <div className={styles.barInner}>
          <div>
            <div className={styles.breadcrumb}>
              <Link href="/">HOME</Link> / <span className={styles.breadcrumbCurrent}>PORTFOLIO</span>
            </div>
            <h1 className={styles.title}>Portfolio</h1>
          </div>
          <a href={PDF} download="Essence-Interiors-Portfolio.pdf" className={styles.download}>
            DOWNLOAD PDF <span>↓</span>
          </a>
        </div>
      </div>
      <iframe title="Essence Interiors portfolio" src={`${PDF}#view=FitH`} className={styles.viewer} />
      <Footer />
    </div>
  );
}
