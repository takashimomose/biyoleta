const xl = require('xlsx')
const path = require('path')

const FILE = path.join('c:/Users/mosor/Downloads', 'words_input - seiri.xlsx')
const wb = xl.readFile(FILE)
const ws = wb.Sheets['Sheet1']
const rows = xl.utils.sheet_to_json(ws, { header: 1 })

console.log(`Total rows: ${rows.length}`)
console.log('\n--- Rows from index 1341 onwards (row 1342+) ---')
for (let i = 1341; i < rows.length; i++) {
  const r = rows[i]
  if (!r || !r[0]) continue
  console.log(`[${i}] word="${r[0]}" pos="${r[2]||''}" cat="${r[3]||''}" sub="${r[4]||''}" en="${r[5]||''}" ja="${r[6]||''}"`)
}
