import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  return buildSitemap([
    { loc: `${BASE_URL}/en`,                      changefreq: 'weekly',  priority: 1.0 },
    { loc: `${BASE_URL}/ja`,                      changefreq: 'weekly',  priority: 1.0 },
    { loc: `${BASE_URL}/en/dictionary`,           changefreq: 'weekly',  priority: 0.9 },
    { loc: `${BASE_URL}/ja/dictionary`,           changefreq: 'weekly',  priority: 0.9 },
    { loc: `${BASE_URL}/en/phrase`,               changefreq: 'weekly',  priority: 0.8 },
    { loc: `${BASE_URL}/ja/phrase`,               changefreq: 'weekly',  priority: 0.8 },
    { loc: `${BASE_URL}/en/translate`,            changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/ja/translate`,            changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/en/category`,             changefreq: 'weekly',  priority: 0.7 },
    { loc: `${BASE_URL}/ja/category`,             changefreq: 'weekly',  priority: 0.7 },
    { loc: `${BASE_URL}/en/english-to-bisaya`,    changefreq: 'monthly', priority: 0.8 },
    { loc: `${BASE_URL}/ja/english-to-bisaya`,    changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/en/bisaya-to-english`,    changefreq: 'monthly', priority: 0.8 },
    { loc: `${BASE_URL}/ja/bisaya-to-english`,    changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/en/bisaya-to-japanese`,   changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/ja/bisaya-to-japanese`,   changefreq: 'monthly', priority: 0.8 },
    { loc: `${BASE_URL}/en/learn`,                changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/ja/learn`,                changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/en/flashcards`,           changefreq: 'monthly', priority: 0.6 },
    { loc: `${BASE_URL}/ja/flashcards`,           changefreq: 'monthly', priority: 0.6 },
    { loc: `${BASE_URL}/en/quiz`,                 changefreq: 'monthly', priority: 0.7 },
    { loc: `${BASE_URL}/ja/quiz`,                 changefreq: 'monthly', priority: 0.7 },
  ])
}
