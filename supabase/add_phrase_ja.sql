-- phrasesテーブルにmeaning_jaを追加
ALTER TABLE phrases ADD COLUMN meaning_ja TEXT;

-- 既存データに日本語訳を追加
UPDATE phrases SET meaning_ja = 'おはようございます！' WHERE phrase = 'Maayong buntag!';
UPDATE phrases SET meaning_ja = 'こんにちは！' WHERE phrase = 'Maayong hapon!';
UPDATE phrases SET meaning_ja = 'こんばんは！' WHERE phrase = 'Maayong gabii!';
UPDATE phrases SET meaning_ja = '元気ですか？' WHERE phrase = 'Kumusta ka?';
UPDATE phrases SET meaning_ja = 'ありがとうございます！' WHERE phrase = 'Salamat kaayo!';
UPDATE phrases SET meaning_ja = 'どういたしまして。' WHERE phrase = 'Walay sapayan.';
UPDATE phrases SET meaning_ja = 'お名前は何ですか？' WHERE phrase = 'Unsa imong ngalan?';
UPDATE phrases SET meaning_ja = 'どこから来ましたか？' WHERE phrase = 'Diin ka gikan?';
UPDATE phrases SET meaning_ja = '〜が欲しいです。' WHERE phrase = 'Gusto ko ug...';
UPDATE phrases SET meaning_ja = '値段はいくらですか？' WHERE phrase = 'Pila ang presyo?';
