"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ProjectDetail } from "@/lib/projects";
import styles from "./ProjectsFilterGrid.module.css";

const FILTERS = ["All Projects", "Residential", "Villa", "Apartment", "Commercial", "Office Spaces", "Hospitality"];

export default function ProjectsFilterGrid({
  projects,
  initialCat = "All Projects",
}: {
  projects: ProjectDetail[];
  initialCat?: string;
}) {
  const start = FILTERS.includes(initialCat) ? initialCat : "All Projects";
  const [active, setActive] = useState(start);

  useEffect(() => {
    setActive(FILTERS.includes(initialCat) ? initialCat : "All Projects");
  }, [initialCat]);

  const filtered = active === "All Projects" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div id="grid" className={styles.filterBar}>
        <div className={styles.filters}>
          {FILTERS.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`${styles.filterBtn} ${active === label ? styles.filterBtnActive : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className={styles.filterLabel}>
          <span className="ei-icon" style={{ fontSize: 16 }}>
            tune
          </span>{" "}
          FILTER
        </span>
      </div>

      <div className={styles.grid}>
        {filtered.map((proj) => (
          <Link key={proj.slug} href={`/projects/${proj.slug}`} className={styles.card}>
            <div className={styles.cardImgWrap}>
              <div className={styles.cardImg} />
            </div>
            <h3 className={styles.cardTitle}>{proj.name}</h3>
            <p className={styles.cardMeta}>
              <span className="ei-icon">location_on</span>
              {proj.location} &nbsp;|&nbsp; {proj.area}
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.cardCategory}>{proj.category}</span>
              <span className={styles.cardArrow}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
