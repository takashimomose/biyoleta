import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Flashcards from '@/components/Flashcards'
import BackButton from '@/components/BackButton'
import { WORD_CATEGORY_GROUPS } from '@/lib/word-categories'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'flashcards' })
  return { title: t('title'), description: t('subtitle') }
}

export default async function FlashcardsPage({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'
  const t = await getTranslations('flashcards')

  const { data } = await supabase
    .from('meanings')
    .select('meaning_en, meaning_ja, words(word, category)')
    .not('meaning_en', 'is', null)
    .not('meaning_ja', 'is', null)

  const words = (data ?? [])
    .map((m: any) => ({
      word: m.words.word,
      meaning_en: m.meaning_en.split(',')[0].trim(),
      meaning_ja: m.meaning_ja.split(/[、,]/)[0].trim(),
      category: m.words.category ?? null,
    }))
    .filter((w: any) => w.word && w.meaning_en && w.meaning_ja)

  const categories = WORD_CATEGORY_GROUPS.map((g) => ({
    key: g.key,
    en: g.en,
    ja: g.ja,
  }))

  const messages = {
    modeLabel:      t('modeLabel'),
    modeBisayaToEn: t('modeBisayaToEn'),
    modeEnToBisaya: t('modeEnToBisaya'),
    categoryLabel:  isJa ? 'カテゴリ' : 'Category',
    categoryAll:    isJa ? 'すべて' : 'All',
    start:          t('start'),
    tapToFlip:      t('tapToFlip'),
    know:           t('know'),
    dontKnow:       t('dontKnow'),
    card:           t.raw('card') as string,
    result:         t('result'),
    known:          t('known'),
    unknown:        t('unknown'),
    retry:          t('retry'),
    retryUnknown:   t('retryUnknown'),
    backHome:       t('backHome'),
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-1">{t('title')}</h1>
        <p className="text-gray-500 text-sm">{t('subtitle')}</p>
      </div>

      {words.length < 1 ? (
        <p className="text-center text-gray-400">{t('notEnoughWords')}</p>
      ) : (
        <Flashcards words={words} locale={locale} messages={messages} categories={categories} />
      )}
    </main>
  )
}
