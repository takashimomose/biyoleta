import Link from 'next/link'
import Image from 'next/image'

type Props = { params: Promise<{ locale: string }> }

export const metadata = {
  title: 'Learn Bisaya',
  description: 'Learn Bisaya (Cebuano) — vocabulary, phrases, and more.',
}

export default async function LearnPage({ params }: Props) {
  const { locale } = await params

  const features = [
    { href: `/${locale}/dictionary`, label: 'Dictionary', desc: 'Browse 20,000+ Bisaya words', icon: '1F4D6' },
    { href: `/${locale}/phrase`, label: 'Phrases', desc: 'Common phrases by category', icon: '1F4AC' },
    { href: `/${locale}/quiz`, label: 'Quiz', desc: 'Test your knowledge', icon: '270F' },
    { href: `/${locale}/flashcards`, label: 'Flashcards', desc: 'Practice vocabulary', icon: '1F0CF' },
    { href: `/${locale}/category`, label: 'Categories', desc: 'Browse by topic', icon: '1F5C2' },
    { href: `/${locale}/translate`, label: 'Translate', desc: 'Translate words & phrases', icon: '1F504' },
  ]

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">← Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Learn Bisaya</h1>
      <p className="text-gray-500 text-sm mb-8">
        Start your journey learning Bisaya (Cebuano), one of the major languages of the Philippines.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {features.map(({ href, label, desc, icon }) => (
          <Link
            key={href}
            href={href}
            className="card-3d flex flex-col gap-2 p-5"
          >
            <Image src={`/openmoji/${icon}.svg`} alt={label} width={32} height={32} unoptimized />
            <p className="font-semibold text-sm" style={{ color: '#512376' }}>{label}</p>
            <p className="text-xs text-gray-400">{desc}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
