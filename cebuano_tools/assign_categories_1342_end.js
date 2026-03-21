const xl = require('xlsx')
const path = require('path')

const FILE = path.join('c:/Users/mosor/Downloads', 'words_input - seiri.xlsx')
const wb = xl.readFile(FILE)
const ws = wb.Sheets['Sheet1']
const rows = xl.utils.sheet_to_json(ws, { header: 1 })

const assignments = [
  { start: 1341, end: 1379, category: 'society',          subcategory: 'work_employment' },
  { start: 1380, end: 1417, category: 'entertainment',    subcategory: 'games_leisure' },
  { start: 1418, end: 1438, category: 'entertainment',    subcategory: 'traditional_games' },
  { start: 1439, end: 1458, category: 'health',           subcategory: 'medical_care' },
  { start: 1459, end: 1475, category: 'health',           subcategory: 'symptoms_illness' },
  { start: 1476, end: 1494, category: 'health',           subcategory: 'diseases' },
  { start: 1495, end: 1515, category: 'society',          subcategory: 'crime_safety' },
  { start: 1516, end: 1577, category: 'society',          subcategory: 'politics_government' },
  { start: 1578, end: 1595, category: 'society',          subcategory: 'history' },
  { start: 1596, end: 1628, category: 'culture_religion', subcategory: 'religion' },
  { start: 1629, end: 1638, category: 'culture_religion', subcategory: 'mythology_folklore' },
  { start: 1639, end: 1658, category: 'society',          subcategory: 'media_news' },
  { start: 1659, end: 1678, category: 'numbers',          subcategory: 'measurements' },
  { start: 1679, end: 1695, category: 'grammar',          subcategory: 'adverbs' },
  { start: 1696, end: 1713, category: 'grammar',          subcategory: 'particles' },
  { start: 1714, end: 1732, category: 'grammar',          subcategory: 'conjunctions' },
]

console.log('--- Boundary preview ---')
for (const a of assignments) {
  const first = rows[a.start] ? String(rows[a.start][0] ?? '').trim() : '???'
  const last  = rows[a.end]   ? String(rows[a.end][0]   ?? '').trim() : '???'
  console.log(`[${a.start}–${a.end}] ${a.category}/${a.subcategory}: "${first}" → "${last}"`)
}

let changed = 0
for (const a of assignments) {
  for (let i = a.start; i <= a.end; i++) {
    if (!rows[i]) continue
    while (rows[i].length < 5) rows[i].push(null)
    rows[i][3] = a.category
    rows[i][4] = a.subcategory
    changed++
  }
}

const newWs = xl.utils.aoa_to_sheet(rows)
wb.Sheets['Sheet1'] = newWs
xl.writeFile(wb, FILE)
console.log(`\nDone. ${changed} rows updated, file saved.`)
