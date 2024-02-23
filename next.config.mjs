/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['shivaramr.github.io'],
  },
  staticPageGenerationTimeout: 2500,
};

export default nextConfig;
