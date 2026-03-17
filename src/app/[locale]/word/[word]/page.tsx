import { supabase } from '@/lib/supabase'
import { Meaning } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'

export const revalidate = 86400

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const allWords: string[] = []
  const pageSize = 1000
  let offset = 0
  while (true) {
    const { data } = await supabase.from('words').select('word').range(offset, offset + pageSize - 1)
    if (!data || data.length === 0) break
    allWords.push(...data.map((w: any) => w.word))
    if (data.length < pageSize) break
    offset += pageSize
  }
  return allWords.flatMap((word) => [
    { locale: 'en', word },
    { locale: 'ja', word },
  ])
}

export async function generateMetadata({ params }: Props) {
  const { locale, word: slug } = await params
  const { data: word } = await supabase
    .from('words')
    .select('word, part_of_speech')
    .ilike('word', slug)
    .limit(1)
    .maybeSingle()

  if (!word) return {}

  if (locale === 'ja') {
    return {
      title: `${word.word} | ビサヤ語の意味`,
      description: `ビサヤ語（セブアノ語）の「${word.word}」の意味・例文・関連語。`,
    }
  }
  return {
    title: `${word.word} | Bisaya word meaning`,
    description: `Meaning of the Bisaya (Cebuano) word "${word.word}". Translations, example sentences, and related words.`,
  }
}

export default async function WordPage({ params }: Props) {
  const { locale, word: slug } = await params
  const t = await getTranslations('word')
  const isJa = locale === 'ja'

  const { data: word } = await supabase
    .from('words')
    .select('*')
    .ilike('word', slug)
    .limit(1)
    .maybeSingle()

  if (!word) notFound()

  const [{ data: meanings }, { data: phrases }] = await Promise.all([
    supabase.from('meanings').select('*').eq('word_id', word.id),
    supabase
      .from('phrases')
      .select('id, phrase, meaning_en, meaning_ja')
      .ilike('phrase', `%${word.word}%`),
  ])

  let relatedWords: { id: number; word: string; part_of_speech: string | null }[] = []
  if (word.category) {
    const { data } = await supabase
      .from('words')
      .select('id, word, part_of_speech')
      .eq('category', word.category)
      .neq('id', word.id)
      .limit(8)
    relatedWords = data ?? []
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: word.word,
    inDefinedTermSet: 'https://biyoleta.com/dictionary',
    description: meanings?.[0]?.meaning_en ?? '',
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="animate-word-found">{word.word}</span>
        </h1>
        {word.part_of_speech && (
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {word.part_of_speech}
          </span>
        )}
      </div>

      {/* Meanings */}
      <div className="space-y-6 mb-10">
        {meanings?.map((m: Meaning, i: number) => (
          <div key={m.id} className="space-y-2">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              {t('meaning')} {meanings.length > 1 ? i + 1 : ''}
            </p>
            {!isJa && m.meaning_en && (
              <p><span className="text-xs text-gray-400 mr-2">EN</span>{m.meaning_en}</p>
            )}
            {isJa && m.meaning_ja && (
              <p><span className="text-xs text-gray-400 mr-2">JA</span>{m.meaning_ja}</p>
            )}
            {m.example && (
              <div className="mt-3 pl-3 border-l-2 border-gray-200">
                <p className="text-xs text-gray-400 mb-1">{t('example')}</p>
                <p className="text-gray-700 italic">{m.example}</p>
              </div>
            )}
            {m.meaning_en && !isJa && (
              <Link
                href={`/${locale}/how-to-say/${m.meaning_en.split(',')[0].trim().toLowerCase().replace(/\s+/g, '-')}-in-bisaya`}
                className="text-xs text-gray-400 hover:opacity-70"
              >
                How to say &ldquo;{m.meaning_en.split(',')[0].trim()}&rdquo; in Bisaya →
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Related Words */}
      {relatedWords.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {t('relatedWords')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedWords.map((r) => (
              <Link
                key={r.id}
                href={`/${locale}/word/${r.word}`}
                className="border border-gray-200 rounded-full px-3 py-1 text-sm font-medium hover:bg-purple-50 transition-colors"
              >
                {r.word}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Phrases */}
      {phrases && phrases.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {t('relatedPhrases')}
          </h2>
          <ul className="space-y-2">
            {phrases.map((p: any) => (
              <li key={p.id} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold mb-1">{p.phrase}</p>
                {p.meaning_en && (
                  <p className="text-sm text-gray-600">
                    <span className="text-xs text-gray-400 mr-2">EN</span>{p.meaning_en}
                  </p>
                )}
                {isJa && p.meaning_ja && (
                  <p className="text-sm text-gray-600">
                    <span className="text-xs text-gray-400 mr-2">JA</span>{p.meaning_ja}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
