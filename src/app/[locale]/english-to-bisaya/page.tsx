import { getResultsByEnglish } from '@/lib/language-pair'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const isJa = locale === 'ja'
  if (isJa) {
    return {
      title: q ? `「${q}」のビサヤ語訳` : '英語からビサヤ語辞書',
      description: '英語からビサヤ語（セブアノ語）に翻訳。意味・例文つき。',
    }
  }
  return {
    title: q ? `"${q}" in Bisaya — English to Bisaya Dictionary` : 'English to Bisaya Dictionary',
    description: 'Translate English words and phrases to Bisaya (Cebuano).',
  }
}

export default async function EnglishToBisayaPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const query = q?.trim() ?? ''
  const isJa = locale === 'ja'

  let results: Awaited<ReturnType<typeof getResultsByEnglish>> = []
  if (query) {
    const raw = await getResultsByEnglish(query)
    const lq = query.toLowerCase()
    results = raw.sort((a, b) => {
      const rank = (m: string | null) => {
        if (!m) return 2
        const s = m.toLowerCase()
        if (s.startsWith(lq)) return 0
        return 1
      }
      return rank(a.meaning_en) - rank(b.meaning_en)
    })
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">
          {isJa ? '← トップ' : '← Home'}
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        {isJa ? '英語からビサヤ語' : 'English to Bisaya'}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        {isJa ? '英語からビサヤ語（セブアノ語）に翻訳します。' : 'Translate English words and phrases into Bisaya (Cebuano).'}
      </p>
      <form action={`/${locale}/english-to-bisaya`} method="GET" className="w-full max-w-md mx-auto mb-8">
        <div className="flex flex-col gap-3">
          <input
            type="text" name="q" defaultValue={query} autoFocus
            placeholder={isJa ? '英語の単語を入力…' : 'Search English word…'}
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
              : isJa ? `「${query}」の検索結果 ${results.length} 件` : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
          </p>
          <div className="space-y-3">
            {results.map((r, i) => (
              <Link key={i} href={`/${locale}/word/${r.word}`}
                className="block border border-gray-200 rounded-xl p-4 hover:bg-purple-50 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#512376' }}>{r.word}</span>
                  {r.part_of_speech && (
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded shrink-0 mt-1">{r.part_of_speech}</span>
                  )}
                </div>
                {r.meaning_en && <p className="text-gray-500 text-sm mt-1">{r.meaning_en}</p>}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-400 mb-6">
            {isJa ? '英語の単語を入力してビサヤ語訳を検索' : 'Type an English word to find its Bisaya translation'}
          </p>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
            {isJa ? 'アルファベット順で探す' : 'Browse by letter'}
          </h2>
          <div className="flex flex-wrap gap-1">
            {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
              <Link key={letter} href={`/${locale}/dictionary/${letter}`}
                className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-purple-50 uppercase transition-colors"
                style={{ color: '#512376' }}>{letter}</Link>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
