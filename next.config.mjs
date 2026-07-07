/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static export → deploys to Cloudflare Pages (or any static host) with no server.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
