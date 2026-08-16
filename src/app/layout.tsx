import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import SideRail from "@/components/SideRail";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://essenceinteriors.co.in"),
  title: {
    default: "Essence Interior Designers",
    template: "%s | Essence Interiors",
  },
  description:
    "The best Interior Designers in Hyderabad. We provide residential interior designs as well as residential architectural designs. Our projects include luxury",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        {/* Material Symbols is a glyph font, not text — loaded with display=swap to avoid
            preload warnings while still preventing fallback flash. Fonts are auto-optimized by Next.js. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <SplashScreen />
        {children}
        <SideRail />
      </body>
    </html>
  );
}
