import Link from 'next/link'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import BackButton from '@/components/BackButton'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (locale === 'ja') {
    return {
      title: 'ビサヤ語での言い方',
      description: '英語や日本語の単語をビサヤ語（セブアノ語）でどう言うか調べられます。',
    }
  }
  return {
    title: 'How to Say in Bisaya',
    description: 'Find out how to say any English word or phrase in Bisaya (Cebuano).',
  }
}

const EXAMPLES_EN = ['love', 'friend', 'thank you', 'water', 'food', 'beautiful', 'happy', 'help', 'hello', 'family']
const EXAMPLES_JA = ['愛', '友達', 'ありがとう', '水', '食べ物', '美しい', '嬉しい', '助け', 'こんにちは', '家族']

function toEnSlug(q: string) {
  return q.trim().toLowerCase().replace(/\s+/g, '-')
}

async function handleSearch(locale: string, formData: FormData) {
  'use server'
  const q = formData.get('q')?.toString().trim()
  if (!q) return

  if (locale === 'ja') {
    // 日本語入力 → meaning_ja で英語スラッグを取得してリダイレクト
    const { data } = await supabase
      .from('meanings')
      .select('meaning_en')
      .ilike('meaning_ja', `%${q}%`)
      .not('meaning_en', 'is', null)
      .limit(1)
      .maybeSingle()

    if (data?.meaning_en) {
      const slug = toEnSlug(data.meaning_en.split(',')[0])
      redirect(`/ja/how-to-say/${slug}`)
    }
    // フォールバック：英語入力として扱う
    redirect(`/ja/how-to-say/${toEnSlug(q)}`)
  } else {
    redirect(`/en/how-to-say/${toEnSlug(q)}`)
  }
}

export default async function HowToSayIndexPage({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'
  const search = handleSearch.bind(null, locale)

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>
      <h1 className="text-3xl font-bold mb-2">
        {isJa ? 'ビサヤ語での言い方' : 'How to Say in Bisaya'}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        {isJa
          ? '日本語または英語で入力してビサヤ語での言い方を調べましょう'
          : 'Type any English word to find its Bisaya translation'}
      </p>
      <form action={search} className="w-full max-w-md mx-auto mb-6">
        <div className="flex flex-col gap-3">
          <input
            type="text" name="q" autoFocus
            placeholder={isJa ? '例：愛、友達、ありがとう…' : 'e.g. love, thank you, water…'}
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
          {(isJa ? EXAMPLES_JA : EXAMPLES_EN).map((term, i) => {
            const slug = isJa ? toEnSlug(EXAMPLES_EN[i]) : toEnSlug(term)
            return (
              <Link
                key={term}
                href={`/${locale}/how-to-say/${slug}`}
                className="text-sm border border-gray-200 rounded-full px-3 py-1 hover:bg-purple-50 transition-colors"
                style={{ color: '#512376' }}
              >
                {term}
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
