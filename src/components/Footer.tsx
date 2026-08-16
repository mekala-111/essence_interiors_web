import Link from "next/link";
import Image from "next/image";
import AppLink from "./AppLink";
import YouTubeShowcase from "./YouTubeShowcase";
import { fetchChannelVideos } from "@/lib/videos";
import styles from "./Footer.module.css";

const COMPANY_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Why Essence", href: "/#why-us" },
  { label: "Projects", href: "/#projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

const SERVICE_LINKS = [
  { label: "Residential Interiors", href: "/residential-interiors" },
  { label: "Commercial Interiors", href: "/commercial-interiors" },
  { label: "Turnkey Projects", href: "/turnkey-projects" },
  { label: "Office Interiors", href: "/commercial-interiors" },
  { label: "Restaurant Interiors", href: "/commercial-interiors" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/essenceinteriors.hyd", src: "/images/essence-interiors-instagram.webp" },
  { label: "Facebook", href: "https://www.facebook.com/share/1CrC9pQ8sb/", src: "/images/essence-interiors-facebook.webp" },
  { label: "YouTube", href: "https://www.youtube.com/@EssenceInteriors-hyd", src: "/images/essence-interiors-youtube.webp" },
  { label: "Pinterest", href: "https://pin.it/14dqN4Xgz", src: "/images/essence-interiors-pinterest.webp" },
];

export default async function Footer({ hideShowcase = false }: { hideShowcase?: boolean }) {
  const year = new Date().getFullYear();
  const videos = hideShowcase ? [] : await fetchChannelVideos().catch(() => []);

  return (
    <>
      {!hideShowcase && <YouTubeShowcase videos={videos.slice(0, 5)} />}
      <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.logoChip}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/essence-interiors-hyderabad-logo.png" alt="Essence Interiors" className={styles.logo} />
            </div>
            <p className={styles.tagline}>Where Science &amp; Art Breakeven</p>
            <p className={styles.blurb}>
              The best Interior Designers in Hyderabad. We provide residential interior designs as well as
              residential architectural designs.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Company</h4>
            <div className={styles.linkList}>
              {COMPANY_LINKS.map((link) => (
                <AppLink key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </AppLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Services</h4>
            <div className={styles.linkList}>
              {SERVICE_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contactList}>
              <span>ESSENCE INTERIORS, HUDA Layout, Gopanpalle, Nallagandla, Telangana 500019</span>
              <span>
                <a href="tel:+919666199943" className={styles.link}>
                  +91 9666199943
                </a>
              </span>
              <a href="mailto:info@essenceinteriors.co.in" className={styles.link}>
                info@essenceinteriors.co.in
              </a>
            </div>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <Image src={s.src} alt="" width={38} height={38} className={styles.socialImg} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.legal}>
          <span>© {year} Essence Interiors. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
