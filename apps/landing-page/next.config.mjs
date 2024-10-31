/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
