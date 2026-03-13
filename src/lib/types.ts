export type Word = {
  id: number
  word: string
  language: string | null
  part_of_speech: string | null
  category: string | null
  created_at: string
}

export type Meaning = {
  id: number
  word_id: number
  meaning_en: string | null
  meaning_ja: string | null
  example: string | null
}

export type WordWithMeanings = Word & {
  meanings: Meaning[]
}
