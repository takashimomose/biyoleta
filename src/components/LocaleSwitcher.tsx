'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex gap-1 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 rounded ${locale === 'en' ? 'text-white' : 'text-gray-400 hover:text-[#512376]'}`}
        style={locale === 'en' ? { backgroundColor: '#512376' } : {}}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('ja')}
        className={`px-3 py-1.5 rounded ${locale === 'ja' ? 'text-white' : 'text-gray-400 hover:text-[#512376]'}`}
        style={locale === 'ja' ? { backgroundColor: '#512376' } : {}}
      >
        JA
      </button>
    </div>
  )
}
