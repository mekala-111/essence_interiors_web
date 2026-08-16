"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  style,
  ...rest
}: {
  children: ReactNode;
  as?: "div" | "section";
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setRevealed(true);
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error - ref type varies with the polymorphic `as` tag
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        animation: revealed ? "ei-fadeup 0.8s cubic-bezier(0.2,0.7,0.3,1) forwards" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
