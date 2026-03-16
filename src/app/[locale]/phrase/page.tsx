import { supabase } from '@/lib/supabase'
import { PHRASE_CATEGORIES } from '@/lib/phrase-categories'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'

const PAGE_SIZE = 10

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ page?: string }> }

export default async function PhrasePage({ params, searchParams }: Props) {
  const { locale } = await params
  const { page } = await searchParams
  const t = await getTranslations('phrases')
  const isJa = locale === 'ja'

  const currentPage = Math.max(1, parseInt(page ?? '1', 10))
  const offset = (currentPage - 1) * PAGE_SIZE
  const totalPages = Math.ceil(PHRASE_CATEGORIES.length / PAGE_SIZE)
  const visibleCategories = PHRASE_CATEGORIES.slice(offset, offset + PAGE_SIZE)

  const { data: counts } = await supabase.rpc('get_phrase_category_counts')

  const countMap = new Map<string, number>()
  let total = 0
  for (const row of counts ?? []) {
    const c = Number(row.count)
    countMap.set(row.category ?? '__none__', c)
    total += c
  }

  const pageUrl = (p: number) => `/${locale}/phrase?page=${p}`

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <div className="flex items-baseline justify-between mb-2">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <span className="text-sm text-gray-400">{total} phrases</span>
      </div>
      <p className="text-gray-500 text-sm mb-8">{t('subtitle')}</p>

      <div className="grid grid-cols-2 gap-3">
        {visibleCategories.map(({ key, icon, en, ja }) => {
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

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {currentPage > 1 && (
            <Link href={pageUrl(currentPage - 1)} className="btn-page">
              ←
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={pageUrl(p)}
              className={`btn-page ${p === currentPage ? 'btn-page-active' : ''}`}
            >
              {p}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link href={pageUrl(currentPage + 1)} className="btn-page">
              →
            </Link>
          )}
        </div>
      )}
    </main>
  )
}
