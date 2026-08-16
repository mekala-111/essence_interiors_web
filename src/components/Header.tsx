"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import AppLink from "./AppLink";
import { NAV_ITEMS, headerOffset, scrollToId } from "@/lib/nav";
import styles from "./Header.module.css";

export default function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const [scrolledState, setScrolledState] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

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

  useEffect(() => {
    if (pathname !== "/") return;
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      scrollToId(id);
    };
    const t = window.setTimeout(applyHash, 200);
    window.addEventListener("hashchange", applyHash);
    window.addEventListener("popstate", applyHash);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", applyHash);
      window.removeEventListener("popstate", applyHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = NAV_ITEMS.map((i) => i.id).filter(Boolean) as string[];

    const spy = () => {
      const line = window.scrollY + headerOffset() + 24;
      let current = ids[0] ?? "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }
      setActiveId(current);
    };

    spy();
    window.addEventListener("scroll", spy, { passive: true });
    return () => window.removeEventListener("scroll", spy);
  }, [pathname]);

  const scrolled = scrolledState || forceSolid || pathname !== "/";

  function isActive(item: (typeof NAV_ITEMS)[number]) {
    if (item.id) {
      if (pathname === "/") return activeId === item.id;
      return false;
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  }

  const menu = mobileOpen ? (
    <>
      <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      <nav className={styles.mobilePanel} aria-label="Mobile menu">
        <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={styles.mobileClose}>
          &times;
        </button>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className={styles.mobileItem}>
            <div className={styles.mobileItemRow}>
              <AppLink
                href={item.href}
                onNavigate={() => setMobileOpen(false)}
                className={`${styles.mobileLink} ${isActive(item) ? styles.mobileLinkActive : ""}`}
              >
                {item.label}
              </AppLink>
            </div>
          </div>
        ))}
        <AppLink href="/book-consultation" onNavigate={() => setMobileOpen(false)} className={styles.mobileCta}>
          BOOK CONSULTATION
        </AppLink>
      </nav>
    </>
  ) : null;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerSolid : ""}`}>
        <div className={styles.bar}>
          <AppLink href="/#home" className={styles.logoLink}>
            <div className={scrolled ? styles.logoPlate : styles.logoBare}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/essence-interiors-hyderabad-logo.png" alt="Essence Interiors" className={styles.logo} />
            </div>
          </AppLink>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className={styles.navItem}>
                <AppLink href={item.href} className={`${styles.navLink} ${isActive(item) ? styles.navLinkActive : ""}`}>
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
