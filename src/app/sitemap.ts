import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/nav";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/seo";

const EXTRA = [
  "/book-consultation",
  "/privacy-policy",
  "/terms",
  "/residential-interiors",
  "/luxury-villas",
  "/modular-kitchens",
  "/commercial-interiors",
  "/turnkey-projects",
  "/design-process",
  "/materials-finishes",
  "/inspiration/videos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = new Set<string>(["/", ...EXTRA]);
  for (const item of NAV_ITEMS) {
    pages.add(item.href.split("?")[0]);
    for (const child of item.children ?? []) pages.add(child.href.split("?")[0]);
  }
  for (const p of PROJECTS) pages.add(`/projects/${p.slug}`);

  return [...pages].map((path) => ({
    url: path === "/" ? `${SITE}/` : `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
