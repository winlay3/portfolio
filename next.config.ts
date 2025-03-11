import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.aceternity.com"], // Allow external images from this domain
  },
};

export default nextConfig;
