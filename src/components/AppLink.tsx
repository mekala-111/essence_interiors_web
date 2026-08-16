"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { goTo } from "@/lib/nav";

export default function AppLink({
  href,
  className,
  style,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const router = useRouter();

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate?.();
    goTo(href, (url) => router.push(url));
  }

  return (
    <a href={href} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  );
}
