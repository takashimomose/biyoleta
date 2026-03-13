import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'

type Props = { params: Promise<{ locale: string }> }

export const PHRASE_CATEGORIES: { key: string; icon: string; en: string; ja: string }[] = [
  { key: 'greetings',    icon: '1F44B', en: 'Greetings & Farewells',  ja: '挨拶・別れ' },
  { key: 'introduction', icon: '1F4DD', en: 'Self Introduction',       ja: '自己紹介' },
  { key: 'daily_life',   icon: '1F4AC', en: 'Daily Conversation',      ja: '日常会話' },
  { key: 'gratitude',    icon: '2728',  en: 'Thanks & Apologies',      ja: '感謝・謝罪' },
  { key: 'shopping',     icon: '1F5C2', en: 'Shopping',                ja: '買い物' },
  { key: 'food',         icon: '1F37D', en: 'Food & Dining',           ja: '食事・注文' },
  { key: 'transport',    icon: '1F3C3', en: 'Transport & Directions',  ja: '交通・道案内' },
  { key: 'emergency',    icon: '26A1',  en: 'Emergency & Medical',     ja: '緊急・医療' },
  { key: 'time',         icon: '23F0',  en: 'Time & Schedule',         ja: '時間・日程' },
  { key: 'emotions',     icon: '1F60A', en: 'Feelings & Emotions',     ja: '感情・気持ち' },
  { key: 'family',       icon: '1F46A', en: 'Family & Relationships',  ja: '家族・人間関係' },
  { key: 'religion',     icon: '1F4D6', en: 'Religion & Culture',      ja: '宗教・文化' },
]

export default async function PhrasesPage({ params }: Props) {
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
              href={`/${locale}/phrases/${key}`}
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
