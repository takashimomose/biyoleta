import { supabase } from '@/lib/supabase'
import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  const { data: phrases } = await supabase
    .from('phrases')
    .select('id')

  return buildSitemap([
    { loc: `${BASE_URL}/en/phrases`, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/ja/phrases`, changefreq: 'weekly', priority: 0.8 },
    ...(phrases ?? []).flatMap((p) => [
      { loc: `${BASE_URL}/en/phrases/${p.id}`, changefreq: 'monthly', priority: 0.7 },
      { loc: `${BASE_URL}/ja/phrases/${p.id}`, changefreq: 'monthly', priority: 0.7 },
    ]),
  ])
}
