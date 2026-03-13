const BASE_URL = 'https://biyoleta.com'

export { BASE_URL }

type UrlEntry = {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
}

export function buildSitemap(entries: UrlEntry[]): Response {
  const urls = entries
    .map((e) => {
      const parts = [`  <url>`, `    <loc>${e.loc}</loc>`]
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod.slice(0, 10)}</lastmod>`)
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`)
      if (e.priority != null) parts.push(`    <priority>${e.priority}</priority>`)
      parts.push(`  </url>`)
      return parts.join('\n')
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

export function buildSitemapIndex(sitemapUrls: string[]): Response {
  const sitemaps = sitemapUrls
    .map((url) => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
