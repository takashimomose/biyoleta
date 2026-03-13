ALTER TABLE words ADD COLUMN category TEXT;

UPDATE words SET category = 'greetings'  WHERE word IN ('maayo', 'salamat');
UPDATE words SET category = 'daily_life' WHERE word IN ('tubig', 'balay', 'kaon');

-- phrases テーブルにcategoryカラムを追加
ALTER TABLE phrases ADD COLUMN category TEXT;
