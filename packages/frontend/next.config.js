/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  env: {
    INFURA_ID: process.env.INFURA_ID,
    PUBLIC_ADDRESS: process.env.PUBLIC_ADDRESS,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
