/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // catches bugs in development
  reactCompiler: true,   // React compiler optimization

  images: {
    domains: ["upload.wikimedia.org", "sta.codeforces.com"],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
