import Link from 'next/link'
import { redirect } from 'next/navigation'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (locale === 'ja') {
    return {
      title: 'ビサヤ語での言い方',
      description: '英語の単語をビサヤ語（セブアノ語）でどう言うか調べられます。',
    }
  }
  return {
    title: 'How to Say in Bisaya',
    description: 'Find out how to say any English word or phrase in Bisaya (Cebuano).',
  }
}

const EXAMPLE_SEARCHES = ['love', 'friend', 'thank you', 'water', 'food', 'beautiful', 'happy', 'help', 'hello', 'family']

async function handleSearch(locale: string, formData: FormData) {
  'use server'
  const q = formData.get('q')?.toString().trim()
  if (q) {
    const slug = q.replace(/\s+/g, '-').toLowerCase()
    redirect(`/${locale}/how-to-say/${slug}-in-bisaya`)
  }
}

export default async function HowToSayIndexPage({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'
  const search = handleSearch.bind(null, locale)

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">
          {isJa ? '← トップ' : '← Home'}
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        {isJa ? 'ビサヤ語での言い方' : 'How to Say in Bisaya'}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        {isJa ? '英語の単語を入力してビサヤ語での言い方を調べましょう' : 'Type any English word to find its Bisaya translation'}
      </p>
      <form action={search} className="w-full max-w-md mx-auto mb-6">
        <div className="flex flex-col gap-3">
          <input
            type="text" name="q" autoFocus
            placeholder={isJa ? '例：love, thank you, water…' : 'e.g. love, thank you, water…'}
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50"
            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
          />
          <button type="submit" className="btn-3d px-5 py-3 w-1/3 mx-auto">
            {isJa ? '検索' : 'Search'}
          </button>
        </div>
      </form>
      <div className="w-full max-w-md mx-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
          {isJa ? '検索例' : 'Example searches'}
        </p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_SEARCHES.map((term) => (
            <Link
              key={term}
              href={`/${locale}/how-to-say/${term.replace(/\s+/g, '-')}-in-bisaya`}
              className="text-sm border border-gray-200 rounded-full px-3 py-1 hover:bg-purple-50 transition-colors"
              style={{ color: '#512376' }}
            >
              {term}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
