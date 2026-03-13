import Link from 'next/link'

type Props = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null

  const prev = currentPage - 1
  const next = currentPage + 1

  const pageUrl = (p: number) => `${basePath}?page=${p}`

  // Show at most 5 page numbers around current
  const pages: (number | '...')[] = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={pageUrl(prev)}
          className="px-3 py-2 text-sm text-gray-500 hover:text-black transition-colors"
        >
          ←
        </Link>
      )}

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 py-2 text-sm text-gray-300">…</span>
        ) : (
          <Link
            key={p}
            href={pageUrl(p)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm transition-colors ${
              p === currentPage
                ? 'text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          style={p === currentPage ? { backgroundColor: '#512376' } : {}}
          >
            {p}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={pageUrl(next)}
          className="px-3 py-2 text-sm text-gray-500 hover:text-black transition-colors"
        >
          →
        </Link>
      )}
    </nav>
  )
}
