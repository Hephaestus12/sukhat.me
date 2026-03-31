import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/permit-turbo",
        destination: "https://permit-turbo.vercel.app/",
      },
      {
        source: "/permit-turbo/:path*",
        destination: "https://permit-turbo.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
