/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-2.tstatic.net", "img.celebrities.id"],
  },
};

module.exports = nextConfig;
