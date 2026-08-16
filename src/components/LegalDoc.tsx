import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./LegalDoc.module.css";

export default function LegalDoc({
  title,
  crumb,
  children,
}: {
  title: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.page}>
      <article className={styles.wrap}>
        <p className={styles.breadcrumb}>
          <Link href="/">HOME</Link> / <span className={styles.current}>{crumb}</span>
        </p>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.divider} />
        <p className={styles.updated}>Last updated: 15 August 2026</p>
        <div className={styles.body}>{children}</div>
      </article>
      <Footer />
    </div>
  );
}
