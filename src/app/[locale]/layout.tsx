import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { NavigationHistoryProvider } from '@/components/NavigationHistoryProvider'
import HeaderLocaleSwitcher from '@/components/HeaderLocaleSwitcher'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'site' })
  return {
    title: { default: t('name'), template: `%s | Biyoleta` },
    description: t('description'),
    openGraph: { siteName: t('name'), type: 'website' },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
    <NavigationHistoryProvider>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link href={`/${locale}`} aria-label="Top page">
          <Image src="/logo.svg" alt="Biyoleta" width={28} height={35} priority />
        </Link>
        <HeaderLocaleSwitcher />
      </header>
      <div className="pt-[52px] pb-[36px]">
        {children}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 py-2 text-xs bg-white/80 backdrop-blur-sm border-t border-gray-100" style={{ color: '#7a3aad' }}>
        <span>© {new Date().getFullYear()} Biyoleta</span>
        <span className="text-gray-300">|</span>
        <Link href="/en/privacy-policy" className="hover:opacity-70">Privacy Policy</Link>
      </footer>
    </NavigationHistoryProvider>
    </NextIntlClientProvider>
  )
}
