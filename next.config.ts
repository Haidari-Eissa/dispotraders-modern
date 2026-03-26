import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
