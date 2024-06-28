/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    SERVER_URI: process.env.SERVER_URI
  }
}

export default nextConfig
