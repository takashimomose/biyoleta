import { buildSitemapIndex, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  return buildSitemapIndex([
    `${BASE_URL}/sitemap_pages.xml`,
    `${BASE_URL}/sitemap_words.xml`,
    `${BASE_URL}/sitemap_phrases.xml`,
    `${BASE_URL}/sitemap_categories.xml`,
    `${BASE_URL}/sitemap_langpair.xml`,
    `${BASE_URL}/sitemap_howto.xml`,
  ])
}
