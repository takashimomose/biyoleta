import { getAllEnglishSlugs, getAllJapaneseSlugs, getResultsByEnglish, getResultsByJapanese } from '@/lib/language-pair'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const [enSlugs, jaSlugs] = await Promise.all([getAllEnglishSlugs(), getAllJapaneseSlugs()])
  return [
    // EN: /how-to-say/love-in-bisaya
    ...enSlugs.map((word) => ({ locale: 'en', word: `${word}-in-bisaya` })),
    // JA: /how-to-say/愛
    ...jaSlugs.map((word) => ({ locale: 'ja', word })),
  ]
}

export async function generateMetadata({ params }: Props) {
  const { locale, word: slug } = await params
  const isJa = locale === 'ja'
  const label = isJa ? slug : slug.replace(/-in-bisaya$/, '').replace(/-/g, ' ')

  if (isJa) {
    return {
      title: `ビサヤ語で「${label}」の言い方`,
      description: `ビサヤ語（セブアノ語）で「${label}」はどう言う？発音・意味・例文つき。`,
      openGraph: { title: `ビサヤ語で「${label}」の言い方` },
    }
  }
  return {
    title: `How to say "${label}" in Bisaya`,
    description: `How to say "${label}" in Bisaya (Cebuano) — pronunciation, meaning, and example sentences.`,
    openGraph: { title: `How to say "${label}" in Bisaya` },
  }
}

export default async function HowToSayPage({ params }: Props) {
  const { locale, word: slug } = await params
  const t = await getTranslations('howToSay')
  const isJa = locale === 'ja'

  // EN slugs have "-in-bisaya" suffix; strip it to get the keyword
  const keyword = isJa ? slug : slug.replace(/-in-bisaya$/, '')
  const label = isJa ? keyword : keyword.replace(/-/g, ' ')

  const results = isJa
    ? await getResultsByJapanese(keyword)
    : await getResultsByEnglish(keyword)

  if (results.length === 0) notFound()

  const answerText = results
    .map((r) => `${r.word} (${isJa ? r.meaning_ja : r.meaning_en})`)
    .join(', ')

  const canonicalSlug = isJa ? slug : `${keyword}-in-bisaya`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: isJa
        ? `ビサヤ語で「${label}」はどう言いますか？`
        : `How do you say "${label}" in Bisaya?`,
      answerCount: results.length,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText,
        url: `https://biyoleta.com/${locale}/how-to-say/${canonicalSlug}`,
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
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>

      <h1 className="text-3xl font-bold mb-1">{t('heading', { word: label })}</h1>
      <p className="text-gray-400 text-sm mb-8">Bisaya (Cebuano)</p>

      <p className="text-gray-600 mb-6">{t('answer', { word: label })}</p>

      <div className="space-y-4 mb-10">
        {results.map((r, i) => (
          <div key={i} className="border-2 border-gray-100 rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-5xl font-bold tracking-wide">{r.word}</p>
              <Link
                href={`/${locale}/dictionary/${r.word}`}
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
              {r.meaning_en && (
                <p className="text-gray-700">
                  <span className="text-xs text-gray-400 mr-2">EN</span>{r.meaning_en}
                </p>
              )}
              {r.meaning_ja && (
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

      {/* Internal links for SEO */}
      <div className="border-t border-gray-100 pt-6">
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">{t('alsoSee')}</p>
        <div className="flex flex-wrap gap-2">
          {locale === 'en' && (
            <Link
              href={`/in-bisaya/${keyword}`}
              className="text-sm text-gray-500 hover:opacity-70 border border-gray-200 rounded-full px-3 py-1"
            >
              {label} in Bisaya
            </Link>
          )}
          {results.map((r, i) => (
            <Link
              key={i}
              href={`/${locale}/dictionary/${r.word}`}
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
