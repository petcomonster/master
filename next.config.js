/** @type {import('next').NextConfig} */
const nextConfig = {
    
reactStrictMode: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  sentry: {
    hideSourceMaps: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
  },

eslint: {
    ignoreDuringBuilds: true,
},
}
trailingSlash: true,
module.exports = nextConfig
