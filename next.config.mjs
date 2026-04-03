/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true, <-- We are removing this so Vercel can compress your images!
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;