import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://traff.co/L6piS2BM',
        permanent: true,
      },
    ]
  },

  /* config options here */
  images: {
    domains: ['assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
