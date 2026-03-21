import { getAllEnglishSlugs, getResultsByEnglish } from '@/lib/language-pair'
import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'

export const revalidate = 86400

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const enSlugs = await getAllEnglishSlugs()
  return enSlugs.flatMap((slug) => [
    { locale: 'en', word: slug },
    { locale: 'ja', word: slug },
  ])
}

async function getJaLabel(slug: string): Promise<string> {
  const keyword = slug.replace(/-/g, ' ')
  const kw = keyword.toLowerCase()
  const { data } = await supabase
    .from('meanings')
    .select('meaning_en, meaning_ja')
    .ilike('meaning_en', `%${keyword}%`)
    .not('meaning_ja', 'is', null)

  if (!data || data.length === 0) return keyword

  const rank = (meaning_en: string | null) => {
    if (!meaning_en) return 3
    const parts = meaning_en.toLowerCase().split(',').map(s => s.trim())
    if (parts.includes(kw)) return 0
    if (parts[0].startsWith(kw)) return 1
    return 2
  }

  const best = data.sort((a, b) => rank(a.meaning_en) - rank(b.meaning_en))[0]
  return best.meaning_ja?.split(/[、,，]/)[0].trim() || keyword
}

export async function generateMetadata({ params }: Props) {
  const { locale, word: slug } = await params
  const label = slug.replace(/-/g, ' ')

  if (locale === 'ja') {
    const jaLabel = await getJaLabel(slug)
    return {
      title: `ビサヤ語で「${jaLabel}」の言い方`,
      description: `ビサヤ語（セブアノ語）で「${jaLabel}」はどう言う？発音・意味・例文つき。`,
    }
  }
  return {
    title: `How to say "${label}" in Bisaya`,
    description: `How to say "${label}" in Bisaya (Cebuano) — pronunciation, meaning, and example sentences.`,
  }
}

export default async function HowToSayPage({ params }: Props) {
  const { locale, word: slug } = await params
  const t = await getTranslations('howToSay')
  const isJa = locale === 'ja'

  const label = slug.replace(/-/g, ' ')
  const [results, jaLabel] = await Promise.all([
    getResultsByEnglish(slug),
    isJa ? getJaLabel(slug) : Promise.resolve(label),
  ])

  if (results.length === 0) notFound()

  const displayLabel = isJa ? jaLabel : label

  const answerText = results
    .map((r) => `${r.word} (${isJa ? r.meaning_ja : r.meaning_en})`)
    .join(', ')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: isJa
        ? `ビサヤ語で「${displayLabel}」はどう言いますか？`
        : `How do you say "${displayLabel}" in Bisaya?`,
      answerCount: results.length,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText,
        url: `https://biyoleta.com/${locale}/how-to-say/${slug}`,
      },
    },
  }

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      <h1 className="text-3xl font-bold mb-1">{t('heading', { word: displayLabel })}</h1>
      <p className="text-gray-400 text-sm mb-8">Bisaya (Cebuano)</p>

      <p className="text-gray-600 mb-6">{t('answer', { word: displayLabel })}</p>

      <div className="space-y-4 mb-10">
        {results.map((r, i) => (
          <div key={i} className="border-2 border-gray-100 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-5xl font-bold tracking-wide">{r.word}</p>
              <Link
                href={`/${locale}/word/${r.word}`}
                className="text-sm text-gray-400 hover:opacity-70 whitespace-nowrap mt-2"
              >
                {t('seeMore')}
              </Link>
            </div>

            {r.part_of_speech && (
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded mt-2 mb-4 inline-block">
                {r.part_of_speech}
              </span>
            )}

            <div className="mt-4 space-y-1">
              {!isJa && r.meaning_en && (
                <p className="text-gray-700">
                  <span className="text-xs text-gray-400 mr-2">EN</span>{r.meaning_en}
                </p>
              )}
              {isJa && r.meaning_ja && (
                <p className="text-gray-700">
                  <span className="text-xs text-gray-400 mr-2">JA</span>{r.meaning_ja}
                </p>
              )}
            </div>

            {r.example && (
              <div className="mt-4 pl-3 border-l-2 border-gray-200">
                <p className="text-xs text-gray-400 mb-1">{t('example')}</p>
                <p className="text-gray-700 italic text-sm">{r.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6">
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">{t('alsoSee')}</p>
        <div className="flex flex-wrap gap-2">
          {locale === 'en' && (
            <Link
              href={`/${locale}/english-to-bisaya?q=${encodeURIComponent(label)}`}
              className="text-sm text-gray-500 hover:opacity-70 border border-gray-200 rounded-full px-3 py-1"
            >
              {label} in Bisaya
            </Link>
          )}
          {results.map((r, i) => (
            <Link
              key={i}
              href={`/${locale}/word/${r.word}`}
              className="text-sm text-gray-500 hover:opacity-70 border border-gray-200 rounded-full px-3 py-1"
            >
              {r.word}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
