"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import AppLink from "./AppLink";
import { NAV_ITEMS, goTo } from "@/lib/nav";
import styles from "./Header.module.css";

export default function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolledState, setScrolledState] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolledState(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = scrolledState || forceSolid || pathname !== "/";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const menu = mobileOpen ? (
    <>
      <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      <nav className={styles.mobilePanel} aria-label="Mobile menu">
        <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={styles.mobileClose}>
          &times;
        </button>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileLinkActive : ""}`}
            onClick={() => {
              setMobileOpen(false);
              goTo(item.href, (url) => router.push(url));
            }}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.mobileCta}
          onClick={() => {
            setMobileOpen(false);
            goTo("/book-consultation", (url) => router.push(url));
          }}
        >
          BOOK CONSULTATION
        </button>
      </nav>
    </>
  ) : null;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerSolid : ""}`}>
        <div className={styles.bar}>
          <AppLink href="/" className={styles.logoLink}>
            <div className={scrolled ? styles.logoPlate : styles.logoBare}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/essence-interiors-hyderabad-logo.png" alt="Essence Interiors" className={styles.logo} />
            </div>
          </AppLink>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className={styles.navItem}>
                <AppLink href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}>
                  {item.label}
                </AppLink>
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <AppLink href="/book-consultation" className={styles.cta}>
              BOOK CONSULTATION
            </AppLink>
            <button aria-label="Open menu" onClick={() => setMobileOpen(true)} className={styles.hamburger}>
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>
      {menu ? createPortal(menu, document.body) : null}
    </>
  );
}
