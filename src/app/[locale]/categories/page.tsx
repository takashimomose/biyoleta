import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'

type Props = { params: Promise<{ locale: string }> }

const CATEGORY_ICONS: Record<string, string> = {
  greetings:  '1F44B',
  family:     '1F46A',
  body:       '1F4AA',
  food:       '1F37D',
  nature:     '1F33F',
  emotions:   '1F60A',
  time:       '23F0',
  colors:     '1F3A8',
  numbers:    '1F522',
  verbs:      '1F3C3',
  adjectives: '2728',
  daily_life: '1F4C3',
}

const POS_ICONS: Record<string, string> = {
  noun:         '1F4DD',
  verb:         '1F3C3',
  adjective:    '2728',
  adverb:       '26A1',
  interjection: '1F4AC',
  number:       '1F522',
}

const FALLBACK_ICON = '1F4C3'

export default async function CategoriesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('categories')

  const { data: words } = await supabase
    .from('words')
    .select('category, part_of_speech')

  const categoryMap = new Map<string, number>()
  const posMap = new Map<string, number>()

  for (const w of words ?? []) {
    const cat = w.category ?? '__none__'
    categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1)
    const pos = w.part_of_speech ?? '__none__'
    posMap.set(pos, (posMap.get(pos) ?? 0) + 1)
  }

  const categories = [...categoryMap.entries()]
    .filter(([key]) => key !== '__none__')
    .sort((a, b) => b[1] - a[1])

  const partsOfSpeech = [...posMap.entries()]
    .filter(([key]) => key !== '__none__')
    .sort((a, b) => b[1] - a[1])

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">{t('back')}</Link>
      </div>
      <h1 className="text-2xl font-bold mb-10">{t('title')}</h1>

      <section className="mb-10">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">{t('byCategory')}</h2>
        {categories.length === 0 ? (
          <p className="text-gray-400 text-sm">No categories yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {categories.map(([cat, count]) => (
              <Link
                key={cat}
                href={`/${locale}/categories/category-${cat}`}
                className="card-3d flex items-center gap-3 p-4"
              >
                <Image
                  src={`/openmoji/${CATEGORY_ICONS[cat] ?? FALLBACK_ICON}.svg`}
                  alt={cat}
                  width={32}
                  height={32}
                  unoptimized
                />
                <div>
                  <p className="font-semibold capitalize text-sm" style={{ color: '#512376' }}>{cat.replace(/_/g, ' ')}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t('words', { count })}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">{t('byPartOfSpeech')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {partsOfSpeech.map(([pos, count]) => (
            <Link
              key={pos}
              href={`/${locale}/categories/pos-${pos}`}
              className="card-3d flex items-center gap-3 p-4"
            >
              <Image
                src={`/openmoji/${POS_ICONS[pos] ?? FALLBACK_ICON}.svg`}
                alt={pos}
                width={32}
                height={32}
                unoptimized
              />
              <div>
                <p className="font-semibold capitalize text-sm" style={{ color: '#512376' }}>{pos}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t('words', { count })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
