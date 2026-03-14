import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Pagination from '@/components/Pagination'

const PER_PAGE = 50

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}

export default async function DictionaryPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { page: pageParam } = await searchParams
  const t = await getTranslations('words')

  const page = Math.max(1, parseInt(pageParam ?? '1', 10))
  const from = (page - 1) * PER_PAGE
  const to = from + PER_PAGE - 1

  const isJa = locale === 'ja'

  const { data: words, error, count } = await supabase
    .from('words')
    .select('*', { count: 'exact' })
    .order('word', { ascending: true })
    .range(from, to)

  if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>

  const wordIds = (words ?? []).map((w) => w.id)
  const { data: meanings } = wordIds.length > 0
    ? await supabase
        .from('meanings')
        .select('word_id, meaning_en, meaning_ja')
        .in('word_id', wordIds)
    : { data: [] }

  const meaningMap = new Map<number, { meaning_en: string | null; meaning_ja: string | null }>()
  for (const m of meanings ?? []) {
    if (!meaningMap.has(m.word_id)) meaningMap.set(m.word_id, m)
  }

  const totalPages = Math.ceil((count ?? 0) / PER_PAGE)

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <span className="text-sm text-gray-400">{count} words</span>
      </div>

      {/* A-Z navigation */}
      <div className="flex flex-wrap gap-1 mb-6">
        {alphabet.map((letter) => (
          <Link
            key={letter}
            href={`/${locale}/dictionary/${letter}`}
            className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-purple-50 uppercase transition-colors"
            style={{ color: '#512376' }}
          >
            {letter}
          </Link>
        ))}
      </div>

      <ul className="divide-y divide-gray-200">
        {words?.map((word: any) => {
          const m = meaningMap.get(word.id)
          const meaning = isJa ? m?.meaning_ja : m?.meaning_en
          return (
            <li key={word.id}>
              <Link
                href={`/${locale}/dictionary/${word.word}`}
                className="flex items-center justify-between py-3 hover:bg-purple-50 px-2 rounded transition-colors gap-4"
              >
                <span className="font-medium text-lg shrink-0">{word.word}</span>
                <span className="text-sm text-gray-400 text-right truncate">{meaning ?? word.part_of_speech}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath={`/${locale}/dictionary`}
      />
    </main>
  )
}
