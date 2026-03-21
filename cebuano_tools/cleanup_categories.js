// cleanup_categories.js
// - social_titles / professions_2 / social_groups のワードを削除
// - life_stages の en 表示は word-categories.ts 側で変更済み（DB keyはそのまま）

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs'), path = require('path')

fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split('\n').forEach(line => {
  const [k, ...v] = line.split('='); if (k && v.length) process.env[k.trim()] = v.join('=').trim()
})

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function main() {
  const toDelete = ['social_titles', 'professions_2', 'social_groups']

  for (const cat of toDelete) {
    const { data: words } = await supabase.from('words').select('id, word').eq('category', cat)
    if (!words || words.length === 0) { console.log(`[${cat}] 0件 → スキップ`); continue }

    const ids = words.map(w => w.id)
    console.log(`[${cat}] ${words.length}件: ${words.map(w => w.word).join(', ')}`)

    // meanings を先に削除
    await supabase.from('meanings').delete().in('word_id', ids)
    // words を削除
    const { error } = await supabase.from('words').delete().in('id', ids)
    if (error) console.error(`  削除エラー: ${error.message}`)
    else console.log(`  → 削除完了`)
  }

  console.log('\n完了')
}

main().catch(console.error)
