import { supabase } from './supabase'

export type LanguagePairResult = {
  word: string
  part_of_speech: string | null
  meaning_en: string | null
  meaning_ja: string | null
  example: string | null
}

async function fetchAllMeanings(column: 'meaning_en' | 'meaning_ja'): Promise<string[]> {
  const results: string[] = []
  const pageSize = 1000
  let offset = 0
  while (true) {
    const { data } = await supabase
      .from('meanings')
      .select(column)
      .range(offset, offset + pageSize - 1)
    if (!data || data.length === 0) break
    results.push(...data.map((r: any) => r[column] ?? ''))
    if (data.length < pageSize) break
    offset += pageSize
  }
  return results
}

/** meaning_en の全エントリから個別キーワードを抽出してスラッグ化 */
export async function getAllEnglishSlugs(): Promise<string[]> {
  const rows = await fetchAllMeanings('meaning_en')
  const slugs = new Set<string>()
  for (const val of rows) {
    for (const part of val.split(',')) {
      const slug = part.trim().toLowerCase().replace(/\s+/g, '-')
      if (slug.length > 1) slugs.add(slug)
    }
  }
  return [...slugs]
}

/** meaning_ja の全エントリから個別キーワードを抽出してスラッグ化 */
export async function getAllJapaneseSlugs(): Promise<string[]> {
  const rows = await fetchAllMeanings('meaning_ja')
  const slugs = new Set<string>()
  for (const val of rows) {
    for (const part of val.split(/[、,，]/)) {
      const slug = part.trim()
      if (slug.length > 0) slugs.add(slug)
    }
  }
  return [...slugs]
}

/** 英語スラッグに対応するビサヤ語エントリを取得 */
export async function getResultsByEnglish(slug: string): Promise<LanguagePairResult[]> {
  const keyword = slug.replace(/-/g, ' ')
  const { data } = await supabase
    .from('meanings')
    .select('meaning_en, meaning_ja, example, words(word, part_of_speech)')
    .ilike('meaning_en', `%${keyword}%`)
  return (data ?? []).map((m: any) => ({
    word: m.words.word,
    part_of_speech: m.words.part_of_speech,
    meaning_en: m.meaning_en,
    meaning_ja: m.meaning_ja,
    example: m.example,
  }))
}

/** 日本語キーワードに対応するビサヤ語エントリを取得 */
export async function getResultsByJapanese(keyword: string): Promise<LanguagePairResult[]> {
  const { data } = await supabase
    .from('meanings')
    .select('meaning_en, meaning_ja, example, words(word, part_of_speech)')
    .ilike('meaning_ja', `%${keyword}%`)
  return (data ?? []).map((m: any) => ({
    word: m.words.word,
    part_of_speech: m.words.part_of_speech,
    meaning_en: m.meaning_en,
    meaning_ja: m.meaning_ja,
    example: m.example,
  }))
}
