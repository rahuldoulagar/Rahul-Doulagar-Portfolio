import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // This ignores strict type checks during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // This prevents linting errors from stopping the build
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
