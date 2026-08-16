import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Header from "@/components/Header";
import SideRail from "@/components/SideRail";
import SplashScreen from "@/components/SplashScreen";
import { LOCAL_BUSINESS_JSON_LD, SITE_DESCRIPTION, ORGANIZATION_JSON_LD, KEYWORDS, SITE } from "@/lib/seo";
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
    default: "Best Interior Designers in Hyderabad | Essence Interiors",
    template: "%s | Essence Interiors - Interior Design Hyderabad",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  alternates: {
    canonical: SITE,
  },
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
  openGraph: {
    type: "website",
    url: SITE,
    title: "Best Interior Designers in Hyderabad | Essence Interiors",
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    siteName: "Essence Interiors - Interior Design Hyderabad",
    images: [
      {
        url: "/images/luxury-interior-design-hyderabad-01.jpg",
        width: 1200,
        height: 800,
        alt: "Essence Interiors - Best Interior Designers in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers in Hyderabad | Essence Interiors",
    description: SITE_DESCRIPTION,
    images: ["/images/luxury-interior-design-hyderabad-01.jpg"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        {/* Material Symbols Font */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org Structured Data for Search Engines */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }} />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <SplashScreen />
        <Header />
        {children}
        <SideRail />
      </body>
    </html>
  );
}
