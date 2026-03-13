import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  return buildSitemap([
    { loc: `${BASE_URL}/en`,            changefreq: 'weekly',  priority: 1.0 },
    { loc: `${BASE_URL}/ja`,            changefreq: 'weekly',  priority: 1.0 },
    { loc: `${BASE_URL}/en/words`,      changefreq: 'weekly',  priority: 0.9 },
    { loc: `${BASE_URL}/ja/words`,      changefreq: 'weekly',  priority: 0.9 },
    { loc: `${BASE_URL}/en/phrases`,    changefreq: 'weekly',  priority: 0.8 },
    { loc: `${BASE_URL}/ja/phrases`,    changefreq: 'weekly',  priority: 0.8 },
    { loc: `${BASE_URL}/en/translate`,  changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/ja/translate`,  changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/en/categories`, changefreq: 'weekly',  priority: 0.7 },
    { loc: `${BASE_URL}/ja/categories`, changefreq: 'weekly',  priority: 0.7 },
  ])
}
