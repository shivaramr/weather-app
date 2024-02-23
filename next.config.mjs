/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['shivaramr.github.io'],
  },
  staticPageGenerationTimeout: 30000,
};

export default nextConfig;
