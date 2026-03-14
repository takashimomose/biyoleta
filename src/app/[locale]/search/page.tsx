import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import { Word } from '@/lib/types'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const t = await getTranslations('search')
  const query = q?.trim() ?? ''

  let words: Word[] = []
  if (query) {
    const { data } = await supabase
      .from('words')
      .select('*')
      .ilike('word', `%${query}%`)
      .order('word')
    words = data ?? []
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>

      <form action={`/${locale}/search`} method="GET" className="mb-8">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder={t('placeholder')}
            autoFocus
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50"
            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
          />
          <button type="submit" className="btn-3d px-5 py-3 w-1/2 sm:w-1/3 mx-auto">
            {t('button')}
          </button>
        </div>
      </form>

      {query && (
        <div>
          <p className="text-sm text-gray-500 mb-4">{t('results', { query, count: words.length })}</p>
          {words.length === 0 ? (
            <p className="text-gray-400">{t('noResults')}</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {words.map((word: Word) => (
                <li key={word.id}>
                  <Link
                    href={`/${locale}/dictionary/${word.word}`}
                    className="flex items-center justify-between py-3 hover:bg-purple-50 px-2 rounded transition-colors"
                  >
                    <span className="font-medium text-lg">{word.word}</span>
                    <span className="text-sm text-gray-400">{word.part_of_speech}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  )
}
