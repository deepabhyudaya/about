import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.youtube.com/watch?v=BK7Tw8uZ8Ss',
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
