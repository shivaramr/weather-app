/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
