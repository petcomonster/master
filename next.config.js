/** @type {import('next').NextConfig} */
const nextConfig = {
    
reactStrictMode: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
    sentry: { hideSourceMaps: true },

eslint: {
    ignoreDuringBuilds: true,
},
}
trailingSlash: true,
module.exports = nextConfig
