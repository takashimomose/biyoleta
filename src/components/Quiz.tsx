'use client'

import { useState, useCallback } from 'react'

type QuizWord = {
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

type Question = {
  prompt: string
  answer: string
  choices: string[]
}

type Messages = {
  modeLabel: string
  modeBisayaToEn: string
  modeEnToBisaya: string
  categoryLabel: string
  categoryAll: string
  start: string
  question: string
  correct: string
  incorrect: string
  correctAnswer: string
  next: string
  result: string
  score: string
  excellent: string
  good: string
  keep: string
  retry: string
  backHome: string
}

type Props = {
  words: QuizWord[]
  locale: string
  messages: Messages
  categories: CategoryOption[]
}

const TOTAL = 10

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function buildQuestions(words: QuizWord[], mode: Mode, isJa: boolean): Question[] {
  const pool = shuffle(words).slice(0, TOTAL)
  return pool.map((w) => {
    const prompt = mode === 'bisaya-to-en' ? w.word : (isJa ? w.meaning_ja : w.meaning_en)
    const answer = mode === 'bisaya-to-en' ? (isJa ? w.meaning_ja : w.meaning_en) : w.word
    const distractors = shuffle(
      words
        .filter((x) => x.word !== w.word)
        .map((x) => mode === 'bisaya-to-en' ? (isJa ? x.meaning_ja : x.meaning_en) : x.word)
    ).slice(0, 3)
    return { prompt, answer, choices: shuffle([answer, ...distractors]) }
  })
}

export default function Quiz({ words, locale, messages: m, categories }: Props) {
  const isJa = locale === 'ja'
  const [mode, setMode] = useState<Mode>('bisaya-to-en')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [questions, setQuestions] = useState<Question[] | null>(null)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const filteredWords = selectedCategory
    ? words.filter((w) => w.category === selectedCategory)
    : words

  const start = useCallback(() => {
    const pool = selectedCategory ? words.filter((w) => w.category === selectedCategory) : words
    setQuestions(buildQuestions(pool, mode, isJa))
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }, [words, mode, isJa, selectedCategory])

  const handleSelect = (choice: string) => {
    if (selected) return
    setSelected(choice)
    if (choice === questions![current].answer) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current + 1 >= TOTAL) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  // Start screen
  if (!questions) {
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
              .filter((c) => (categoryCounts[c.key] ?? 0) >= 4)
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
          onClick={start}
          disabled={filteredWords.length < 4}
          className="px-8 py-3 text-white rounded-full hover:opacity-90 transition-colors disabled:opacity-40"
          style={{ backgroundColor: '#512376' }}
        >
          {m.start}
        </button>
      </div>
    )
  }

  // Result screen
  if (finished || current >= questions.length) {
    const pct = score / TOTAL
    const comment = pct === 1 ? m.excellent : pct >= 0.6 ? m.good : m.keep
    return (
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">{m.result}</h2>
        <p className="text-4xl sm:text-6xl font-bold">{score}<span className="text-2xl text-gray-400"> / {TOTAL}</span></p>
        <p className="text-lg text-gray-600">{comment}</p>
        <button
          onClick={start}
          className="px-8 py-3 text-white rounded-full hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#512376' }}
        >
          {m.retry}
        </button>
      </div>
    )
  }

  const q = questions[current]
  const isCorrect = selected === q.answer

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-400">
          {m.question.replace('{current}', String(current + 1)).replace('{total}', String(TOTAL))}
        </p>
        <p className="text-sm font-medium">{score} pts</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-8">
        <div
          className="bg-black h-1.5 rounded-full transition-all"
          style={{ width: `${((current) / TOTAL) * 100}%` }}
        />
      </div>

      <p className="text-2xl sm:text-4xl font-bold text-center mb-10">{q.prompt}</p>

      <div className="grid grid-cols-1 gap-3 mb-8">
        {q.choices.map((choice) => {
          let style = 'border border-gray-200 hover:bg-[#512376] hover:text-white'
          if (selected) {
            if (choice === q.answer) style = 'border-2 border-green-500 bg-green-50'
            else if (choice === selected) style = 'border-2 border-red-400 bg-red-50'
            else style = 'border border-gray-200 opacity-50'
          }
          return (
            <button
              key={choice}
              onClick={() => handleSelect(choice)}
              className={`w-full text-left px-5 py-4 rounded-xl transition-colors ${style}`}
            >
              {choice}
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="flex items-center justify-between">
          <p className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? m.correct : `${m.incorrect} — ${m.correctAnswer.replace('{answer}', q.answer)}`}
          </p>
          <button
            onClick={handleNext}
            className="px-6 py-2 text-white rounded-full hover:opacity-90 transition-colors"
            style={{ backgroundColor: '#512376' }}
          >
            {m.next}
          </button>
        </div>
      )}
    </div>
  )
}
