import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

type Props = { params: Promise<{ locale: string }> }

async function handleSearch(locale: string, formData: FormData) {
  'use server'
  const q = formData.get('q')?.toString().trim()
  if (q) redirect(`/${locale}/search?q=${encodeURIComponent(q)}`)
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('home')

  const search = handleSearch.bind(null, locale)

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-8 pt-10 overflow-hidden">
      <div className="fixed inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-10 pointer-events-none -z-10" />

      <Image src="/biyoleta.svg" alt="Biyoleta" width={200} height={59} priority unoptimized className="mb-4 animate-drop-bounce" />
      <p className="mb-1 text-lg font-semibold" style={{ color: '#512376' }}>{t('subtitle')}</p>
      <p className="mb-12 text-xs" style={{ color: '#7a3aad' }}>{t('description')}</p>

      <form action={search} className="w-full max-w-md mb-10">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="q"
            placeholder={t('placeholder')}
            className="w-full rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400 border border-gray-200 focus:ring-[#512376]/50 relative z-10"
            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
          />
          <button
            type="submit"
            className="btn-3d px-5 py-3 w-1/3 mx-auto"
          >
            {t('search')}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-4 w-full max-w-md items-stretch">
        {[
          { href: `/${locale}/words`,      label: t('browseWords'),   icon: '1F4D6' },
          { href: `/${locale}/phrases`,    label: t('browsePhrases'), icon: '1F4AC' },
          { href: `/${locale}/translate`,  label: t('translate'),     icon: '1F504' },
          { href: `/${locale}/categories`, label: t('browse'),        icon: '1F5C2' },
          { href: `/${locale}/quiz`,       label: t('quiz'),          icon: '270F'  },
        ].map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="card-3d flex flex-col items-center justify-center gap-2 px-3 min-h-[90px]"
          >
            <Image
              src={`/openmoji/${icon}.svg`}
              alt={label}
              width={36}
              height={36}
              unoptimized
            />
            <span className="text-sm font-semibold text-center" style={{ color: '#512376' }}>{label}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
