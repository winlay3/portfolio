import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc", // Add this line to allow images from i.postimg.cc
      },
    ],
  },
};

export default nextConfig;
