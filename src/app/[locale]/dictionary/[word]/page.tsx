import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type Props = { params: Promise<{ locale: string; word: string }> }

export async function generateStaticParams() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return alphabet.flatMap((letter) => [
    { locale: 'en', word: letter },
    { locale: 'ja', word: letter },
  ])
}

export async function generateMetadata({ params }: Props) {
  const { word } = await params
  return {
    title: `Bisaya words starting with "${word.toUpperCase()}"`,
    description: `Browse all Bisaya (Cebuano) words starting with the letter ${word.toUpperCase()}.`,
  }
}

export default async function DictionaryWordPage({ params }: Props) {
  const { locale, word: slug } = await params

  // Single letter → A-Z page
  if (/^[a-z]$/.test(slug)) {
    return <AZPage locale={locale} letter={slug} />
  }

  // Word slug → redirect to canonical /word/[word]
  redirect(`/${locale}/word/${slug}`)
}

async function AZPage({ locale, letter }: { locale: string; letter: string }) {
  const isJa = locale === 'ja'
  const t = await getTranslations('words')

  const { data: words } = await supabase
    .from('words')
    .select('id, word, part_of_speech')
    .ilike('word', `${letter}%`)
    .order('word', { ascending: true })

  const wordIds = (words ?? []).map((w: any) => w.id)
  const { data: meanings } = wordIds.length > 0
    ? await supabase.from('meanings').select('word_id, meaning_en, meaning_ja').in('word_id', wordIds)
    : { data: [] }

  const meaningMap = new Map<number, string>()
  for (const m of meanings ?? []) {
    if (!meaningMap.has(m.word_id)) {
      const text = isJa ? (m.meaning_ja || m.meaning_en) : m.meaning_en
      if (text) meaningMap.set(m.word_id, text)
    }
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}/dictionary`} className="text-sm text-gray-500 hover:opacity-70">← {t('title')}</Link>
      </div>
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="text-2xl font-bold">Bisaya words: {letter.toUpperCase()}</h1>
        <span className="text-sm text-gray-400">{words?.length ?? 0} {isJa ? '語' : 'words'}</span>
      </div>

      <ul className="divide-y divide-gray-200">
        {(words ?? []).map((word: any) => (
          <li key={word.id}>
            <Link
              href={`/${locale}/word/${word.word}`}
              className="flex flex-col py-3 hover:bg-purple-50 px-2 rounded transition-colors gap-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-lg">{word.word}</span>
                {word.part_of_speech && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{word.part_of_speech}</span>
                )}
              </div>
              {meaningMap.get(word.id) && (
                <span className="text-sm text-gray-400 truncate">{meaningMap.get(word.id)}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
