import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/permit-turbo/:path*",
        destination: "https://permit-turbo.vercel.app/permit-turbo/:path*",
      },
    ];
  },
};

export default nextConfig;
