import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryView, { type GalleryPhoto } from "./GalleryView";

const DESCRIPTION =
  "Explore a curated collection of our finest interiors. Each space tells a story of design, craftsmanship and detail.";

export const metadata: Metadata = {
  title: { absolute: "Gallery - Essence Interior Designers" },
  description: DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://essenceinteriors.co.in/gallery/" },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Gallery - Essence Interior Designers",
    description: DESCRIPTION,
    url: "https://essenceinteriors.co.in/gallery/",
    siteName: "Essence Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Essence Interior Designers",
    description: DESCRIPTION,
  },
};

const DIR = path.join(process.cwd(), "public", "Original Images");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

const META: Record<string, { label: string; room: string }> = {
  "custom-wardrobe-bedroom-interior-hyderabad-01.jpg": { label: "CUSTOM WARDROBE", room: "BEDROOM" },
  "living-storage-living-room-interior-hyderabad-02.jpg": { label: "LIVING STORAGE", room: "LIVING ROOM" },
  "modern-kitchen-kitchen-interior-hyderabad-03.jpg": { label: "MODERN KITCHEN", room: "KITCHEN" },
  "tv-unit-living-room-interior-hyderabad-04.jpg": { label: "TV UNIT", room: "LIVING ROOM" },
  "modular-kitchen-kitchen-interior-hyderabad-05.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "modular-kitchen-kitchen-interior-hyderabad-06.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "kids-bedroom-bedroom-interior-hyderabad-07.jpg": { label: "KIDS BEDROOM", room: "BEDROOM" },
  "wall-finish-living-room-interior-hyderabad-08.jpg": { label: "WALL FINISH", room: "LIVING ROOM" },
  "living-hall-living-room-interior-hyderabad-09.jpg": { label: "LIVING HALL", room: "LIVING ROOM" },
  "bathroom-vanity-bathroom-interior-hyderabad-10.jpg": { label: "BATHROOM VANITY", room: "BATHROOM" },
  "study-nook-office-spaces-interior-hyderabad-11.jpg": { label: "STUDY NOOK", room: "OFFICE SPACES" },
  "modular-kitchen-kitchen-interior-hyderabad-12.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "modular-kitchen-kitchen-interior-hyderabad-13.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "kids-wardrobe-bedroom-interior-hyderabad-14.jpg": { label: "KIDS WARDROBE", room: "BEDROOM" },
  "modern-kitchen-kitchen-interior-hyderabad-15.jpg": { label: "MODERN KITCHEN", room: "KITCHEN" },
  "bedroom-wardrobe-bedroom-interior-hyderabad-16.jpg": { label: "BEDROOM WARDROBE", room: "BEDROOM" },
  "wardrobe-dressing-bedroom-interior-hyderabad-17.jpg": { label: "WARDROBE & DRESSING", room: "BEDROOM" },
  "apartment-hall-living-room-interior-hyderabad-18.jpg": { label: "APARTMENT HALL", room: "LIVING ROOM" },
  "modular-kitchen-kitchen-interior-hyderabad-19.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "master-bedroom-bedroom-interior-hyderabad-20.jpg": { label: "MASTER BEDROOM", room: "BEDROOM" },
  "bedroom-wardrobe-bedroom-interior-hyderabad-21.jpg": { label: "BEDROOM WARDROBE", room: "BEDROOM" },
  "modular-kitchen-kitchen-interior-hyderabad-22.jpg": { label: "MODULAR KITCHEN", room: "KITCHEN" },
  "living-space-living-room-interior-hyderabad-23.jpg": { label: "LIVING SPACE", room: "LIVING ROOM" },
  "master-bedroom-bedroom-interior-hyderabad-24.jpg": { label: "MASTER BEDROOM", room: "BEDROOM" },
  "living-unit-living-room-interior-hyderabad-25.jpg": { label: "LIVING UNIT", room: "LIVING ROOM" },
  "living-space-living-room-interior-hyderabad-26.jpg": { label: "LIVING SPACE", room: "LIVING ROOM" },
  "open-living-living-room-interior-hyderabad-27.jpg": { label: "OPEN LIVING", room: "LIVING ROOM" },
  "modern-kitchen-kitchen-interior-hyderabad-28.jpg": { label: "MODERN KITCHEN", room: "KITCHEN" },
  "master-bedroom-bedroom-interior-hyderabad-29.jpg": { label: "MASTER BEDROOM", room: "BEDROOM" },
  "bedroom-wardrobe-bedroom-interior-hyderabad-30.jpg": { label: "BEDROOM WARDROBE", room: "BEDROOM" },
};

function jpegSize(buf: Buffer): { width: number; height: number } | null {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let o = 2;
  while (o < buf.length) {
    if (buf[o] !== 0xff) return null;
    while (buf[o] === 0xff) o++;
    const marker = buf[o++];
    if (marker === 0xda || marker === 0xd9) return null;
    if (marker >= 0xd0 && marker <= 0xd7) continue;
    const len = buf.readUInt16BE(o);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return { height: buf.readUInt16BE(o + 3), width: buf.readUInt16BE(o + 5) };
    }
    o += len;
  }
  return null;
}

async function loadPhotos(): Promise<GalleryPhoto[]> {
  const files = (await readdir(DIR)).filter((f) => IMAGE_EXT.test(f)).sort();
  const photos: GalleryPhoto[] = [];
  for (const [i, file] of files.entries()) {
    const buf = await readFile(path.join(DIR, file));
    const size = jpegSize(buf) ?? { width: 1200, height: 900 };
    const meta = META[file] ?? { label: "RESIDENTIAL", room: "RESIDENTIAL" };
    photos.push({
      src: `/Original Images/${file}`,
      width: size.width,
      height: size.height,
      alt: `Essence Interiors ${meta.label.toLowerCase()}, photo ${i + 1}`,
      label: meta.label,
      room: meta.room,
    });
  }
  return photos;
}

export default async function GalleryPage() {
  const photos = await loadPhotos();

  return (
    <div>
      <GalleryView photos={photos} />
      <Footer />
    </div>
  );
}
