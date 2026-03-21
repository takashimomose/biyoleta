export type SubCategory = { key: string; en: string; ja: string }

export type WordCategoryGroup = {
  key: string
  en: string
  ja: string
  icon: string
  subCategories: SubCategory[]
}

export const WORD_CATEGORY_GROUPS: WordCategoryGroup[] = [
  {
    key: 'grammar', en: 'Core Grammar', ja: '文法・基本語', icon: '1F4AC',
    subCategories: [
      { key: 'pronouns_personal',      en: 'Personal Pronouns',    ja: '人称代名詞' },
      { key: 'pronouns_demonstrative', en: 'Demonstratives',       ja: '指示詞' },
      { key: 'affirmation_negation',   en: 'Yes & No',             ja: '肯定・否定' },
      { key: 'modality_cognition',     en: 'Ability & Knowing',    ja: '可能・認知' },
      { key: 'question_words',         en: 'Question Words',       ja: '疑問詞' },
      { key: 'adverbs',                en: 'Adverbs',              ja: '副詞' },
      { key: 'particles',              en: 'Particles',            ja: '助詞・小辞' },
      { key: 'conjunctions',           en: 'Conjunctions',         ja: '接続詞' },
    ],
  },
  {
    key: 'numbers', en: 'Numbers', ja: '数', icon: '1F522',
    subCategories: [
      { key: 'cardinal_1_10',   en: 'Numbers 1–10',    ja: '1〜10の数' },
      { key: 'cardinal_11_20',  en: 'Numbers 11–20',   ja: '11〜20の数' },
      { key: 'cardinal_large',  en: 'Large Numbers',   ja: '大きな数' },
      { key: 'ordinal',         en: 'Ordinal Numbers', ja: '序数' },
      { key: 'measurements',    en: 'Measurements',    ja: '単位・計量' },
    ],
  },
  {
    key: 'time', en: 'Time & Dates', ja: '時間・日付', icon: '23F0',
    subCategories: [
      { key: 'time_of_day',    en: 'Parts of the Day', ja: '一日の時間帯' },
      { key: 'time_clock',     en: 'Telling Time',     ja: '時刻' },
      { key: 'time_relative',  en: 'Relative Time',    ja: '時間の表現' },
      { key: 'time_frequency', en: 'Frequency',        ja: '頻度・様子' },
      { key: 'days_months',    en: 'Days & Months',    ja: '曜日・月' },
    ],
  },
  {
    key: 'location', en: 'Location & Direction', ja: '場所・方向', icon: '1F504',
    subCategories: [
      { key: 'direction',          en: 'Direction',           ja: '方角・向き' },
      { key: 'position_distance',  en: 'Position & Distance', ja: '位置・距離' },
    ],
  },
  {
    key: 'weather', en: 'Weather & Seasons', ja: '天気・季節', icon: '1F326',
    subCategories: [
      { key: 'weather_conditions',  en: 'Weather',        ja: '天気・季節' },
      { key: 'weather_phenomena',   en: 'Weather Events', ja: '天気の現象' },
    ],
  },
  {
    key: 'nature', en: 'Nature', ja: '自然', icon: '26A1',
    subCategories: [
      { key: 'celestial',  en: 'Sky & Cosmos', ja: '空・天体' },
      { key: 'landscape',  en: 'Landscape',    ja: '地形・地理' },
    ],
  },
  {
    key: 'animals', en: 'Animals', ja: '動物', icon: '1F43E',
    subCategories: [
      { key: 'mammals',              en: 'Mammals',               ja: '哺乳類' },
      { key: 'birds',                en: 'Birds',                  ja: '鳥' },
      { key: 'reptiles_amphibians',  en: 'Reptiles & Amphibians', ja: '爬虫類・両生類' },
      { key: 'insects',              en: 'Insects & Bugs',        ja: '昆虫・虫' },
    ],
  },
  {
    key: 'plants', en: 'Plants', ja: '植物', icon: '1F33F',
    subCategories: [
      { key: 'plant_parts',   en: 'Parts of Plants', ja: '植物の部位・動作' },
      { key: 'named_plants',  en: 'Named Plants',    ja: '植物の種類' },
    ],
  },
  {
    key: 'family', en: 'Family & Society', ja: '家族・社会', icon: '1F46A',
    subCategories: [
      { key: 'core_family',    en: 'Family Members',   ja: '家族・親族' },
      { key: 'social_titles',  en: 'Titles & Friends', ja: '敬称・友人' },
    ],
  },
  {
    key: 'people', en: 'People & Relationships', ja: '人・人間関係', icon: '1F464',
    subCategories: [
      { key: 'general_people',  en: 'People',          ja: '人の種類' },
      { key: 'relationships',   en: 'Relationships',   ja: '人間関係' },
    ],
  },
  {
    key: 'life_events', en: 'Life Events', ja: '人生の出来事', icon: '1F389',
    subCategories: [
      { key: 'birth_growth',    en: 'Birth & Growth',             ja: '誕生・成長' },
      { key: 'marriage_death',  en: 'Marriage, Death & Ritual',  ja: '婚礼・死・儀式' },
    ],
  },
  {
    key: 'body', en: 'Body', ja: '身体', icon: '1F4AA',
    subCategories: [
      { key: 'external_body',   en: 'Body Parts',        ja: '体の部位（外）' },
      { key: 'internal_body',   en: 'Internal Organs',   ja: '体の部位（内）' },
      { key: 'body_functions',  en: 'Body Functions',    ja: '体の働き' },
    ],
  },
  {
    key: 'actions', en: 'Actions & Verbs', ja: '動作・行動', icon: '1F3C3',
    subCategories: [
      { key: 'physical_actions',      en: 'Physical Actions',      ja: '体の動作' },
      { key: 'perception_cognition',  en: 'Perception & Thinking', ja: '知覚・思考' },
      { key: 'daily_routine',         en: 'Daily Routine',         ja: '日常の行動' },
      { key: 'basic_verbs',           en: 'Basic Verbs',           ja: '基本動詞' },
    ],
  },
  {
    key: 'emotions_character', en: 'Emotions & Character', ja: '感情・性格', icon: '1F60A',
    subCategories: [
      { key: 'emotions',   en: 'Emotions',         ja: '感情' },
      { key: 'character',  en: 'Character Traits', ja: '性格・人柄' },
    ],
  },
  {
    key: 'appearance_qualities', en: 'Appearance & Qualities', ja: '見た目・特徴', icon: '2728',
    subCategories: [
      { key: 'physical_appearance',  en: 'Appearance',         ja: '外見・容姿' },
      { key: 'size_shape',           en: 'Size & Shape',       ja: '大きさ・形' },
      { key: 'sensory_qualities',    en: 'Sensory Qualities',  ja: '感覚・質感' },
      { key: 'state_condition',      en: 'State & Condition',  ja: '状態・様子' },
      { key: 'colors',               en: 'Colors',             ja: '色' },
    ],
  },
  {
    key: 'home', en: 'Home & Tools', ja: '家・道具', icon: '1F3E0',
    subCategories: [
      { key: 'house_rooms',          en: 'House & Rooms',        ja: '家・部屋' },
      { key: 'furniture_household',  en: 'Furniture & Household',ja: '家具・生活用品' },
      { key: 'tools_equipment',      en: 'Tools & Equipment',    ja: '道具・農具' },
      { key: 'cleaning_laundry',     en: 'Cleaning & Laundry',   ja: '掃除・洗濯' },
      { key: 'grooming',             en: 'Grooming',             ja: '身だしなみ' },
      { key: 'clothing',             en: 'Clothing',             ja: '衣服' },
      { key: 'sewing_fabric',        en: 'Sewing & Fabric',      ja: '縫製・布' },
    ],
  },
  {
    key: 'education_language', en: 'Education & Language', ja: '教育・言語', icon: '1F4DA',
    subCategories: [
      { key: 'school_institution',  en: 'School & Study',    ja: '学校・学習' },
      { key: 'school_supplies',     en: 'School Supplies',   ja: '学用品' },
      { key: 'language_study',      en: 'Language',          ja: '言語・語学' },
    ],
  },
  {
    key: 'society', en: 'Society & Work', ja: '社会・仕事', icon: '1F4BC',
    subCategories: [
      { key: 'community_places',    en: 'Community Places',     ja: '公共施設・場所' },
      { key: 'shopping',            en: 'Shopping',             ja: '買い物' },
      { key: 'money_banking',       en: 'Money & Banking',      ja: 'お金・銀行' },
      { key: 'mail_communication',  en: 'Mail & Communication', ja: '郵便・通信' },
      { key: 'work_employment',     en: 'Work & Employment',    ja: '仕事・雇用' },
      { key: 'farming',             en: 'Farming',              ja: '農業' },
      { key: 'crime_safety',        en: 'Crime & Safety',       ja: '犯罪・安全' },
      { key: 'politics_government', en: 'Politics & Government',ja: '政治・政府' },
      { key: 'history',             en: 'History',              ja: '歴史' },
      { key: 'media_news',          en: 'Media & News',         ja: 'メディア・報道' },
    ],
  },
  {
    key: 'transport_travel', en: 'Transport & Travel', ja: '交通・旅行', icon: '1F68C',
    subCategories: [
      { key: 'transport_land',    en: 'Land Transport',    ja: '陸の交通' },
      { key: 'transport_air_sea', en: 'Air & Sea',         ja: '空・海の交通' },
      { key: 'accommodation',     en: 'Accommodation',     ja: '宿泊' },
    ],
  },
  {
    key: 'health', en: 'Health & Medicine', ja: '健康・医療', icon: '1F3E5',
    subCategories: [
      { key: 'medical_care',     en: 'Medical Care',       ja: '医療・病院' },
      { key: 'symptoms_illness', en: 'Symptoms & Injuries', ja: '症状・けが' },
      { key: 'diseases',         en: 'Diseases',           ja: '病気' },
    ],
  },
  {
    key: 'entertainment', en: 'Entertainment & Play', ja: '娯楽・遊び', icon: '1F3A8',
    subCategories: [
      { key: 'games_leisure',    en: 'Games & Leisure',    ja: 'ゲーム・娯楽' },
      { key: 'traditional_games',en: 'Traditional Games',  ja: '伝統遊び' },
    ],
  },
  {
    key: 'culture_religion', en: 'Culture & Religion', ja: '文化・宗教', icon: '26BD',
    subCategories: [
      { key: 'religion',           en: 'Religion',          ja: '宗教・信仰' },
      { key: 'mythology_folklore', en: 'Mythology & Folklore', ja: '神話・民間信仰' },
    ],
  },
  {
    key: 'food', en: 'Food & Cooking', ja: '食べ物・料理', icon: '1F37D',
    subCategories: [
      { key: 'meals_tableware',        en: 'Meals & Tableware',        ja: '食事・食器' },
      { key: 'cooking_quality',        en: 'Taste & Texture',          ja: '味・食感' },
      { key: 'cooking_methods',        en: 'Cooking Methods',          ja: '調理法' },
      { key: 'cookware_utensils',      en: 'Cookware',                 ja: '調理器具' },
      { key: 'condiments_ingredients', en: 'Condiments & Ingredients', ja: '調味料・食材' },
      { key: 'meat_protein',           en: 'Meat & Protein',           ja: '肉類・タンパク質' },
      { key: 'seafood',                en: 'Seafood',                  ja: '魚介類' },
      { key: 'vegetables',             en: 'Vegetables',               ja: '野菜' },
      { key: 'fruits',                 en: 'Fruits',                   ja: '果物' },
    ],
  },
]
