import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import Header from "@/components/Header";
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
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <SplashScreen />
        <Header />
        {children}
        <SideRail />
      </body>
    </html>
  );
}
