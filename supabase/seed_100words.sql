-- ============================================================
-- 100 Bisaya (Cebuano) words seed
-- Run this in Supabase SQL Editor
-- ============================================================

INSERT INTO words (word, language, part_of_speech, category) VALUES
  -- Greetings
  ('kumusta',  'ceb', 'interjection', 'greetings'),
  ('palihug',  'ceb', 'interjection', 'greetings'),
  ('tabi',     'ceb', 'interjection', 'greetings'),
  -- Family
  ('amahan',   'ceb', 'noun', 'family'),
  ('inahan',   'ceb', 'noun', 'family'),
  ('anak',     'ceb', 'noun', 'family'),
  ('igsoon',   'ceb', 'noun', 'family'),
  ('manong',   'ceb', 'noun', 'family'),
  ('manang',   'ceb', 'noun', 'family'),
  ('apohan',   'ceb', 'noun', 'family'),
  ('bana',     'ceb', 'noun', 'family'),
  ('asawa',    'ceb', 'noun', 'family'),
  ('pamilya',  'ceb', 'noun', 'family'),
  -- Body
  ('ulo',      'ceb', 'noun', 'body'),
  ('mata',     'ceb', 'noun', 'body'),
  ('ilong',    'ceb', 'noun', 'body'),
  ('baba',     'ceb', 'noun', 'body'),
  ('kamot',    'ceb', 'noun', 'body'),
  ('tiil',     'ceb', 'noun', 'body'),
  ('dughan',   'ceb', 'noun', 'body'),
  ('tiyan',    'ceb', 'noun', 'body'),
  ('bukton',   'ceb', 'noun', 'body'),
  ('likod',    'ceb', 'noun', 'body'),
  -- Food
  ('pagkaon',  'ceb', 'noun', 'food'),
  ('kan-on',   'ceb', 'noun', 'food'),
  ('isda',     'ceb', 'noun', 'food'),
  ('karne',    'ceb', 'noun', 'food'),
  ('utan',     'ceb', 'noun', 'food'),
  ('prutas',   'ceb', 'noun', 'food'),
  ('itlog',    'ceb', 'noun', 'food'),
  ('manok',    'ceb', 'noun', 'food'),
  ('baboy',    'ceb', 'noun', 'food'),
  ('kape',     'ceb', 'noun', 'food'),
  -- Nature
  ('adlaw',    'ceb', 'noun', 'nature'),
  ('bulan',    'ceb', 'noun', 'nature'),
  ('bitoon',   'ceb', 'noun', 'nature'),
  ('langit',   'ceb', 'noun', 'nature'),
  ('dagat',    'ceb', 'noun', 'nature'),
  ('bukid',    'ceb', 'noun', 'nature'),
  ('suba',     'ceb', 'noun', 'nature'),
  ('kahoy',    'ceb', 'noun', 'nature'),
  ('bulak',    'ceb', 'noun', 'nature'),
  ('ulan',     'ceb', 'noun', 'nature'),
  -- Emotions
  ('gugma',    'ceb', 'noun', 'emotions'),
  ('kalipay',  'ceb', 'noun', 'emotions'),
  ('kasakit',  'ceb', 'noun', 'emotions'),
  ('kasuko',   'ceb', 'noun', 'emotions'),
  ('hadlok',   'ceb', 'noun', 'emotions'),
  ('kaulaw',   'ceb', 'noun', 'emotions'),
  ('paglaom',  'ceb', 'noun', 'emotions'),
  -- Time
  ('buntag',   'ceb', 'noun', 'time'),
  ('udto',     'ceb', 'noun', 'time'),
  ('hapon',    'ceb', 'noun', 'time'),
  ('gabii',    'ceb', 'noun', 'time'),
  ('ugma',     'ceb', 'noun', 'time'),
  ('gahapon',  'ceb', 'noun', 'time'),
  ('karon',    'ceb', 'adverb', 'time'),
  ('kanunay',  'ceb', 'adverb', 'time'),
  -- Colors
  ('pula',     'ceb', 'adjective', 'colors'),
  ('puti',     'ceb', 'adjective', 'colors'),
  ('itom',     'ceb', 'adjective', 'colors'),
  ('berde',    'ceb', 'adjective', 'colors'),
  ('asul',     'ceb', 'adjective', 'colors'),
  ('dalag',    'ceb', 'adjective', 'colors'),
  -- Numbers
  ('usa',      'ceb', 'number', 'numbers'),
  ('duha',     'ceb', 'number', 'numbers'),
  ('tulo',     'ceb', 'number', 'numbers'),
  ('upat',     'ceb', 'number', 'numbers'),
  ('lima',     'ceb', 'number', 'numbers'),
  ('unom',     'ceb', 'number', 'numbers'),
  ('pito',     'ceb', 'number', 'numbers'),
  ('walo',     'ceb', 'number', 'numbers'),
  ('siyam',    'ceb', 'number', 'numbers'),
  ('napulo',   'ceb', 'number', 'numbers'),
  -- Verbs
  ('lakaw',    'ceb', 'verb', 'verbs'),
  ('dagan',    'ceb', 'verb', 'verbs'),
  ('tulog',    'ceb', 'verb', 'verbs'),
  ('ligo',     'ceb', 'verb', 'verbs'),
  ('trabaho',  'ceb', 'verb', 'verbs'),
  ('tan-aw',   'ceb', 'verb', 'verbs'),
  ('sulti',    'ceb', 'verb', 'verbs'),
  ('basa',     'ceb', 'verb', 'verbs'),
  ('sulat',    'ceb', 'verb', 'verbs'),
  ('dala',     'ceb', 'verb', 'verbs'),
  -- Adjectives
  ('dako',     'ceb', 'adjective', 'adjectives'),
  ('gamay',    'ceb', 'adjective', 'adjectives'),
  ('taas',     'ceb', 'adjective', 'adjectives'),
  ('mubo',     'ceb', 'adjective', 'adjectives'),
  ('bag-o',    'ceb', 'adjective', 'adjectives'),
  ('daan',     'ceb', 'adjective', 'adjectives'),
  ('init',     'ceb', 'adjective', 'adjectives'),
  ('bugnaw',   'ceb', 'adjective', 'adjectives'),
  ('gwapa',    'ceb', 'adjective', 'adjectives'),
  ('buotan',   'ceb', 'adjective', 'adjectives')
