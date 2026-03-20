'use client'

import { usePathname } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'

export default function HeaderLocaleSwitcher() {
  const pathname = usePathname()
  const isHome = pathname === '/' || /^\/ja\/?$/.test(pathname)
  if (!isHome) return null
  return <LocaleSwitcher />
}
