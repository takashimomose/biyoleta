import { supabase } from './supabase'

export type LanguagePairResult = {
  word: string
  part_of_speech: string | null
  meaning_en: string | null
  meaning_ja: string | null
  example: string | null
}

/** meaning_en の全エントリから個別キーワードを抽出してスラッグ化 */
export async function getAllEnglishSlugs(): Promise<string[]> {
  const { data } = await supabase.from('meanings').select('meaning_en').limit(50000)
  const slugs = new Set<string>()
  for (const row of data ?? []) {
    for (const part of (row.meaning_en ?? '').split(',')) {
      const slug = part.trim().toLowerCase().replace(/\s+/g, '-')
      if (slug.length > 1) slugs.add(slug)
    }
  }
  return [...slugs]
}

/** meaning_ja の全エントリから個別キーワードを抽出してスラッグ化 */
export async function getAllJapaneseSlugs(): Promise<string[]> {
  const { data } = await supabase.from('meanings').select('meaning_ja').limit(50000)
  const slugs = new Set<string>()
  for (const row of data ?? []) {
    for (const part of (row.meaning_ja ?? '').split(/[、,，]/)) {
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
