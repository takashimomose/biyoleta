import { supabase } from '@/lib/supabase'
import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  const { data: phrases } = await supabase
    .from('phrases')
    .select('id')

  return buildSitemap([
    { loc: `${BASE_URL}/en/phrase`, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/ja/phrase`, changefreq: 'weekly', priority: 0.8 },
    ...(phrases ?? []).flatMap((p) => [
      { loc: `${BASE_URL}/en/phrase/${p.id}`, changefreq: 'monthly', priority: 0.7 },
      { loc: `${BASE_URL}/ja/phrase/${p.id}`, changefreq: 'monthly', priority: 0.7 },
    ]),
  ])
}
