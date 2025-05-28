  import type { MetadataRoute } from 'next'

  export default function manifest(): Metadata {
    return {
      name: 'LSG Digital',
      description: 'LSG Digital Platform',
      manifest: {
        name: 'LSG Digital',
        short_name: 'LSG',
        description: 'LSG Digital Platform',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }
  }