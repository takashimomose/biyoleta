-- 既存データを削除して入れ直す
TRUNCATE TABLE phrases RESTART IDENTITY;

INSERT INTO phrases (phrase, meaning_en, meaning_ja, example, category) VALUES
  ('Maayong buntag!',   'Good morning!',              'おはようございます！',       'Maayong buntag! Kumusta ka?',          'greetings'),
  ('Maayong hapon!',    'Good afternoon!',             'こんにちは！',               'Maayong hapon! Naa ka sa balay?',      'greetings'),
  ('Maayong gabii!',    'Good evening!',               'こんばんは！',               'Maayong gabii! Kaon na ta.',           'greetings'),
  ('Kumusta ka?',       'How are you?',                '元気ですか？',               'Kumusta ka? Maayo man ko.',            'greetings'),
  ('Salamat kaayo!',    'Thank you very much!',        'ありがとうございます！',     'Salamat kaayo sa imong tabang.',       'gratitude'),
  ('Walay sapayan.',    'You''re welcome. / No problem.', 'どういたしまして。',      'A, walay sapayan!',                    'gratitude'),
  ('Unsa imong ngalan?','What is your name?',          'お名前は何ですか？',         'Unsa imong ngalan? Ako si Maria.',     'introduction'),
  ('Diin ka gikan?',    'Where are you from?',         'どこから来ましたか？',       'Diin ka gikan? Gikan ko sa Cebu.',     'introduction'),
  ('Gusto ko ug...',    'I want...',                   '〜が欲しいです。',           'Gusto ko ug tubig.',                   'daily_life'),
  ('Pila ang presyo?',  'How much is the price?',      '値段はいくらですか？',       'Pila ang presyo niini?',               'shopping');
