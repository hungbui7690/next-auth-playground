/** @type {import('next').NextConfig} */

// "https://avatars.githubusercontent.com/u/61372312?v=4"
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
