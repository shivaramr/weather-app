/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['shivaramr.github.io/'],
  },
  experimental: {
  appDir: false,
  externalDir: true | {
        enabled: true,
        silent: true,
   },
},
  disableExperimentalFeaturesWarning: true,
};

export default nextConfig;
