import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { VideoCards } from "@/components/YouTubeShowcase";
import { fetchChannelVideos } from "@/lib/videos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Design Stories | Essence Interiors",
  description:
    "Watch Essence Interiors videos — real spaces, expert insights and behind-the-scenes moments from our design journey.",
};

export default async function VideosPage() {
  const videos = await fetchChannelVideos().catch(() => []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/">HOME</Link> / <span className={styles.current}>VIDEOS</span>
        </div>
        <p className={styles.eyebrow}>YouTube Showcase</p>
        <h1 className={styles.title}>
          Design Stories.
          <br />
          Spaces Brought to Life.
        </h1>
        <p className={styles.lede}>
          Watch our latest videos and get inspired by real spaces, expert insights and behind-the-scenes moments
          from our design journey.
        </p>
        <a
          href="https://www.youtube.com/@EssenceInteriors-hyd"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channel}
        >
          Open YouTube channel →
        </a>
      </section>
      <div className={styles.gridWrap}>
        <VideoCards videos={videos} />
      </div>
      <Footer hideShowcase />
    </div>
  );
}
