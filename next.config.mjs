/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "necessary-deer-ec3ee1b36c.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "necessary-deer-ec3ee1b36c.media.strapiapp.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338", // Especifica el puerto si es necesario
      },
    ],
  },
};

export default nextConfig;