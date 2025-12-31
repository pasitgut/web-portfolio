import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos"],
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/179317890?v=4"),
    ],
  },
};

export default nextConfig;
