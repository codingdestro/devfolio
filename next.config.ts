import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["streak-stats.demolab.com", "img.shields.io"],
  },
};

export default nextConfig;
