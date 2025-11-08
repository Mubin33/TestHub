import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",  
  images: {
    unoptimized: true, // disable next/image optimization for static deploy
  },
};

export default nextConfig;