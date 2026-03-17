import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams
  return {
    title: q
      ? `"${q}" — ビサヤ語日本語辞書 | Bisaya to Japanese Dictionary`
      : 'ビサヤ語日本語辞書 | Bisaya to Japanese Dictionary',
    description:
      'ビサヤ語（セブアノ語）を日本語に翻訳。意味・例文つき。Translate Bisaya (Cebuano) words to Japanese.',
  }
}

type WordRow = { id: number; word: string; part_of_speech: string | null }
type MeaningRow = { word_id: number; meaning_en: string | null; meaning_ja: string | null }
type Result = WordRow & { meaning_en: string | null; meaning_ja: string | null }

export default async function BisayaToJapanesePage({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const query = q?.trim() ?? ''
  const isJa = locale === 'ja'

  let results: Result[] = []

  if (query) {
    const { data: words } = await supabase
      .from('words')
      .select('id, word, part_of_speech')
      .ilike('word', `%${query}%`)
      .order('word') as { data: WordRow[] | null }

    const wordRows = words ?? []

    let meaningsMap: Record<number, { meaning_en: string | null; meaning_ja: string | null }> = {}
    if (wordRows.length > 0) {
      const wordIds = wordRows.map((w) => w.id)
      const { data: meanings } = await supabase
        .from('meanings')
        .select('word_id, meaning_en, meaning_ja')
        .in('word_id', wordIds) as { data: MeaningRow[] | null }

      for (const m of meanings ?? []) {
        if (!(m.word_id in meaningsMap)) {
          meaningsMap[m.word_id] = { meaning_en: m.meaning_en, meaning_ja: m.meaning_ja }
        }
      }
    }

    const lq = query.toLowerCase()
    results = wordRows
      .map((w) => ({
        ...w,
        meaning_en: meaningsMap[w.id]?.meaning_en ?? null,
        meaning_ja: meaningsMap[w.id]?.meaning_ja ?? null,
      }))
      .sort((a, b) => {
        const rank = (word: string) => {
          const s = word.toLowerCase()
          if (s === lq) return 0
          if (s.startsWith(lq)) return 1
          return 2
        }
        return rank(a.word) - rank(b.word)
      })
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      <h1 className="text-3xl font-bold mb-2">
        {isJa ? 'ビサヤ語から日本語' : 'Bisaya to Japanese'}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        {isJa
          ? 'ビサヤ語（セブアノ語）を日本語に翻訳します。'
          : 'Translate Bisaya (Cebuano) words into Japanese.'}
      </p>

      <form action={`/${locale}/bisaya-to-japanese`} method="GET" className="w-full max-w-md mx-auto mb-8">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder={isJa ? 'ビサヤ語の単語を入力…' : 'Search Bisaya word…'}
            autoFocus
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50"
            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
          />
          <button type="submit" className="btn-3d px-5 py-3 w-1/3 mx-auto">
            {isJa ? '検索' : 'Search'}
          </button>
        </div>
      </form>

      {query ? (
        <div>
          <p className="text-sm text-gray-500 mb-4">
            {results.length === 0
              ? (isJa ? '結果が見つかりませんでした。' : 'No results found.')
              : isJa
                ? `「${query}」の検索結果 ${results.length} 件`
                : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
          </p>
          <div className="space-y-3">
            {results.map((r) => (
              <Link
                key={r.id}
                href={`/${locale}/word/${r.word}`}
                className="block border border-gray-200 rounded-xl p-4 hover:bg-purple-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#512376' }}>{r.word}</span>
                  {r.part_of_speech && (
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded shrink-0 mt-1">
                      {r.part_of_speech}
                    </span>
                  )}
                </div>
                {r.meaning_ja ? (
                  <p className="text-gray-500 text-sm mt-1">{r.meaning_ja}</p>
                ) : r.meaning_en ? (
                  <p className="text-gray-500 text-sm mt-1">
                    {r.meaning_en}
                    <span className="ml-1 text-xs text-gray-400">(EN)</span>
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
            {isJa ? 'アルファベット順で探す' : 'Browse by letter'}
          </h2>
          <div className="flex flex-wrap gap-1">
            {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
              <Link
                key={letter}
                href={`/${locale}/dictionary/${letter}`}
                className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-purple-50 uppercase transition-colors"
                style={{ color: '#512376' }}
              >
                {letter}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
