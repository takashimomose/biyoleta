'use client'

import { useLocale } from 'next-intl'
import { useNavHistory } from './NavigationHistoryProvider'

export default function BackButton({ label = '← 戻る' }: { label?: string }) {
  const locale = useLocale()
  const { goBack } = useNavHistory()

  return (
    <button onClick={() => goBack(locale)} className="text-sm text-gray-500 hover:opacity-70">
      {label}
    </button>
  )
}
