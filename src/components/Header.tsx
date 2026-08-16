"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

type NavChild = { label: string; href: string; icon?: string };
type NavItem = { label: string; href: string; chevron?: boolean; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Essence", href: "/why-essence-interiors" },
  {
    label: "Projects",
    href: "/projects",
    chevron: true,
    children: [
      { label: "Residential Projects", href: "/projects?cat=Residential#grid", icon: "home" },
      { label: "Commercial Projects", href: "/projects?cat=Commercial#grid", icon: "apartment" },
      { label: "Hospitality Projects", href: "/projects?cat=Hospitality#grid", icon: "weekend" },
      { label: "Featured Projects", href: "/projects", icon: "diamond" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Services",
    href: "/services",
    chevron: true,
    children: [
      { label: "Residential Interiors", href: "/residential-interiors" },
      { label: "Luxury Villas", href: "/luxury-villas" },
      { label: "Modular Kitchens", href: "/modular-kitchens" },
      { label: "Commercial Interiors", href: "/commercial-interiors" },
      { label: "Turnkey Projects", href: "/turnkey-projects" },
    ],
  },
  {
    label: "More",
    href: "/design-process",
    chevron: true,
    children: [
      { label: "Design Process", href: "/design-process" },
      { label: "Materials & Finishes", href: "/materials-finishes" },
      { label: "Videos", href: "/inspiration/videos" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function isActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  const paths = [item.href, ...(item.children?.map((c) => c.href.split("?")[0]) ?? [])];
  return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

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
                <Link href={item.href} onClick={() => setMobileOpen(false)} className={styles.mobileLink}>
                  {item.label}
                </Link>
                {hasChildren && (
                  <button
                    aria-label="Expand"
                    className={styles.mobileToggle}
                    onClick={() =>
                      setMobileExpanded((s) => ({ ...s, [item.label]: !s[item.label] }))
                    }
                  >
                    {expanded ? "−" : "+"}
                  </button>
                )}
              </div>
              {hasChildren && expanded && (
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
              )}
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
              const hasChildren = !!item.children;
              const active = isActive(item, pathname);
              return (
                <div key={item.label} className={styles.navItem}>
                  <Link href={item.href} className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}>
                    {item.label}
                    {item.chevron && <span className={`ei-icon ${styles.navChevron}`}>expand_more</span>}
                  </Link>
                  {hasChildren && (
                    <div className={styles.dropdown}>
                      {item.children!.map((child) => (
                        <Link key={child.label} href={child.href} className={styles.dropdownLink}>
                          {child.icon && <span className={`ei-icon ${styles.dropdownIcon}`}>{child.icon}</span>}
                          <span className={styles.dropdownLabel}>{child.label}</span>
                          <span className={styles.dropdownArrow} aria-hidden>
                            ›
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Link href="/book-consultation" className={styles.cta}>
              BOOK CONSULTATION
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={styles.hamburger}
            >
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
