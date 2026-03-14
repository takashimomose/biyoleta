import { supabase } from '@/lib/supabase'
import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  const { data: words } = await supabase
    .from('words')
    .select('word, created_at')
    .order('word')

  return buildSitemap(
    (words ?? []).flatMap((w) => [
      { loc: `${BASE_URL}/en/dictionary/${w.word}`, lastmod: w.created_at, changefreq: 'monthly', priority: 0.8 },
      { loc: `${BASE_URL}/ja/dictionary/${w.word}`, lastmod: w.created_at, changefreq: 'monthly', priority: 0.8 },
    ])
  )
}
