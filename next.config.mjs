/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    // domains: ['shivaramr.github.io'],
    unoptimized: true,
  },
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
