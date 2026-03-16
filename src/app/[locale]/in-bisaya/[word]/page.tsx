import { getAllEnglishSlugs, getResultsByEnglish } from '@/lib/language-pair'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 86400

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const slugs = await getAllEnglishSlugs()
  return slugs.map((word) => ({ locale: 'en', word }))
}

export async function generateMetadata({ params }: Props) {
  const { word } = await params
  const label = word.replace(/-/g, ' ')
  return {
    title: `${label} in Bisaya`,
    description: `How to say "${label}" in Bisaya (Cebuano). Translation, meaning, and example sentences.`,
    openGraph: {
      title: `${label} in Bisaya`,
      description: `How to say "${label}" in Bisaya (Cebuano).`,
    },
  }
}

export default async function InBisayaPage({ params }: Props) {
  const { locale, word: slug } = await params
  const t = await getTranslations('languagePair')
  const label = slug.replace(/-/g, ' ')

  const results = await getResultsByEnglish(slug)
  if (results.length === 0) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    name: `${label} in Bisaya`,
    description: `How to say "${label}" in Bisaya (Cebuano)`,
    mainEntity: {
      '@type': 'Question',
      name: `How do you say "${label}" in Bisaya?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: results.map((r) => `${r.word} (${r.meaning_en})`).join(', '),
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

      <h1 className="text-3xl font-bold mb-2 capitalize">{t('heading', { word: label })}</h1>
      <p className="text-gray-500 text-sm mb-8">Bisaya (Cebuano) translation</p>

      <div className="space-y-4">
        {results.map((r, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-3xl font-bold">{r.word}</p>
                {r.part_of_speech && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded mt-1 inline-block">
                    {r.part_of_speech}
                  </span>
                )}
              </div>
              <Link
                href={`/${locale}/word/${r.word}`}
                className="text-sm text-gray-500 hover:opacity-70 whitespace-nowrap mt-1"
              >
                {t('seeMore')}
              </Link>
            </div>
            {r.meaning_en && (
              <p className="text-gray-700 mb-1">
                <span className="text-xs text-gray-400 mr-2">EN</span>{r.meaning_en}
              </p>
            )}
            {r.meaning_ja && (
              <p className="text-gray-700 mb-1">
                <span className="text-xs text-gray-400 mr-2">JA</span>{r.meaning_ja}
              </p>
            )}
            {r.example && (
              <div className="mt-3 pl-3 border-l-2 border-gray-200">
                <p className="text-xs text-gray-400 mb-1">{t('example')}</p>
                <p className="text-gray-700 italic text-sm">{r.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
