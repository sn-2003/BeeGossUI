const basePath = process.env.GITHUB_ACTIONS ? '/BeeGossUI' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

export default nextConfig
