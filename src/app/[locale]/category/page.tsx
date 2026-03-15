import { supabase } from '@/lib/supabase'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import CategoryAccordion from '@/components/CategoryAccordion'

type Props = { params: Promise<{ locale: string }> }

export default async function CategoryPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('categories')
  const isJa = locale === 'ja'

  const { data: counts } = await supabase.rpc('get_category_counts')

  const countMap: Record<string, number> = {}
  for (const row of counts ?? []) {
    countMap[row.category ?? '__none__'] = Number(row.count)
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <h1 className="text-2xl font-bold mb-10">{t('title')}</h1>

      <CategoryAccordion locale={locale} countMap={countMap} isJa={isJa} />
    </main>
  )
}
