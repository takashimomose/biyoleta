import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import CategoryAccordion from '@/components/CategoryAccordion'
import { WORD_CATEGORY_GROUPS } from '@/lib/word-categories'

const PAGE_SIZE = 5

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ page?: string }> }

export default async function CategoryPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { page } = await searchParams
  const t = await getTranslations('categories')
  const isJa = locale === 'ja'

  const currentPage = Math.max(1, parseInt(page ?? '1', 10))
  const totalPages = Math.ceil(WORD_CATEGORY_GROUPS.length / PAGE_SIZE)
  const offset = (currentPage - 1) * PAGE_SIZE
  const visibleGroups = WORD_CATEGORY_GROUPS.slice(offset, offset + PAGE_SIZE)

  const { data: counts } = await supabase.rpc('get_category_counts')

  const countMap: Record<string, number> = {}
  for (const row of counts ?? []) {
    countMap[row.category ?? '__none__'] = Number(row.count)
  }

  const pageUrl = (p: number) => `/${locale}/category?page=${p}`

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <h1 className="text-2xl font-bold mb-10">{t('title')}</h1>

      <CategoryAccordion locale={locale} countMap={countMap} isJa={isJa} groups={visibleGroups} />

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
