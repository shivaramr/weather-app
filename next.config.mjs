/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['shivaramr.github.io'],
  },
  staticPageGenerationTimeout: 10000,
};

export default nextConfig;
