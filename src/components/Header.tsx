"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isNavActive } from "@/lib/nav";
import styles from "./Header.module.css";

export default function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const [scrolledState, setScrolledState] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

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

  const menu = mobileOpen ? (
    <>
      <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      <nav className={styles.mobilePanel} aria-label="Mobile menu">
        <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={styles.mobileClose}>
          &times;
        </button>
        {NAV_ITEMS.map((item) => {
          const hasChildren = !!item.children;
          const expanded = !!mobileExpanded[item.label];
          return (
            <div key={item.label} className={styles.mobileItem}>
              <div className={styles.mobileItemRow}>
                {hasChildren ? (
                  <button
                    type="button"
                    onClick={() => setMobileExpanded((s) => ({ ...s, [item.label]: !s[item.label] }))}
                    className={`${styles.mobileLink} ${styles.mobileParent} ${isNavActive(item, pathname) ? styles.mobileLinkActive : ""}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`${styles.mobileLink} ${isNavActive(item, pathname) ? styles.mobileLinkActive : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
                {hasChildren ? (
                  <button
                    type="button"
                    aria-label={expanded ? "Collapse" : "Expand"}
                    className={styles.mobileToggle}
                    onClick={() => setMobileExpanded((s) => ({ ...s, [item.label]: !s[item.label] }))}
                  >
                    <span className={`ei-icon ${styles.toggleIcon}`}>
                      {expanded ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                ) : null}
              </div>
              {hasChildren && expanded ? (
                <div className={styles.mobileSubList}>
                  {item.children!.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className={styles.mobileSubLink}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
        <Link href="/book-consultation" onClick={() => setMobileOpen(false)} className={styles.mobileCta}>
          BOOK CONSULTATION
        </Link>
      </nav>
    </>
  ) : null;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerSolid : ""}`}>
        <div className={styles.bar}>
          <Link href="/" className={styles.logoLink}>
            <div className={scrolled ? styles.logoPlate : styles.logoBare}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/essence-interiors-hyderabad-logo.png" alt="Essence Interiors" className={styles.logo} />
            </div>
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item, pathname);
              return (
                <div key={item.label} className={styles.navItem}>
                  <Link href={item.href} className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}>
                    {item.label}
                    {item.chevron ? <span className={`ei-icon ${styles.navChevron}`}>expand_more</span> : null}
                  </Link>
                  {item.children ? (
                    <div className={styles.dropdown}>
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className={styles.dropdownLink}>
                          {child.icon ? <span className={`ei-icon ${styles.dropdownIcon}`}>{child.icon}</span> : null}
                          <span className={styles.dropdownLabel}>{child.label}</span>
                          <span className={styles.dropdownArrow} aria-hidden>
                            ›
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link href="/book-consultation" className={styles.cta}>
              BOOK CONSULTATION
            </Link>
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
