import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function DictionaryPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('words')
  const isJa = locale === 'ja'

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>
      <h1 className="text-2xl font-bold mb-8">{t('title')}</h1>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {isJa ? (
          <>
            <Link href={`/${locale}/japanese-to-bisaya`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
              <span className="text-xs text-gray-400">日本語 → Bisaya</span>
              <span className="font-semibold text-sm" style={{ color: '#512376' }}>日本語→ビサヤ語</span>
            </Link>
            <Link href={`/${locale}/bisaya-to-japanese`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
              <span className="text-xs text-gray-400">Bisaya → 日本語</span>
              <span className="font-semibold text-sm" style={{ color: '#512376' }}>ビサヤ語→日本語</span>
            </Link>
          </>
        ) : (
          <>
            <Link href={`/${locale}/english-to-bisaya`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
              <span className="text-xs text-gray-400">EN → Bisaya</span>
              <span className="font-semibold text-sm" style={{ color: '#512376' }}>{t('englishToBisaya')}</span>
            </Link>
            <Link href={`/${locale}/bisaya-to-english`} className="card-3d flex flex-col items-center justify-center gap-1 p-4 text-center">
              <span className="text-xs text-gray-400">Bisaya → EN</span>
              <span className="font-semibold text-sm" style={{ color: '#512376' }}>{t('bisayaToEnglish')}</span>
            </Link>
          </>
        )}
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
