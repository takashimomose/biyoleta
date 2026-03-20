'use client'

import { createContext, useContext, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type ContextType = { goBack: (locale: string) => void }

const Context = createContext<ContextType>({ goBack: () => {} })

export function NavigationHistoryProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const stackRef = useRef<string[]>([])
  const skipNextRef = useRef(false)

  useEffect(() => {
    // 戻るボタンによる遷移はスタックに積まない
    if (skipNextRef.current) {
      skipNextRef.current = false
      return
    }

    const stack = stackRef.current
    const last = stack[stack.length - 1]

    // ロケール切り替えだけの場合（/en/xxx → /ja/xxx）はスタックトップを更新するだけ
    if (last) {
      const normLast = last.replace(/^\/(en|ja)/, '')
      const normNew = pathname.replace(/^\/(en|ja)/, '')
      if (normLast === normNew) {
        stackRef.current = [...stack.slice(0, -1), pathname]
        return
      }
    }

    stackRef.current = [...stack, pathname]
  }, [pathname])

  function goBack(locale: string) {
    const stack = stackRef.current
    if (stack.length >= 2) {
      const prevPath = stack[stack.length - 2]
      const localePath = prevPath.replace(/^\/(en|ja)/, `/${locale}`)
      stackRef.current = stack.slice(0, -1)
      skipNextRef.current = true
      router.push(localePath)
    } else {
      router.push(`/${locale}`)
    }
  }

  return <Context.Provider value={{ goBack }}>{children}</Context.Provider>
}

export function useNavHistory() {
  return useContext(Context)
}
