import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PHRASE_CATEGORIES } from '@/lib/phrase-categories'

const PAGE_SIZE = 50

type Props = { params: Promise<{ locale: string; slug: string }>; searchParams: Promise<{ page?: string }> }

type Phrase = {
  id: number
  phrase: string
  meaning_en: string | null
  meaning_ja: string | null
  example: string | null
}

export async function generateStaticParams() {
  return PHRASE_CATEGORIES.flatMap(({ key }) => [
    { locale: 'en', slug: key },
    { locale: 'ja', slug: key },
  ])
}

export default async function PhraseSlugPage({ params, searchParams }: Props) {
  const { locale, slug } = await params
  const { page } = await searchParams
  const t = await getTranslations('phrases')
  const isJa = locale === 'ja'

  const cat = PHRASE_CATEGORIES.find((c) => c.key === slug)
  if (!cat) notFound()

  const currentPage = Math.max(1, parseInt(page ?? '1', 10))
  const offset = (currentPage - 1) * PAGE_SIZE

  const { data: phrases, count, error } = await supabase
    .from('phrases')
    .select('*', { count: 'exact' })
    .eq('category', slug)
    .order('id', { ascending: true })
    .range(offset, offset + PAGE_SIZE - 1)

  if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>

  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)
  const label = isJa ? cat.ja : cat.en
  const pageUrl = (p: number) => `/${locale}/phrase/${slug}?page=${p}`

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}/phrase`} className="text-sm text-gray-500 hover:opacity-70">{t('backToCategories')}</Link>
      </div>

      <div className="mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Phrases</p>
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-sm text-gray-400 mt-1">{t('phraseCount', { count: count ?? 0 })}</p>
      </div>

      {(!phrases || phrases.length === 0) ? (
        <p className="text-gray-400 text-sm">{t('noPhrasesYet')}</p>
      ) : (
        <ul className="space-y-4">
          {phrases.map((phrase: Phrase) => (
            <li key={phrase.id} className="border border-gray-200 rounded-xl p-5">
              <p className="text-xl font-semibold mb-1">{phrase.phrase}</p>
              {!isJa && phrase.meaning_en && (
                <p className="text-gray-600 mb-1">
                  <span className="text-xs text-gray-400 mr-2">EN</span>{phrase.meaning_en}
                </p>
              )}
              {phrase.meaning_ja && (
                <p className="text-gray-600 mb-3">
                  <span className="text-xs text-gray-400 mr-2">JA</span>{phrase.meaning_ja}
                </p>
              )}
              {phrase.example && (
                <div className="pl-3 border-l-2 border-gray-200">
                  <p className="text-xs text-gray-400 mb-1">{t('example')}</p>
                  <p className="text-gray-700 italic text-sm">{phrase.example}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {currentPage > 1 && (
            <Link href={pageUrl(currentPage - 1)} className="btn-page">
              ←
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={pageUrl(p)}
              className={`btn-page ${p === currentPage ? 'btn-page-active' : ''}`}
            >
              {p}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link href={pageUrl(currentPage + 1)} className="btn-page">
              →
            </Link>
          )}
        </div>
      )}
    </main>
  )
}
