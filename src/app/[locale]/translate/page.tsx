import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

type WordResult = {
  id: number
  word: string
  part_of_speech: string | null
  meaning_en: string | null
  meaning_ja: string | null
}

type PhraseResult = {
  id: number
  phrase: string
  meaning_en: string | null
  meaning_ja: string | null
}

export default async function TranslatePage({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const t = await getTranslations('translate')
  const isJa = locale === 'ja'
  const query = q?.trim() ?? ''

  let wordResults: WordResult[] = []
  let phraseResults: PhraseResult[] = []

  if (query) {
    const { data: meanings } = await supabase
      .from('meanings')
      .select('word_id, meaning_en, meaning_ja, words(id, word, part_of_speech)')
      .or(`meaning_en.ilike.%${query}%,meaning_ja.ilike.%${query}%`)

    wordResults = (meanings ?? []).map((m: any) => ({
      id: m.words.id,
      word: m.words.word,
      part_of_speech: m.words.part_of_speech,
      meaning_en: m.meaning_en,
      meaning_ja: m.meaning_ja,
    }))

    const { data: phrases } = await supabase
      .from('phrases')
      .select('id, phrase, meaning_en, meaning_ja')
      .or(`meaning_en.ilike.%${query}%,meaning_ja.ilike.%${query}%`)

    phraseResults = phrases ?? []
  }

  const total = wordResults.length + phraseResults.length

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>
      <h1 className="text-2xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-500 text-sm mb-8">{t('subtitle')}</p>

      <form action={`/${locale}/translate`} method="GET" className="mb-8">
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
        <div className="space-y-8">
          <p className="text-sm text-gray-500">{t('results', { query, count: total })}</p>

          {wordResults.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">{t('wordsSection')}</h2>
              <ul className="space-y-3">
                {wordResults.map((w) => (
                  <li key={w.id} className="border border-gray-200 rounded-xl p-4">
                    <Link href={`/${locale}/dictionary/${w.word}`} className="hover:opacity-70">
                      <p className="text-xl font-bold mb-1">{w.word}</p>
                    </Link>
                    {w.part_of_speech && (
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded mr-2">{w.part_of_speech}</span>
                    )}
                    <div className="mt-2 space-y-0.5">
                      {w.meaning_en && <p className="text-sm text-gray-600"><span className="text-xs text-gray-400 mr-2">EN</span>{w.meaning_en}</p>}
                      {w.meaning_ja && <p className="text-sm text-gray-600"><span className="text-xs text-gray-400 mr-2">JA</span>{w.meaning_ja}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {phraseResults.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">{t('phrasesSection')}</h2>
              <ul className="space-y-3">
                {phraseResults.map((p) => (
                  <li key={p.id} className="border border-gray-200 rounded-xl p-4">
                    <p className="text-xl font-bold mb-2">{p.phrase}</p>
                    <div className="space-y-0.5">
                      {p.meaning_en && <p className="text-sm text-gray-600"><span className="text-xs text-gray-400 mr-2">EN</span>{p.meaning_en}</p>}
                      {p.meaning_ja && <p className="text-sm text-gray-600"><span className="text-xs text-gray-400 mr-2">JA</span>{p.meaning_ja}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {total === 0 && <p className="text-gray-400">{t('noResults')}</p>}
        </div>
      )}
    </main>
  )
}
