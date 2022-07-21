/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  env: {
    INFURA_ID: process.env.INFURA_ID,
    NFT_PUBLIC_ADDRESS: process.env.NFT_PUBLIC_ADDRESS,
    TKN_PUBLIC_ADDRESS: process.env.TKN_PUBLIC_ADDRESS,
    STK_PUBLIC_ADDRESS: process.env.STK_PUBLIC_ADDRESS,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
