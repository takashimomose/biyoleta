import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export const metadata = {
  title: 'ビサヤ語日本語辞書 | Bisaya to Japanese Dictionary',
  description: 'ビサヤ語（セブアノ語）を日本語に翻訳。意味・例文つき。Translate Bisaya (Cebuano) words to Japanese.',
}

export default async function BisayaToJapanesePage({ params }: Props) {
  const { locale } = await params

  const { data: words } = await supabase
    .from('words')
    .select('id, word, part_of_speech')
    .order('word', { ascending: true })
    .limit(20)

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">← Home</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Bisaya to Japanese Dictionary</h1>
      <p className="text-gray-500 text-sm mb-8">
        ビサヤ語（セブアノ語）を日本語に翻訳。Translate Bisaya (Cebuano) words into Japanese with meanings and example sentences.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        <Link href={`/${locale}/english-to-bisaya`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="font-bold text-lg" style={{ color: '#512376' }}>English → Bisaya</span>
          <span className="text-xs text-gray-400">English to Bisaya</span>
        </Link>
        <Link href={`/${locale}/bisaya-to-english`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="font-bold text-lg" style={{ color: '#512376' }}>Bisaya → English</span>
          <span className="text-xs text-gray-400">Bisaya to English</span>
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">ビサヤ語の単語を探す</h2>
        <ul className="divide-y divide-gray-200">
          {(words ?? []).map((word) => (
            <li key={word.id}>
              <Link
                href={`/${locale}/dictionary/${word.word}`}
                className="flex items-center justify-between py-3 hover:bg-gray-50 px-2 rounded transition-colors"
              >
                <span className="font-medium">{word.word}</span>
                <span className="text-sm text-gray-400">{word.part_of_speech}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href={`/${locale}/dictionary`} className="text-sm text-gray-500 hover:underline">
            すべての単語を見る →
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">アルファベット順で探す</h2>
        <div className="flex flex-wrap gap-1">
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <Link
              key={letter}
              href={`/${locale}/dictionary/${letter}`}
              className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-gray-50 uppercase transition-colors"
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
