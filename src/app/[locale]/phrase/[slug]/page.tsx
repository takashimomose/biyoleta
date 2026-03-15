import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PHRASE_CATEGORIES } from '@/lib/phrase-categories'

type Props = { params: Promise<{ locale: string; slug: string }> }

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

export default async function PhraseSlugPage({ params }: Props) {
  const { locale, slug } = await params
  const t = await getTranslations('phrases')
  const isJa = locale === 'ja'

  const cat = PHRASE_CATEGORIES.find((c) => c.key === slug)
  if (!cat) notFound()

  const phrases: Phrase[] = []
  const PAGE_SIZE = 1000
  let page = 0
  while (true) {
    const { data, error } = await supabase
      .from('phrases')
      .select('*')
      .eq('category', slug)
      .order('id', { ascending: true })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)
    if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>
    if (!data || data.length === 0) break
    phrases.push(...data)
    if (data.length < PAGE_SIZE) break
    page++
  }

  const label = isJa ? cat.ja : cat.en

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}/phrase`} className="text-sm text-gray-500 hover:opacity-70">{t('backToCategories')}</Link>
      </div>

      <div className="mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Phrases</p>
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-sm text-gray-400 mt-1">{t('phraseCount', { count: phrases?.length ?? 0 })}</p>
      </div>

      {(!phrases || phrases.length === 0) ? (
        <p className="text-gray-400 text-sm">{t('noPhrasesYet')}</p>
      ) : (
        <ul className="space-y-4">
          {phrases.map((phrase: Phrase) => (
            <li key={phrase.id} className="border border-gray-200 rounded-xl p-5">
              <p className="text-xl font-semibold mb-1">{phrase.phrase}</p>
              {phrase.meaning_en && (
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
    </main>
  )
}
