// migrate_and_import.js
// 1. Add subcategory column to words
// 2. Update get_category_counts RPC
// 3. Truncate words + meanings
// 4. Import from Excel

const { Client } = require('pg')
const xl = require('xlsx')
const path = require('path')
const fs = require('fs')

const envPath = path.join(__dirname, '.env')
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
})

const DB_URL = process.env.DB_URL

async function main() {
  const client = new Client({ connectionString: DB_URL })
  await client.connect()
  console.log('Connected to DB.')

  // 1. Add subcategory column if not exists
  console.log('\n--- Step 1: Add subcategory column ---')
  await client.query(`
    ALTER TABLE words
    ADD COLUMN IF NOT EXISTS subcategory text
  `)
  console.log('subcategory column ready.')

  // 2. Update get_category_counts RPC to count by subcategory
  console.log('\n--- Step 2: Update get_category_counts RPC ---')
  await client.query(`DROP FUNCTION IF EXISTS get_category_counts()`)
  await client.query(`
    CREATE FUNCTION get_category_counts()
    RETURNS TABLE (subcategory text, count bigint)
    LANGUAGE sql
    AS $$
      SELECT subcategory, COUNT(*) AS count
      FROM words
      WHERE subcategory IS NOT NULL
      GROUP BY subcategory
    $$
  `)
  console.log('RPC updated.')

  // 3. Truncate (meanings first due to FK)
  console.log('\n--- Step 3: Truncate tables ---')
  await client.query('TRUNCATE TABLE meanings, words RESTART IDENTITY CASCADE')
  console.log('Tables truncated.')

  // 4. Read Excel
  console.log('\n--- Step 4: Import from Excel ---')
  const wb = xl.readFile(path.join('c:/Users/mosor/Downloads', 'words_input - seiri.xlsx'))
  const ws = wb.Sheets['Sheet1']
  const rows = xl.utils.sheet_to_json(ws, { header: 1 })

  // rows[0] = Column headers, rows[1] = field names, rows[2..] = data
  let inserted = 0
  let errors = 0

  for (let i = 2; i < rows.length; i++) {
    const r = rows[i]
    const word        = r[0] ? String(r[0]).trim() : null
    const language    = r[1] ? String(r[1]).trim() : 'ceb'
    const pos         = r[2] ? String(r[2]).trim() : null
    const category    = r[3] ? String(r[3]).trim() : null
    const subcategory = r[4] ? String(r[4]).trim() : null
    const meaning_en  = r[5] ? String(r[5]).trim() : null
    const meaning_ja  = r[6] ? String(r[6]).trim() : null

    if (!word) continue

    try {
      const wordRes = await client.query(
        `INSERT INTO words (word, language, part_of_speech, category, subcategory)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [word, language, pos, category, subcategory]
      )
      const wordId = wordRes.rows[0].id

      await client.query(
        `INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
         VALUES ($1, $2, $3, NULL)`,
        [wordId, meaning_en, meaning_ja]
      )

      inserted++
      if (inserted % 100 === 0) console.log(`  ${inserted} inserted...`)
    } catch (err) {
      console.error(`[ERROR] row ${i} "${word}": ${err.message}`)
      errors++
    }
  }

  console.log(`\nDone. inserted=${inserted} errors=${errors}`)
  await client.end()
}

main().catch(err => { console.error(err); process.exit(1) })
