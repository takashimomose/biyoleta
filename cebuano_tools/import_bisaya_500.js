// import_bisaya_500.js
// Usage: node import_bisaya_500.js
//
// Reads bisaya_500.csv and inserts into words + meanings tables.
// Set SUPABASE_URL and SUPABASE_SERVICE_KEY in .env (same folder) or environment.

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load .env from the same directory
const envPath = path.join(__dirname, '.env')
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
  })
}

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

// Minimal CSV parser that handles quoted fields
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
      result.push(current)
      current = ''
    } else {
      current += ch
    }
  }
  result.push(current)
  return result
}

async function main() {
  const csvPath = path.join(__dirname, 'bisaya_500.csv')
  const rows = parseCSV(fs.readFileSync(csvPath, 'utf8'))
  console.log(`Loaded ${rows.length} rows from CSV`)

  let inserted = 0
  let skipped = 0
  let errors = 0

  for (const row of rows) {
    const { word, language, part_of_speech, category, meaning_en, meaning_ja, example } = row

    if (!word || !meaning_en) { skipped++; continue }

    // Check if word already exists
    const { data: existing } = await supabase
      .from('words')
      .select('id')
      .eq('word', word)
      .maybeSingle()

    let wordId

    if (existing) {
      wordId = existing.id
      console.log(`  [SKIP word] "${word}" already exists (id=${wordId})`)
    } else {
      const { data: newWord, error: wordError } = await supabase
        .from('words')
        .insert({ word, language: language || 'ceb', part_of_speech: part_of_speech || null, category: category || null })
        .select('id')
        .single()

      if (wordError) {
        console.error(`  [ERROR] inserting word "${word}": ${wordError.message}`)
        errors++
        continue
      }
      wordId = newWord.id
      console.log(`  [+word] "${word}" (id=${wordId})`)
    }

    // Check if meaning already exists for this word
    const { data: existingMeaning } = await supabase
      .from('meanings')
      .select('id')
      .eq('word_id', wordId)
      .maybeSingle()

    if (existingMeaning) {
      console.log(`  [SKIP meaning] word_id=${wordId} already has meaning`)
      skipped++
      continue
    }

    const { error: meaningError } = await supabase
      .from('meanings')
      .insert({
        word_id: wordId,
        meaning_en: meaning_en || null,
        meaning_ja: meaning_ja || null,
        example: example || null,
      })

    if (meaningError) {
      console.error(`  [ERROR] inserting meaning for "${word}": ${meaningError.message}`)
      errors++
    } else {
      inserted++
    }
  }

  console.log(`\nDone. inserted=${inserted} skipped=${skipped} errors=${errors}`)
}

main().catch(err => { console.error(err); process.exit(1) })
