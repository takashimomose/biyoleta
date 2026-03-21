'use client'

import { useState, useCallback } from 'react'

type FlashcardWord = {
  word: string
  meaning_en: string
  meaning_ja: string
  category: string | null
}

type CategoryOption = {
  key: string
  en: string
  ja: string
}

type Mode = 'bisaya-to-en' | 'en-to-bisaya'

type Messages = {
  modeLabel: string
  modeBisayaToEn: string
  modeEnToBisaya: string
  categoryLabel: string
  categoryAll: string
  start: string
  tapToFlip: string
  know: string
  dontKnow: string
  card: string
  result: string
  known: string
  unknown: string
  retry: string
  retryUnknown: string
  backHome: string
}

type Props = {
  words: FlashcardWord[]
  locale: string
  messages: Messages
  categories: CategoryOption[]
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function Flashcards({ words, locale, messages: m, categories }: Props) {
  const isJa = locale === 'ja'
  const [mode, setMode] = useState<Mode>('bisaya-to-en')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [deck, setDeck] = useState<FlashcardWord[] | null>(null)
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<FlashcardWord[]>([])
  const [unknown, setUnknown] = useState<FlashcardWord[]>([])
  const [finished, setFinished] = useState(false)

  const getPool = useCallback((cat: string | null) => {
    return cat ? words.filter((w) => w.category === cat) : words
  }, [words])

  const start = useCallback((cardSet: FlashcardWord[]) => {
    setDeck(shuffle(cardSet))
    setCurrent(0)
    setFlipped(false)
    setKnown([])
    setUnknown([])
    setFinished(false)
  }, [])

  const handleFlip = () => setFlipped(true)

  const handleKnow = () => {
    setKnown((k) => [...k, deck![current]])
    advance()
  }

  const handleDontKnow = () => {
    setUnknown((u) => [...u, deck![current]])
    advance()
  }

  const advance = () => {
    if (current + 1 >= deck!.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setFlipped(false)
    }
  }

  const card = deck?.[current]
  const front = card ? (mode === 'bisaya-to-en' ? card.word : (isJa ? card.meaning_ja : card.meaning_en)) : ''
  const back  = card ? (mode === 'bisaya-to-en' ? (isJa ? card.meaning_ja : card.meaning_en) : card.word) : ''

  // Start screen
  if (!deck) {
    const categoryCounts: Record<string, number> = {}
    for (const w of words) {
      if (w.category) categoryCounts[w.category] = (categoryCounts[w.category] ?? 0) + 1
    }

    return (
      <div className="flex flex-col items-center gap-8">
        {/* Mode */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-500 text-sm">{m.modeLabel}</p>
          <div className="flex gap-3">
            {(['bisaya-to-en', 'en-to-bisaya'] as Mode[]).map((m2) => (
              <button
                key={m2}
                onClick={() => setMode(m2)}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  mode === m2 ? 'text-white border-transparent' : 'border-gray-300 text-gray-600'
                }`}
                style={mode === m2 ? { backgroundColor: '#512376' } : {}}
              >
                {m2 === 'bisaya-to-en' ? m.modeBisayaToEn : m.modeEnToBisaya}
              </button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="w-full flex flex-col items-center gap-3">
          <p className="text-gray-500 text-sm">{m.categoryLabel}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                selectedCategory === null ? 'text-white border-transparent' : 'border-gray-300 text-gray-600'
              }`}
              style={selectedCategory === null ? { backgroundColor: '#512376' } : {}}
            >
              {m.categoryAll}
            </button>
            {categories
              .filter((c) => (categoryCounts[c.key] ?? 0) >= 1)
              .map((c) => (
                <button
                  key={c.key}
                  onClick={() => setSelectedCategory(c.key)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                    selectedCategory === c.key ? 'text-white border-transparent' : 'border-gray-300 text-gray-600'
                  }`}
                  style={selectedCategory === c.key ? { backgroundColor: '#512376' } : {}}
                >
                  {isJa ? c.ja : c.en}
                  <span className="ml-1 text-xs opacity-60">{categoryCounts[c.key] ?? 0}</span>
                </button>
              ))}
          </div>
        </div>

        <button
          onClick={() => start(getPool(selectedCategory))}
          className="px-8 py-3 text-white rounded-full hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#512376' }}
        >
          {m.start}
        </button>
      </div>
    )
  }

  // Result screen
  if (finished) {
    const pct = known.length / deck.length
    return (
      <div className="flex flex-col items-center gap-6 w-full">
        <h2 className="text-2xl font-bold">{m.result}</h2>
        <div className="flex gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-green-500">{known.length}</p>
            <p className="text-sm text-gray-400 mt-1">{m.known}</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-400">{unknown.length}</p>
            <p className="text-sm text-gray-400 mt-1">{m.unknown}</p>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2 max-w-xs">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${pct * 100}%` }}
          />
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          {unknown.length > 0 && (
            <button
              onClick={() => start(unknown)}
              className="px-6 py-3 text-white rounded-full hover:opacity-90 transition-colors text-sm"
              style={{ backgroundColor: '#512376' }}
            >
              {m.retryUnknown} ({unknown.length})
            </button>
          )}
          <button
            onClick={() => start(getPool(selectedCategory))}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-600 hover:bg-purple-50 transition-colors text-sm"
          >
            {m.retry}
          </button>
        </div>
      </div>
    )
  }

  const cardLabel = m.card
    .replace('{current}', String(current + 1))
    .replace('{total}', String(deck.length))

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-gray-400">{cardLabel}</p>
        <div className="flex gap-3 text-sm">
          <span className="text-green-500">{known.length} ✓</span>
          <span className="text-red-400">{unknown.length} ✗</span>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full transition-all"
          style={{ width: `${(current / deck.length) * 100}%`, backgroundColor: '#512376' }}
        />
      </div>

      <div
        className="w-full cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={!flipped ? handleFlip : undefined}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: '220px',
          }}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-gray-100 p-8"
            style={{ backfaceVisibility: 'hidden', backgroundColor: 'white' }}
          >
            <p className="text-4xl font-bold text-center mb-4" style={{ color: '#512376' }}>{front}</p>
            <p className="text-xs text-gray-400">{m.tapToFlip}</p>
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 p-8"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              borderColor: '#512376',
              backgroundColor: 'white',
            }}
          >
            <p className="text-3xl font-bold text-center" style={{ color: '#512376' }}>{back}</p>
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="flex gap-4 w-full">
          <button
            onClick={handleDontKnow}
            className="flex-1 py-4 rounded-2xl border-2 border-red-300 text-red-400 font-semibold hover:bg-red-50 transition-colors"
          >
            ✗ {m.dontKnow}
          </button>
          <button
            onClick={handleKnow}
            className="flex-1 py-4 rounded-2xl border-2 border-green-400 text-green-500 font-semibold hover:bg-green-50 transition-colors"
          >
            ✓ {m.know}
          </button>
        </div>
      ) : (
        <div className="h-[60px]" />
      )}
    </div>
  )
}
