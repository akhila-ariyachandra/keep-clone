/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ["components", "hooks", "lib", "pages"],
  },
};

module.exports = nextConfig;
