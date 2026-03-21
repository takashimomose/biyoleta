// assign_categories_991_1341.js
// Assigns category + subcategory to Excel rows 991–1341 (array indices 990–1340)
// then saves the file.

const xl = require('xlsx')
const path = require('path')

const FILE = path.join('c:/Users/mosor/Downloads', 'words_input - seiri.xlsx')

const wb = xl.readFile(FILE)
const ws = wb.Sheets['Sheet1']
const rows = xl.utils.sheet_to_json(ws, { header: 1 })

// Boundaries (array indices, inclusive on both ends)
// category col = index 3, subcategory col = index 4
const assignments = [
  { start: 990,  end: 1011, category: 'home',             subcategory: 'cleaning_laundry' },
  { start: 1012, end: 1029, category: 'home',             subcategory: 'grooming' },
  { start: 1030, end: 1069, category: 'home',             subcategory: 'clothing' },
  { start: 1070, end: 1087, category: 'home',             subcategory: 'sewing_fabric' },
  { start: 1088, end: 1105, category: 'appearance_qualities', subcategory: 'colors' },
  { start: 1106, end: 1126, category: 'society',          subcategory: 'community_places' },
  { start: 1127, end: 1164, category: 'society',          subcategory: 'shopping' },
  { start: 1165, end: 1182, category: 'society',          subcategory: 'money_banking' },
  { start: 1183, end: 1222, category: 'society',          subcategory: 'mail_communication' },
  { start: 1223, end: 1261, category: 'transport_travel', subcategory: 'transport_land' },
  { start: 1262, end: 1283, category: 'transport_travel', subcategory: 'transport_air_sea' },
  { start: 1284, end: 1297, category: 'transport_travel', subcategory: 'accommodation' },
  { start: 1298, end: 1318, category: 'society',          subcategory: 'work_employment' },
  { start: 1319, end: 1340, category: 'society',          subcategory: 'farming' },
]

// Show first and last word in each range before writing
console.log('--- Boundary preview ---')
for (const a of assignments) {
  const first = rows[a.start] ? String(rows[a.start][0] ?? '').trim() : '???'
  const last  = rows[a.end]   ? String(rows[a.end][0]   ?? '').trim() : '???'
  console.log(`[${a.start}–${a.end}] ${a.category}/${a.subcategory}: "${first}" → "${last}"`)
}

// Apply
let changed = 0
for (const a of assignments) {
  for (let i = a.start; i <= a.end; i++) {
    if (!rows[i]) continue
    // Ensure row has enough columns
    while (rows[i].length < 5) rows[i].push(null)
    rows[i][3] = a.category
    rows[i][4] = a.subcategory
    changed++
  }
}

// Write back
const newWs = xl.utils.aoa_to_sheet(rows)
wb.Sheets['Sheet1'] = newWs
xl.writeFile(wb, FILE)

console.log(`\nDone. ${changed} rows updated, file saved.`)
