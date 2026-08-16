import type { NextConfig } from "next";

const API_URL = process.env.API_URL || "http://localhost:4000";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/Our_Portfolio.pdf", destination: "/Essence_Interiors_Portfolio.pdf", permanent: true },
      { source: "/Our portfolio.pdf", destination: "/Essence_Interiors_Portfolio.pdf", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/uploads/:path*", destination: `${API_URL}/uploads/:path*` }];
  },
};

export default nextConfig;
