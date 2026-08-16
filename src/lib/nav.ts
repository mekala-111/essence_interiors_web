export type NavChild = { label: string; href: string; icon?: string };
export type NavItem = { label: string; href: string; chevron?: boolean; children?: NavChild[] };

export const NAV_ITEMS: NavItem[] = [
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

export function isNavActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  const paths = [item.href, ...(item.children?.map((c) => c.href.split("?")[0]) ?? [])];
  return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function headerOffset() {
  if (typeof window === "undefined") return 88;
  return window.matchMedia("(max-width: 1180px)").matches ? 64 : 88;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function hashFromHref(href: string) {
  const i = href.indexOf("#");
  return i === -1 ? "" : href.slice(i + 1);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const target = el.getBoundingClientRect().top + window.scrollY - headerOffset() - 8;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    window.scrollTo(0, Math.max(0, target));
    return;
  }

  const start = window.scrollY;
  const dist = target - start;
  const duration = Math.min(1100, Math.max(480, Math.abs(dist) * 0.42));
  const t0 = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, start + dist * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function goTo(href: string, push: (url: string) => void) {
  const hash = hashFromHref(href);
  const path = href.split("#")[0] || "/";
  const onHome = window.location.pathname === "/";

  if (hash && (path === "/" || path === "")) {
    if (onHome) {
      window.history.pushState(null, "", `/#${hash}`);
      scrollToId(hash);
      return;
    }
    push(`/#${hash}`);
    return;
  }

  push(href);
}
