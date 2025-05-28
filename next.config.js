/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'obscure-spoon-69p9w5qwvq6q25r74-3000.app.github.dev'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig