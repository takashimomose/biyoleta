import { supabase } from '@/lib/supabase'
import { PHRASE_CATEGORIES } from '@/lib/phrase-categories'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'

type Props = { params: Promise<{ locale: string }> }

export default async function PhrasePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('phrases')
  const isJa = locale === 'ja'

  const { data: phrases } = await supabase.from('phrases').select('category')

  const countMap = new Map<string, number>()
  for (const p of phrases ?? []) {
    const cat = p.category ?? '__none__'
    countMap.set(cat, (countMap.get(cat) ?? 0) + 1)
  }
  const total = phrases?.length ?? 0

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">{t('back')}</Link>
      </div>
      <div className="flex items-baseline justify-between mb-2">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <span className="text-sm text-gray-400">{total} phrases</span>
      </div>
      <p className="text-gray-500 text-sm mb-8">{t('subtitle')}</p>

      <div className="grid grid-cols-2 gap-3">
        {PHRASE_CATEGORIES.map(({ key, icon, en, ja }) => {
          const count = countMap.get(key) ?? 0
          return (
            <Link
              key={key}
              href={`/${locale}/phrase/${key}`}
              className="card-3d flex items-center gap-3 p-4"
            >
              <Image src={`/openmoji/${icon}.svg`} alt={key} width={32} height={32} unoptimized />
              <div>
                <p className="font-semibold text-sm" style={{ color: '#512376' }}>{isJa ? ja : en}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t('phraseCount', { count })}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
