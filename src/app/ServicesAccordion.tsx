"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ServicesAccordion.module.css";

const SERVICES = [
  {
    title: "Residential Interiors",
    desc: "Essence Interiors excels in residential interior design, crafting personalized spaces that balance comfort and style. From cozy family rooms to serene master suites, they blend timeless elegance with modern functionality. Each design reflects the unique personality and lifestyle of the homeowner, creating havens of relaxation and inspiration. With attention to detail and a focus on quality craftsmanship, Essence Interiors transforms houses into dream homes.",
    href: "/residential-interiors",
  },
  {
    title: "Commercial Interiors",
    desc: "Essence Interiors specializes in commercial interior design, creating dynamic spaces that optimize functionality and aesthetics. From sleek corporate offices to trendy retail stores, they blend innovative concepts with practical solutions. Their designs not only enhance the customer experience but also boost employee productivity. With a focus on branding and ambiance, Essence Interiors transforms commercial environments into vibrant hubs of activity and success.",
    href: "/commercial-interiors",
  },
  {
    title: "Turnkey Projects",
    desc: "We provide the best Turnkey Interior Projects Designers in Hyderabad. Essence Interiors provides one point of contact for interiors and manages the whole interior design project from start to end. Turnkey Interiors contribute to an efficient style statement for homes of all types, sizes, and classes.",
    href: "/turnkey-projects",
  },
  {
    title: "Office Interiors",
    desc: "We have expertise in providing designs for commercial spaces that include shopping mall design, corporate office interior design, warehouse design, stores, retail outlets, and libraries.",
    href: "/commercial-interiors",
  },
  {
    title: "Restaurant Interiors",
    desc: "The visuals of your restaurant are the main impression you will make on a customer. We will carry the concept, as unique as it is, of your menu inside, creating a memorable experience away from home.",
    href: "/commercial-interiors",
  },
];

export default function ServicesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.row}>
      {SERVICES.map((s, i) => {
        const isActive = active === i;
        return (
          <Link
            key={s.title}
            href={s.href}
            className={`${styles.panel} ${isActive ? styles.active : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className={styles.bg} />
            <div className={`${styles.overlay} ${isActive ? styles.active : ""}`} />
            {isActive ? (
              <div className={styles.activeContent}>
                <span className={styles.activeNumber}>0{i + 1}</span>
                <h3 className={styles.activeTitle}>{s.title}</h3>
                <p className={styles.activeDesc}>{s.desc}</p>
                <span className={styles.activeLink}>EXPLORE SERVICE →</span>
              </div>
            ) : (
              <div className={styles.inactiveContent}>
                <span className={styles.inactiveNumber}>0{i + 1}</span>
                <span className={styles.inactiveTitle}>{s.title}</span>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
