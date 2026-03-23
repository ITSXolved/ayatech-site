import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/apply',
        destination: 'https://erp.ayatech.org/apply',
        permanent: false, // Use false in case we change it back
      },
    ];
  },
};

export default nextConfig;
