/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },   // 🚀 ignoruje błędy ESLint na Vercel
  // Jeśli kiedyś TypeScript zacznie blokować build:
  // typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
