import { getAllJapaneseSlugs, getResultsByJapanese } from '@/lib/language-pair'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'

export const revalidate = 86400

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const slugs = await getAllJapaneseSlugs()
  return slugs.map((word) => ({ locale: 'ja', word }))
}

export async function generateMetadata({ params }: Props) {
  const { word } = await params
  return {
    title: `ビサヤ語で${word}`,
    description: `「${word}」のビサヤ語（セブアノ語）訳。意味・例文つき。`,
    openGraph: {
      title: `ビサヤ語で${word}`,
      description: `「${word}」のビサヤ語（セブアノ語）訳。`,
    },
  }
}

export default async function BisayaJaPage({ params }: Props) {
  const { locale, word: keyword } = await params
  const t = await getTranslations('languagePair')

  const results = await getResultsByJapanese(keyword)
  if (results.length === 0) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    name: `ビサヤ語で${keyword}`,
    description: `「${keyword}」のビサヤ語訳`,
    mainEntity: {
      '@type': 'Question',
      name: `「${keyword}」はビサヤ語で何と言いますか？`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: results.map((r) => `${r.word}（${r.meaning_ja}）`).join('、'),
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
        <BackButton />
      </div>

      <h1 className="text-3xl font-bold mb-2">{t('heading', { word: keyword })}</h1>
      <p className="text-gray-500 text-sm mb-8">ビサヤ語（セブアノ語）の翻訳</p>

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
