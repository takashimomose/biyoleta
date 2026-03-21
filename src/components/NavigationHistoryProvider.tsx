'use client'

import { createContext, useContext, useEffect, useRef, Suspense } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type ContextType = { goBack: (locale: string) => void }

const Context = createContext<ContextType>({ goBack: () => {} })

// useSearchParams() requires Suspense — isolated in this component
function HistoryTracker({
  stackRef,
  skipNextRef,
}: {
  stackRef: React.MutableRefObject<string[]>
  skipNextRef: React.MutableRefObject<boolean>
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')

  useEffect(() => {
    if (skipNextRef.current) {
      skipNextRef.current = false
      return
    }

    const stack = stackRef.current
    const last = stack[stack.length - 1]

    if (last) {
      // ロケール切り替えの場合（パス部分が同じ）はスタックトップを更新するだけ
      const normLast = last.split('?')[0].replace(/^\/(en|ja)/, '')
      const normNew = pathname.replace(/^\/(en|ja)/, '')
      if (normLast === normNew) {
        stackRef.current = [...stack.slice(0, -1), fullPath]
        return
      }
    }

    stackRef.current = [...stack, fullPath]
  }, [fullPath]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}

export function NavigationHistoryProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const stackRef = useRef<string[]>([])
  const skipNextRef = useRef(false)

  function goBack(locale: string) {
    const stack = stackRef.current
    if (stack.length >= 2) {
      const prevPath = stack[stack.length - 2]
      // ロケールプレフィックスだけ置換（クエリパラメータはそのまま保持）
      const localePath = prevPath.replace(/^\/(en|ja)/, `/${locale}`)
      stackRef.current = stack.slice(0, -1)
      skipNextRef.current = true
      router.push(localePath)
    } else {
      router.push(`/${locale}`)
    }
  }

  return (
    <Context.Provider value={{ goBack }}>
      <Suspense>
        <HistoryTracker stackRef={stackRef} skipNextRef={skipNextRef} />
      </Suspense>
      {children}
    </Context.Provider>
  )
}

export function useNavHistory() {
  return useContext(Context)
}
