'use client'

import { useRouter } from 'next/navigation'
import { useRef, type ReactNode } from 'react'

type Props = {
  currentPage: number
  totalPages: number
  basePath: string
  children: ReactNode
}

export default function SwipePageWrapper({ currentPage, totalPages, basePath, children }: Props) {
  const router = useRouter()
  const startX = useRef<number | null>(null)

  function handleTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    // Require at least 60px swipe to trigger
    if (Math.abs(diff) < 60) return

    if (diff > 0 && currentPage < totalPages) {
      router.push(`${basePath}?page=${currentPage + 1}`)
    } else if (diff < 0 && currentPage > 1) {
      router.push(`${basePath}?page=${currentPage - 1}`)
    }
    startX.current = null
  }

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  )
}
