/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
  appDir: true,
  externalDir: true | {
        enabled: true,
        silent: true,
   },
},
  disableExperimentalFeaturesWarning: true,
};

export default nextConfig;
