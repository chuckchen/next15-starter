import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  trailingSlash: false,

  // Enable logging
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
