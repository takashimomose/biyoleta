'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WordCategoryGroup } from '@/lib/word-categories'

type Props = {
  locale: string
  countMap: Record<string, number>
  isJa: boolean
  groups: WordCategoryGroup[]
}

export default function CategoryAccordion({ locale, countMap, isJa, groups }: Props) {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <div className="space-y-2">
      {groups.map((group) => {
        const totalCount = group.subCategories.reduce((sum, s) => sum + (countMap[s.key] ?? 0), 0)
        const isOpen = openKey === group.key

        return (
          <div key={group.key} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenKey(isOpen ? null : group.key)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image src={`/openmoji/${group.icon}.svg`} alt={group.key} width={28} height={28} unoptimized />
                <span className="font-semibold text-sm" style={{ color: '#512376' }}>
                  {isJa ? group.ja : group.en}
                </span>
                <span className="text-xs text-gray-400">{totalCount.toLocaleString()} {isJa ? '語' : ' words'}</span>
              </div>
              <span className="text-gray-400 text-sm">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="border-t border-gray-100 divide-y divide-gray-100">
                {group.subCategories.map((sub) => {
                  const count = countMap[sub.key] ?? 0
                  return (
                    <Link
                      key={sub.key}
                      href={`/${locale}/category/category-${sub.key}`}
                      className="flex items-center justify-between px-6 py-2.5 hover:bg-purple-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{isJa ? sub.ja : sub.en}</span>
                      <span className="text-xs text-gray-400">{count.toLocaleString()} {isJa ? '語' : ' words'}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
