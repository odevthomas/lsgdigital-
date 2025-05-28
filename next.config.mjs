/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint na build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora erros de TypeScript na build
  },
  images: {
    unoptimized: true, // Desativa a otimização de imagens do Next.js
  },
}

export default nextConfig
