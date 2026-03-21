// clear_and_import.js
// Truncates words + meanings, then imports bisaya_500.csv

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, '.env')
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
})

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++ }
      else inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      result.push(current); current = ''
    } else {
      current += ch
    }
  }
  result.push(current)
  return result
}

function parseCSV(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n').filter(l => l.trim())
  const headers = parseCSVLine(lines[0])
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line)
    const obj = {}
    headers.forEach((h, i) => { obj[h] = values[i] ?? '' })
    return obj
  })
}

async function main() {
  // 1. Truncate (meanings first due to FK)
  console.log('Truncating meanings...')
  const { error: e1 } = await supabase.from('meanings').delete().neq('id', 0)
  if (e1) { console.error('Error truncating meanings:', e1.message); process.exit(1) }

  console.log('Truncating words...')
  const { error: e2 } = await supabase.from('words').delete().neq('id', 0)
  if (e2) { console.error('Error truncating words:', e2.message); process.exit(1) }

  console.log('Tables cleared.')

  // 2. Import CSV
  const rows = parseCSV(fs.readFileSync(path.join(__dirname, 'bisaya_500.csv'), 'utf8'))
  console.log(`Importing ${rows.length} rows...`)

  let inserted = 0
  let errors = 0

  for (const row of rows) {
    const { word, language, part_of_speech, category, meaning_en, meaning_ja, example } = row
    if (!word) continue

    const { data: newWord, error: wordError } = await supabase
      .from('words')
      .insert({
        word,
        language: language || 'ceb',
        part_of_speech: part_of_speech || null,
        category: category || null,
      })
      .select('id')
      .single()

    if (wordError) {
      console.error(`[ERROR word] "${word}": ${wordError.message}`)
      errors++
      continue
    }

    const { error: meaningError } = await supabase
      .from('meanings')
      .insert({
        word_id: newWord.id,
        meaning_en: meaning_en || null,
        meaning_ja: meaning_ja || null,
        example: example || null,
      })

    if (meaningError) {
      console.error(`[ERROR meaning] "${word}": ${meaningError.message}`)
      errors++
    } else {
      inserted++
      if (inserted % 50 === 0) console.log(`  ${inserted} inserted...`)
    }
  }

  console.log(`\nDone. inserted=${inserted} errors=${errors}`)
}

main().catch(err => { console.error(err); process.exit(1) })
