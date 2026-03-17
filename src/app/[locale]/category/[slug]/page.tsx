import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import { Word } from '@/lib/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WORD_CATEGORY_GROUPS } from '@/lib/word-categories'
import BackButton from '@/components/BackButton'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const { data: words } = await supabase.from('words').select('category, part_of_speech')

  const slugs = new Set<string>()
  for (const w of words ?? []) {
    if (w.category) slugs.add(`category-${w.category}`)
    if (w.part_of_speech) slugs.add(`pos-${w.part_of_speech}`)
  }

  return [...slugs].flatMap((slug) => [
    { locale: 'en', slug },
    { locale: 'ja', slug },
  ])
}

export default async function CategorySlugPage({ params }: Props) {
  const { locale, slug } = await params
  const t = await getTranslations('category')

  const isPos = slug.startsWith('pos-')
  const value = slug.replace(/^(category-|pos-)/, '')

  const query = supabase.from('words').select('*').order('word')
  const { data: words } = isPos
    ? await query.eq('part_of_speech', value)
    : await query.eq('category', value)

  if (!words || words.length === 0) notFound()

  const wordIds = words.map((w: Word) => w.id)
  const { data: meanings } = await supabase
    .from('meanings')
    .select('word_id, meaning_en, meaning_ja')
    .in('word_id', wordIds)

  const isJa = locale === 'ja'

  const meaningMap = new Map<number, string>()
  for (const m of meanings ?? []) {
    if (!meaningMap.has(m.word_id)) {
      const text = isJa ? (m.meaning_ja || m.meaning_en) : m.meaning_en
      if (text) meaningMap.set(m.word_id, text)
    }
  }
  const subCat = !isPos
    ? WORD_CATEGORY_GROUPS.flatMap(g => g.subCategories).find(s => s.key === value)
    : null
  const label = subCat
    ? (isJa ? subCat.ja : subCat.en)
    : value.replace(/_/g, ' ')

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      <div className="mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {isPos ? 'Part of speech' : 'Category'}
        </p>
        <h1 className="text-3xl font-bold capitalize">{label}</h1>
        <p className="text-sm text-gray-400 mt-1">{t('words', { count: words.length })}</p>
      </div>

      <ul className="divide-y divide-gray-200">
        {words.map((word: Word) => (
          <li key={word.id}>
            <Link
              href={`/${locale}/word/${word.word}`}
              className="flex flex-col py-3 hover:bg-purple-50 px-2 rounded transition-colors gap-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-lg">{word.word}</span>
                {word.part_of_speech && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{word.part_of_speech}</span>
                )}
              </div>
              {meaningMap.get(word.id) && (
                <span className="text-sm text-gray-400 truncate">{meaningMap.get(word.id)}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
