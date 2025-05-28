/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'next' {
  interface LinkProps {
    children?: React.ReactNode
    className?: string
  }
}

declare module 'next/types' {
  interface Metadata {
    title?: string
    description?: string
    keywords?: string
    metadataBase?: URL
    alternates?: {
      canonical?: string
    }
    openGraph?: {
      title?: string
      description?: string
      url?: string
      siteName?: string
      locale?: string
      type?: string
      images?: Array<{
        url: string
        width: number
        height: number
        alt: string
      }>
    }
    twitter?: {
      card?: string
      title?: string
      description?: string
      images?: string[]
    }
    robots?: {
      index?: boolean
      follow?: boolean
      googleBot?: {
        index?: boolean
        follow?: boolean
        'max-video-preview'?: number
        'max-image-preview'?: string
        'max-snippet'?: number
      }
    }
    verification?: {
      google?: string
    }
    generator?: string
  }
}