import { supabase } from '@/lib/supabase'
import { buildSitemap, BASE_URL } from '@/lib/sitemap-xml'

export async function GET() {
  const { data: words } = await supabase
    .from('words')
    .select('category, part_of_speech')

  const categories = new Set<string>()
  const partsOfSpeech = new Set<string>()

  for (const w of words ?? []) {
    if (w.category) categories.add(w.category)
    if (w.part_of_speech) partsOfSpeech.add(w.part_of_speech)
  }

  return buildSitemap([
    { loc: `${BASE_URL}/en/category`, changefreq: 'weekly', priority: 0.8 },
    { loc: `${BASE_URL}/ja/category`, changefreq: 'weekly', priority: 0.8 },
    ...[...categories].flatMap((cat) => [
      { loc: `${BASE_URL}/en/category/category-${cat}`, changefreq: 'weekly', priority: 0.8 },
      { loc: `${BASE_URL}/ja/category/category-${cat}`, changefreq: 'weekly', priority: 0.8 },
    ]),
    ...[...partsOfSpeech].flatMap((pos) => [
      { loc: `${BASE_URL}/en/category/pos-${pos}`, changefreq: 'weekly', priority: 0.7 },
      { loc: `${BASE_URL}/ja/category/pos-${pos}`, changefreq: 'weekly', priority: 0.7 },
    ]),
  ])
}
