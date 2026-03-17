import { getResultsByJapanese } from '@/lib/language-pair'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ searchParams }: Props) {
  const { q } = await searchParams
  return {
    title: q ? `「${q}」のビサヤ語訳` : '日本語からビサヤ語辞書',
    description: '日本語からビサヤ語（セブアノ語）に翻訳。意味・例文つき。',
  }
}

export default async function JapaneseToBisayaPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { q } = await searchParams
  const query = q?.trim() ?? ''

  let results: Awaited<ReturnType<typeof getResultsByJapanese>> = []
  if (query) {
    results = await getResultsByJapanese(query)
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-2">日本語からビサヤ語</h1>
      <p className="text-gray-500 text-sm mb-8">
        日本語からビサヤ語（セブアノ語）に翻訳します。
      </p>
      <form action={`/${locale}/japanese-to-bisaya`} method="GET" className="w-full max-w-md mx-auto mb-8">
        <div className="flex flex-col gap-3">
          <input
            type="text" name="q" defaultValue={query} autoFocus
            placeholder="日本語の単語を入力…"
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50"
            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
          />
          <button type="submit" className="btn-3d px-5 py-3 w-1/3 mx-auto">
            検索
          </button>
        </div>
      </form>
      {query ? (
        <div>
          <p className="text-sm text-gray-500 mb-4">
            {results.length === 0
              ? '結果が見つかりませんでした。'
              : `「${query}」の検索結果 ${results.length} 件`}
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
                {r.meaning_ja && <p className="text-gray-500 text-sm mt-1">{r.meaning_ja}</p>}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-400">
            日本語の単語を入力してビサヤ語訳を検索してください。
          </p>
        </div>
      )}
    </main>
  )
}
