import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed redirect to fix Razorpay domain whitelist issues
  // Enrollment form should be served from ayatech.org directly

};

export default nextConfig;
