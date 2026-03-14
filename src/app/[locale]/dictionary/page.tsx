import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import { Word } from '@/lib/types'
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

  const { data: words, error, count } = await supabase
    .from('words')
    .select('*', { count: 'exact' })
    .order('word', { ascending: true })
    .range(from, to)

  if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>

  const totalPages = Math.ceil((count ?? 0) / PER_PAGE)

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">{t('back')}</Link>
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
            className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-gray-50 uppercase transition-colors"
            style={{ color: '#512376' }}
          >
            {letter}
          </Link>
        ))}
      </div>

      <ul className="divide-y divide-gray-200">
        {words?.map((word: Word) => (
          <li key={word.id}>
            <Link
              href={`/${locale}/dictionary/${word.word}`}
              className="flex items-center justify-between py-3 hover:bg-gray-50 px-2 rounded transition-colors"
            >
              <span className="font-medium text-lg">{word.word}</span>
              <span className="text-sm text-gray-400">{word.part_of_speech}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath={`/${locale}/dictionary`}
      />
    </main>
  )
}
