import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export const metadata = {
  title: 'Bisaya to English Dictionary',
  description: 'Translate Bisaya (Cebuano) words to English. Browse thousands of Bisaya-to-English translations with meanings and example sentences.',
}

export default async function BisayaToEnglishPage({ params }: Props) {
  const { locale } = await params

  const { data: words } = await supabase
    .from('words')
    .select('id, word, part_of_speech')
    .order('word', { ascending: true })
    .limit(20)

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">← Home</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Bisaya to English Dictionary</h1>
      <p className="text-gray-500 text-sm mb-8">
        Translate Bisaya (Cebuano) words into English. Find meanings, pronunciations, and example sentences.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        <Link href={`/${locale}/english-to-bisaya`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="font-bold text-lg" style={{ color: '#512376' }}>English → Bisaya</span>
          <span className="text-xs text-gray-400">English to Bisaya</span>
        </Link>
        <Link href={`/${locale}/bisaya-to-japanese`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="font-bold text-lg" style={{ color: '#512376' }}>Bisaya → 日本語</span>
          <span className="text-xs text-gray-400">Bisaya to Japanese</span>
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Browse Bisaya words</h2>
        <ul className="divide-y divide-gray-200">
          {(words ?? []).map((word) => (
            <li key={word.id}>
              <Link
                href={`/${locale}/dictionary/${word.word}`}
                className="flex items-center justify-between py-3 hover:bg-purple-50 px-2 rounded transition-colors"
              >
                <span className="font-medium">{word.word}</span>
                <span className="text-sm text-gray-400">{word.part_of_speech}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href={`/${locale}/dictionary`} className="text-sm text-gray-500 hover:opacity-70">
            Browse all words →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Browse by letter</h2>
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
    </main>
  )
}
