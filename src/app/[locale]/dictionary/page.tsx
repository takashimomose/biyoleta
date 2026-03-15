import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function DictionaryPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('words')

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">{t('back')}</Link>
      </div>
      <h1 className="text-2xl font-bold mb-8">{t('title')}</h1>

      <form action={`/${locale}/search`} method="get" className="w-full max-w-md mx-auto mb-8">
        <div className="flex flex-col gap-3">
          <input
            name="q"
            type="text"
            placeholder={t('placeholder')}
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50"
          />
          <button
            type="submit"
            className="btn-3d px-5 py-3 w-1/3 mx-auto"
          >
            {t('search')}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <Link href={`/${locale}/english-to-bisaya`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="text-xs text-gray-400">EN → Bisaya</span>
          <span className="font-semibold text-sm" style={{ color: '#512376' }}>{t('englishToBisaya')}</span>
        </Link>
        <Link href={`/${locale}/bisaya-to-english`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="text-xs text-gray-400">Bisaya → EN</span>
          <span className="font-semibold text-sm" style={{ color: '#512376' }}>{t('bisayaToEnglish')}</span>
        </Link>
        <Link href={`/${locale}/how-to-say`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
          <span className="text-xs text-gray-400">How to say</span>
          <span className="font-semibold text-sm" style={{ color: '#512376' }}>{t('howToSay')}</span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-1">
        {alphabet.map((letter) => (
          <Link
            key={letter}
            href={`/${locale}/dictionary/${letter}`}
            className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded border border-gray-200 hover:bg-purple-50 uppercase transition-colors"
            style={{ color: '#512376' }}
          >
            {letter}
          </Link>
        ))}
      </div>
    </main>
  )
}
