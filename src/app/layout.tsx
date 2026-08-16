import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Header from "@/components/Header";
import SideRail from "@/components/SideRail";
import SplashScreen from "@/components/SplashScreen";
import { LOCAL_BUSINESS_JSON_LD, SITE_DESCRIPTION } from "@/lib/seo";
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
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Essence Interiors",
    images: [
      {
        url: "/images/luxury-interior-design-hyderabad-01.jpg",
        width: 1200,
        height: 800,
        alt: "Essence Interiors Hyderabad",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }} />
        <SplashScreen />
        <Header />
        {children}
        <SideRail />
      </body>
    </html>
  );
}
