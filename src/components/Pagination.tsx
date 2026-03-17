import Link from 'next/link'

type Props = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null

  const pageUrl = (p: number) => `${basePath}?page=${p}`

  // Show first, last, current ±1, with ellipsis for gaps
  const pages: (number | null)[] = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== null) {
      pages.push(null)
    }
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-8 flex-wrap">
      {currentPage > 1 && (
        <Link href={pageUrl(currentPage - 1)} className="btn-page">←</Link>
      )}
      {pages.map((p, i) =>
        p === null ? (
          <span key={`e-${i}`} className="px-1 text-gray-400 text-sm select-none">…</span>
        ) : (
          <Link
            key={p}
            href={pageUrl(p)}
            className={`btn-page ${p === currentPage ? 'btn-page-active' : ''}`}
          >
            {p}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link href={pageUrl(currentPage + 1)} className="btn-page">→</Link>
      )}
    </div>
  )
}