ON CONFLICT DO NOTHING;

-- ============================================================
-- Meanings
-- ============================================================

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'how are you, hello', 'こんにちは、元気ですか', 'Kumusta ka? Maayo man ko.'
FROM words WHERE word = 'kumusta';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'please', 'お願いします', 'Palihug tabang ko.'
FROM words WHERE word = 'palihug';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'excuse me, sorry', 'すみません、失礼します', 'Tabi, pwede ko maabot?'
FROM words WHERE word = 'tabi';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'father, dad', '父', 'Ang akong amahan magtrabaho.'
FROM words WHERE word = 'amahan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'mother, mom', '母', 'Mahal ko akong inahan.'
FROM words WHERE word = 'inahan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'child, son, daughter', '子供', 'Usa ka anak nila si Maria.'
FROM words WHERE word = 'anak';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'sibling, brother, sister', '兄弟姉妹', 'Duha ang akong igsoon.'
FROM words WHERE word = 'igsoon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'older brother', 'お兄さん', 'Ang akong manong estudyante.'
FROM words WHERE word = 'manong';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'older sister', 'お姉さん', 'Gwapa kaayo akong manang.'
FROM words WHERE word = 'manang';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'grandparent', '祖父母', 'Maayo ang akong apohan.'
FROM words WHERE word = 'apohan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'husband', '夫', 'Ang iyang bana usa ka doktor.'
FROM words WHERE word = 'bana';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'wife, spouse', '妻、配偶者', 'Maayo ang iyang asawa.'
FROM words WHERE word = 'asawa';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'family', '家族', 'Dako ang among pamilya.'
FROM words WHERE word = 'pamilya';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'head', '頭', 'Sakit ang akong ulo.'
FROM words WHERE word = 'ulo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'eye', '目', 'Nindot ang iyang mata.'
FROM words WHERE word = 'mata';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'nose', '鼻', 'Dako ang iyang ilong.'
FROM words WHERE word = 'ilong';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'mouth', '口', 'Ablihi ang imong baba.'
FROM words WHERE word = 'baba';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'hand', '手', 'Hugasi ang imong kamot.'
FROM words WHERE word = 'kamot';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'foot, leg', '足', 'Sakit ang akong tiil.'
FROM words WHERE word = 'tiil';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'chest, breast', '胸', 'Sakit ang akong dughan.'
FROM words WHERE word = 'dughan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'stomach, belly', 'お腹', 'Gutom ang akong tiyan.'
FROM words WHERE word = 'tiyan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'arm', '腕', 'Kusog ang iyang bukton.'
FROM words WHERE word = 'bukton';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'back', '背中', 'Sakit ang akong likod.'
FROM words WHERE word = 'likod';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'food', '食べ物', 'Lami ang pagkaon dinhi.'
FROM words WHERE word = 'pagkaon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'cooked rice', 'ご飯', 'Gusto ko ug kan-on.'
FROM words WHERE word = 'kan-on';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'fish', '魚', 'Lami ang sinugbang isda.'
FROM words WHERE word = 'isda';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'meat', '肉', 'Gusto ko ug karne.'
FROM words WHERE word = 'karne';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'vegetable', '野菜', 'Kaon ug utan para maayo.'
FROM words WHERE word = 'utan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'fruit', '果物', 'Tam-is ang prutas.'
FROM words WHERE word = 'prutas';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'egg', '卵', 'Prito ang itlog.'
FROM words WHERE word = 'itlog';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'chicken', '鶏肉、鶏', 'Lami ang adobong manok.'
FROM words WHERE word = 'manok';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'pig, pork', '豚、豚肉', 'Lami ang lechon baboy.'
FROM words WHERE word = 'baboy';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'coffee', 'コーヒー', 'Gusto ko ug kape sa buntag.'
FROM words WHERE word = 'kape';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'sun, day', '太陽、日', 'Mainit ang adlaw karon.'
FROM words WHERE word = 'adlaw';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'moon, month', '月', 'Nindot ang bulan gabii.'
FROM words WHERE word = 'bulan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'star', '星', 'Daghan ang bitoon sa langit.'
FROM words WHERE word = 'bitoon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'sky, heaven', '空、天国', 'Asul ang langit karon.'
FROM words WHERE word = 'langit';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'sea, ocean', '海', 'Lami ang dagat sa Cebu.'
FROM words WHERE word = 'dagat';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'mountain, hill', '山', 'Taas ang bukid.'
FROM words WHERE word = 'bukid';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'river', '川', 'Limpyo ang suba.'
FROM words WHERE word = 'suba';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'tree, wood', '木', 'Dako ang kahoy.'
FROM words WHERE word = 'kahoy';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'flower', '花', 'Nindot ang bulak.'
FROM words WHERE word = 'bulak';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'rain', '雨', 'Kusog ang ulan karon.'
FROM words WHERE word = 'ulan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'love', '愛、愛情', 'Dako ang akong gugma kanimo.'
FROM words WHERE word = 'gugma';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'happiness, joy', '幸せ、喜び', 'Puno ako ug kalipay.'
FROM words WHERE word = 'kalipay';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'pain, sadness', '痛み、悲しみ', 'Dako ang akong kasakit.'
FROM words WHERE word = 'kasakit';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'anger', '怒り', 'Gipakita niya ang iyang kasuko.'
FROM words WHERE word = 'kasuko';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'fear', '恐れ、怖さ', 'Naa akoy hadlok sa kangitngit.'
FROM words WHERE word = 'hadlok';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'shame, embarrassment', '恥', 'Naa akoy kaulaw.'
FROM words WHERE word = 'kaulaw';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'hope', '希望', 'Naa pa akoy paglaom.'
FROM words WHERE word = 'paglaom';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'morning', '朝', 'Maayong buntag!'
FROM words WHERE word = 'buntag';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'noon, midday', '昼、正午', 'Kaon na ta, udto na.'
FROM words WHERE word = 'udto';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'afternoon', '午後', 'Maayong hapon!'
FROM words WHERE word = 'hapon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'evening, night', '夜', 'Maayong gabii!'
FROM words WHERE word = 'gabii';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'tomorrow', '明日', 'Mobalik ko ugma.'
FROM words WHERE word = 'ugma';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'yesterday', '昨日', 'Niadto ko gahapon.'
FROM words WHERE word = 'gahapon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'now, currently', '今、現在', 'Busy ako karon.'
FROM words WHERE word = 'karon';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'always, always', 'いつも', 'Kanunay ko magmahal kanimo.'
FROM words WHERE word = 'kanunay';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'red', '赤い', 'Pula ang bulak.'
FROM words WHERE word = 'pula';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'white', '白い', 'Puti ang iyang sinina.'
FROM words WHERE word = 'puti';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'black', '黒い', 'Itom ang iyang buhok.'
FROM words WHERE word = 'itom';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'green', '緑の', 'Berde ang tanum.'
FROM words WHERE word = 'berde';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'blue', '青い', 'Asul ang langit.'
FROM words WHERE word = 'asul';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'yellow', '黄色い', 'Dalag ang saging.'
FROM words WHERE word = 'dalag';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'one', '一、1', 'Usa lang ka tasa.'
FROM words WHERE word = 'usa';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'two', '二、2', 'Duha ka anak.'
FROM words WHERE word = 'duha';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'three', '三、3', 'Tulo ka adlaw.'
FROM words WHERE word = 'tulo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'four', '四、4', 'Upat ka bulan.'
FROM words WHERE word = 'upat';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'five', '五、5', 'Lima ka piso.'
FROM words WHERE word = 'lima';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'six', '六、6', 'Unom ka tawo.'
FROM words WHERE word = 'unom';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'seven', '七、7', 'Pito ka adlaw sa usa ka semana.'
FROM words WHERE word = 'pito';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'eight', '八、8', 'Walo ka oras.'
FROM words WHERE word = 'walo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'nine', '九、9', 'Siyam ka bulan.'
FROM words WHERE word = 'siyam';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'ten', '十、10', 'Napulo ka piso.'
FROM words WHERE word = 'napulo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'walk, go', '歩く、行く', 'Lakaw ta sa merkado.'
FROM words WHERE word = 'lakaw';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'run', '走る', 'Dagan siya sa dalan.'
FROM words WHERE word = 'dagan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'sleep', '眠る、寝る', 'Tulog na ang bata.'
FROM words WHERE word = 'tulog';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'bathe, take a bath', '入浴する', 'Ligo ka una.'
FROM words WHERE word = 'ligo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'work', '働く、仕事をする', 'Trabaho siya sa ospital.'
FROM words WHERE word = 'trabaho';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'look, watch, see', '見る', 'Tan-aw ta ug sine.'
FROM words WHERE word = 'tan-aw';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'speak, say, tell', '話す、言う', 'Sulti ka ug tinood.'
FROM words WHERE word = 'sulti';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'read', '読む', 'Basa ug libro.'
FROM words WHERE word = 'basa';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'write', '書く', 'Sulat ug sulat kaniya.'
FROM words WHERE word = 'sulat';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'carry, bring', '持つ、持ってくる', 'Dala ang imong payong.'
FROM words WHERE word = 'dala';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'big, large', '大きい', 'Dako kaayo ang balay.'
FROM words WHERE word = 'dako';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'small, little', '小さい', 'Gamay ang akong kwarto.'
FROM words WHERE word = 'gamay';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'tall, high, long', '高い、長い', 'Taas kaayo siya.'
FROM words WHERE word = 'taas';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'short, low', '低い、短い', 'Mubo ang bata.'
FROM words WHERE word = 'mubo';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'new', '新しい', 'Bag-o ang iyang sakyanan.'
FROM words WHERE word = 'bag-o';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'old (thing)', '古い', 'Daan na ang balay.'
FROM words WHERE word = 'daan';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'hot, warm', '暑い、熱い', 'Init kaayo ang adlaw.'
FROM words WHERE word = 'init';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'cold, cool', '寒い、冷たい', 'Bugnaw ang tubig.'
FROM words WHERE word = 'bugnaw';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'beautiful, pretty (female)', '美しい、かわいい', 'Gwapa kaayo siya.'
FROM words WHERE word = 'gwapa';

INSERT INTO meanings (word_id, meaning_en, meaning_ja, example)
SELECT id, 'kind, well-behaved, good', '親切な、良い', 'Buotan kaayo ang bata.'
FROM words WHERE word = 'buotan';
