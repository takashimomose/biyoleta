import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import CategoryAccordion from '@/components/CategoryAccordion'
import { WORD_CATEGORY_GROUPS } from '@/lib/word-categories'
import BackButton from '@/components/BackButton'
import Pagination from '@/components/Pagination'

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

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>
      <h1 className="text-2xl font-bold mb-10">{t('title')}</h1>

      <CategoryAccordion locale={locale} countMap={countMap} isJa={isJa} groups={visibleGroups} />

      <Pagination currentPage={currentPage} totalPages={totalPages} basePath={`/${locale}/category`} />
    </main>
  )
}
