export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeId?: string;
  duration: string;
  views: string;
  publishedAt: string;
};

const CHANNEL_ID = "UCsizAtSsisBgm0EiAxQA00g";
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function tag(xml: string, name: string) {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m?.[1]?.trim() ?? "";
}

function attr(xml: string, name: string, attrName: string) {
  const m = xml.match(new RegExp(`<${name}[^>]*${attrName}="([^"]+)"`));
  return m?.[1] ?? "";
}

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanTitle(raw: string) {
  return decode(raw)
    .normalize("NFKC")
    .replace(/\d{10,}/g, "")
    .replace(/#\w+/g, "")
    .replace(/\s*[|｜]+\s*/g, " · ")
    .replace(/\s+/g, " ")
    .replace(/^[·\s]+|[·\s]+$/g, "")
    .trim();
}

function formatViews(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K views`;
  return `${n} views`;
}

function relativeTime(iso: string) {
  const then = new Date(iso).getTime();
  if (!then) return "";
  const days = Math.max(0, Math.round((Date.now() - then) / 86_400_000));
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 14) return `${days} days ago`;
  if (days < 45) return `${Math.round(days / 7)} weeks ago`;
  if (days < 365) return `${Math.round(days / 30)} months ago`;
  return `${Math.round(days / 365)} years ago`;
}

function parseEntry(entry: string): Video | null {
  const id = tag(entry, "yt:videoId");
  if (!id) return null;
  const link = attr(entry, "link", "href") || tag(entry, "link");
  const isShort = /\/shorts\//.test(link);
  const views = Number(attr(entry, "media:statistics", "views") || "0");
  return {
    id,
    youtubeId: id,
    title: cleanTitle(tag(entry, "title")) || "Essence Interiors",
    thumbnail: attr(entry, "media:thumbnail", "url") || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    youtubeUrl: isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
    duration: isShort ? "SHORT" : "",
    views: formatViews(views),
    publishedAt: relativeTime(tag(entry, "published")),
  };
}

export async function fetchChannelVideos(): Promise<Video[]> {
  const res = await fetch(FEED, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const xml = await res.text();
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  return entries.map(parseEntry).filter((v): v is Video => !!v);
}

export function latestVideos(videos: Video[], count = 5) {
  return videos.slice(0, count);
}

export function youtubeEmbedSrc(video: Video) {
  const id =
    video.youtubeId ||
    video.youtubeUrl.match(/[?&]v=([^&]+)/)?.[1] ||
    video.youtubeUrl.match(/\/shorts\/([^?]+)/)?.[1] ||
    video.youtubeUrl.match(/youtu\.be\/([^?]+)/)?.[1];
  if (id) return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  return video.youtubeUrl;
}
