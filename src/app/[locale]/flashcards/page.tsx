import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export const metadata = {
  title: 'Bisaya Flashcards',
  description: 'Practice Bisaya (Cebuano) vocabulary with flashcards.',
}

export default async function FlashcardsPage({ params }: Props) {
  const { locale } = await params

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:underline">← Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Flashcards</h1>
      <p className="text-gray-500 text-sm mb-8 text-center">
        Practice Bisaya vocabulary with interactive flashcards. Coming soon.
      </p>
      <div className="flex gap-4">
        <Link href={`/${locale}/quiz`} className="btn-3d px-6 py-3">
          Try Quiz instead
        </Link>
        <Link href={`/${locale}/dictionary`} className="border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          Browse Dictionary
        </Link>
      </div>
    </main>
  )
}
