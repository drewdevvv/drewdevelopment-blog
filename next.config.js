/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for static export
  trailingSlash: true,
  // Base path if needed for subdomain deployment
  // basePath: '',
}

module.exports = nextConfig
