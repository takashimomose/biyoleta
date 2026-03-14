import { supabase } from '@/lib/supabase'
import { Meaning, Word } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const { data: words } = await supabase.from('words').select('word')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return [
    ...(words ?? []).flatMap((w) => [
      { locale: 'en', word: w.word },
      { locale: 'ja', word: w.word },
    ]),
    ...alphabet.flatMap((letter) => [
      { locale: 'en', word: letter },
      { locale: 'ja', word: letter },
    ]),
  ]
}

export async function generateMetadata({ params }: Props) {
  const { word } = await params
  if (/^[a-z]$/.test(word)) {
    return {
      title: `Bisaya words starting with "${word.toUpperCase()}"`,
      description: `Browse all Bisaya (Cebuano) words starting with the letter ${word.toUpperCase()}.`,
    }
  }
  return {
    title: word,
    description: `Bisaya word: ${word}`,
  }
}

export default async function WordPage({ params }: Props) {
  const { locale, word: slug } = await params

  // A-Z page: single letter
  if (/^[a-z]$/.test(slug)) {
    return <AZPage locale={locale} letter={slug} />
  }

  const t = await getTranslations('word')

  const { data: word } = await supabase
    .from('words')
    .select('*')
    .eq('word', slug)
    .single()

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
        <Link href={`/${locale}/dictionary`} className="text-sm text-gray-500 hover:underline">{t('back')}</Link>
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2"><span className="animate-word-found">{word.word}</span></h1>
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
            {m.meaning_en && (
              <p><span className="text-xs text-gray-400 mr-2">EN</span>{m.meaning_en}</p>
            )}
            {m.meaning_ja && (
              <p><span className="text-xs text-gray-400 mr-2">JA</span>{m.meaning_ja}</p>
            )}
            {m.example && (
              <div className="mt-3 pl-3 border-l-2 border-gray-200">
                <p className="text-xs text-gray-400 mb-1">{t('example')}</p>
                <p className="text-gray-700 italic">{m.example}</p>
              </div>
            )}
            {/* SEO link to how-to-say */}
            {m.meaning_en && locale === 'en' && (
              <Link
                href={`/how-to-say/${m.meaning_en.split(',')[0].trim().toLowerCase().replace(/\s+/g, '-')}-in-bisaya`}
                className="text-xs text-gray-400 hover:underline"
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
            {relatedWords.map((r: any) => (
              <Link
                key={r.id}
                href={`/${locale}/dictionary/${r.word}`}
                className="border border-gray-200 rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50 transition-colors"
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
                {p.meaning_ja && (
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

async function AZPage({ locale, letter }: { locale: string; letter: string }) {
  const { data: words } = await supabase
    .from('words')
    .select('id, word, part_of_speech')
    .ilike('word', `${letter}%`)
    .order('word', { ascending: true })

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}/dictionary`} className="text-sm text-gray-500 hover:underline">← Dictionary</Link>
      </div>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-2xl font-bold">Bisaya words: {letter.toUpperCase()}</h1>
        <span className="text-sm text-gray-400">{words?.length ?? 0} words</span>
      </div>

      <ul className="divide-y divide-gray-200">
        {(words ?? []).map((word: any) => (
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
    </main>
  )
}
