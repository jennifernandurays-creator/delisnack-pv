import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import settings from '@/data/settings'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: settings.metaTitle },
      { name: 'description', content: settings.metaDescription },
      { name: 'theme-color', content: '#e2536b' },
      { property: 'og:title', content: settings.metaTitle },
      { property: 'og:description', content: settings.metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/images/products/mini-donas.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'alternate icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
