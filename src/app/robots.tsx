import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/orcamento/'],
      disallow: '',
    },
    sitemap: 'https://hmsis.com.br/sitemap.xml.tsx',
  }
}
