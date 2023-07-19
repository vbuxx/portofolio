/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, { isServer }) => {
    // if (isServer) {
    //   require("./scripts/generate-sitemap");
    // }

    return config;
  },
};
