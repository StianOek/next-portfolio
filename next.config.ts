import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.microlink.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'microlink-cdn.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
