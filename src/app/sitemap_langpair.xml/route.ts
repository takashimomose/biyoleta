import { getAllEnglishSlugs, getAllJapaneseSlugs } from '@/lib/language-pair'
import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  const [enSlugs, jaSlugs] = await Promise.all([
    getAllEnglishSlugs(),
    getAllJapaneseSlugs(),
  ])

  return buildSitemap([
    ...enSlugs.map((slug) => ({
      loc: `${BASE_URL}/en/in-bisaya/${slug}`,
      changefreq: 'monthly',
      priority: 0.9,
    })),
    ...jaSlugs.map((slug) => ({
      loc: `${BASE_URL}/ja/bisaya/${encodeURIComponent(slug)}`,
      changefreq: 'monthly',
      priority: 0.9,
    })),
  ])
}
