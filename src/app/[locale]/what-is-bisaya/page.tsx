import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'
  return {
    title: isJa ? 'ビサヤ語（セブアノ語）とは？' : 'What is Bisaya / Cebuano?',
    description: isJa
      ? 'ビサヤ語（セブアノ語）はフィリピン第二の言語。話者数・歴史・文化・日本との関係を解説。'
      : 'Bisaya (Cebuano) is the second most spoken language in the Philippines. Learn about its speakers, history, and culture.',
  }
}

export default async function WhatIsBisayaPage({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'

  if (isJa) return <JaPage locale={locale} />
  return <EnPage locale={locale} />
}

function EnPage({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">← Home</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">What is Bisaya / Cebuano?</h1>
      <p className="text-gray-500 text-sm mb-10">The language of the Visayas and beyond</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          { value: '20M+', label: 'Native speakers' },
          { value: '#2',   label: 'Language in the Philippines' },
          { value: '7,100+', label: 'Islands in the Visayas' },
        ].map(({ value, label }) => (
          <div key={label} className="border border-gray-100 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold" style={{ color: '#512376' }}>{value}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>What is Bisaya?</h2>
          <p>
            Bisaya (also called Cebuano or Binisaya) is an Austronesian language native to the Visayas region of the Philippines. It is the second most widely spoken language in the country after Tagalog, with over 20 million native speakers.
          </p>
          <p className="mt-3">
            The language takes its name from Cebu Island — the historical and cultural heart of the Visayas — where it originated. Today it is spoken across the Visayas, much of Mindanao, and in diaspora communities worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>Where is it spoken?</h2>
          <p>
            Bisaya is the dominant language across three major island groups:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              { place: 'Cebu', desc: 'The birthplace of the language and home to Cebu City, the Philippines\' oldest city.' },
              { place: 'Visayas', desc: 'Bohol, Leyte, Samar, Negros, and hundreds of surrounding islands.' },
              { place: 'Mindanao', desc: 'Large parts of northern and eastern Mindanao, including Davao and Cagayan de Oro.' },
            ].map(({ place, desc }) => (
              <li key={place} className="flex gap-3">
                <span className="font-semibold shrink-0" style={{ color: '#512376' }}>{place}</span>
                <span className="text-gray-600 text-sm">{desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>History & Spanish Influence</h2>
          <p>
            Cebu Island was the first territory in the Philippines colonized by Spain in 1565, making Bisaya one of the Philippine languages with the deepest Spanish influence. Many everyday Bisaya words are derived from Spanish — <em>trabaho</em> (work), <em>hapon</em> (Japanese/afternoon), <em>eskwela</em> (school).
          </p>
          <p className="mt-3">
            Despite centuries of colonization and the spread of English in modern education, Bisaya has remained the living language of daily life for millions of Filipinos in the Visayas and Mindanao.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>Multilingual everyday life</h2>
          <p>
            Most residents of the Visayas comfortably switch between three languages in daily life: <strong>Bisaya</strong> with family and friends, <strong>Tagalog/Filipino</strong> for national media and government, and <strong>English</strong> for education and business. Bisaya speakers are some of the most naturally multilingual people in Asia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>Why learn Bisaya?</h2>
          <ul className="space-y-3">
            {[
              { icon: '🏝️', text: 'Travel deeper — explore Cebu, Bohol, Siargao, and Palawan beyond the tourist bubble.' },
              { icon: '🤝', text: 'Connect genuinely — locals light up when you speak even a few words of Bisaya.' },
              { icon: '💼', text: 'Business in Mindanao and the Visayas is often conducted in Bisaya.' },
              { icon: '❤️', text: 'Relationships — many people fall in love with the culture and the people.' },
            ].map(({ icon, text }) => (
              <li key={icon} className="flex gap-3 items-start">
                <span className="text-xl shrink-0">{icon}</span>
                <span className="text-sm text-gray-600">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>Bisaya vs. Tagalog</h2>
          <p className="text-sm text-gray-600">
            Bisaya and Tagalog are both Philippine languages but they are <strong>not mutually intelligible</strong> — a Bisaya speaker and a Tagalog speaker cannot understand each other without learning the other language. Many non-Cebuano Filipinos learn Bisaya when they move to the Visayas or Mindanao for work.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500 mb-4">Start learning Bisaya</p>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/dictionary`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">Browse Dictionary</Link>
          <Link href={`/${locale}/phrase`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">Common Phrases</Link>
          <Link href={`/${locale}/quiz`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">Take a Quiz</Link>
        </div>
      </div>
    </main>
  )
}

function JaPage({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href={`/${locale}`} className="text-sm text-gray-500 hover:opacity-70">← トップ</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">ビサヤ語（セブアノ語）とは？</h1>
      <p className="text-gray-500 text-sm mb-10">フィリピン第二の言語、ビサヤス諸島の言葉</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {[
          { value: '2000万人+', label: '母語話者数' },
          { value: '第2位', label: 'フィリピン国内の使用言語' },
          { value: '7,100+', label: 'ビサヤス諸島の島の数' },
        ].map(({ value, label }) => (
          <div key={label} className="border border-gray-100 rounded-2xl p-4 text-center">
            <p className="text-lg font-bold" style={{ color: '#512376' }}>{value}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>ビサヤ語とは？</h2>
          <p>
            ビサヤ語（セブアノ語・ビニサヤ語とも呼ばれる）は、フィリピンのビサヤス地方を中心に話されるオーストロネシア語族の言語です。タガログ語に次ぐフィリピン第二の言語で、母語話者は2,000万人以上にのぼります。
          </p>
          <p className="mt-3">
            名前の由来はセブ島——ビサヤスの歴史・文化の中心地。今日ではビサヤス全域、ミンダナオ島の多くの地域、そして世界各地のフィリピン人コミュニティで使われています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>どこで話されている？</h2>
          <ul className="mt-3 space-y-2">
            {[
              { place: 'セブ島', desc: 'ビサヤ語発祥の地。フィリピン最古の都市、セブシティがあります。' },
              { place: 'ビサヤス諸島', desc: 'ボホール・レイテ・サマール・ネグロスなど数百の島々。' },
              { place: 'ミンダナオ島', desc: 'ダバオ・カガヤン・デ・オロなど北部・東部の広い地域でも使われます。' },
            ].map(({ place, desc }) => (
              <li key={place} className="flex gap-3">
                <span className="font-semibold shrink-0" style={{ color: '#512376' }}>{place}</span>
                <span className="text-gray-600 text-sm">{desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>歴史とスペイン語の影響</h2>
          <p>
            セブ島は1565年にスペインがフィリピンで最初に植民地化した島であり、ビサヤ語はフィリピン言語の中でも特にスペイン語の影響を深く受けています。日常語にもスペイン由来の単語が多く残っています——<em>trabaho</em>（仕事）、<em>eskwela</em>（学校）など。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>3言語を使いこなす人々</h2>
          <p>
            ビサヤス地方の住民の多くは、日常的に<strong>ビサヤ語</strong>（家族・友人）・<strong>タガログ語</strong>（全国メディア・行政）・<strong>英語</strong>（教育・ビジネス）の3言語を自然に使い分けています。アジアでも有数の多言語話者が集まる地域です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>なぜビサヤ語を学ぶ？</h2>
          <ul className="space-y-3">
            {[
              { icon: '🏝️', text: 'セブ・ボホール・シアルガオ・パラワンをより深く旅できる。' },
              { icon: '🤝', text: '現地の人々との距離が一気に縮まる。少し話すだけで喜ばれます。' },
              { icon: '💼', text: 'ミンダナオ・ビサヤスでのビジネスはビサヤ語が飛び交うことも。' },
              { icon: '❤️', text: '文化や人への理解が深まり、フィリピンがもっと好きになる。' },
            ].map(({ icon, text }) => (
              <li key={icon} className="flex gap-3 items-start">
                <span className="text-xl shrink-0">{icon}</span>
                <span className="text-sm text-gray-600">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#512376' }}>タガログ語との違い</h2>
          <p className="text-sm text-gray-600">
            ビサヤ語とタガログ語は<strong>相互理解不可能</strong>な別言語です。同じフィリピン語族でも、片方を知っていても片方は通じません。ビサヤス・ミンダナオに移住するフィリピン人がビサヤ語を学ぶケースも多いほどです。
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500 mb-4">ビサヤ語を学び始める</p>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/dictionary`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">辞書を見る</Link>
          <Link href={`/${locale}/phrase`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">よく使うフレーズ</Link>
          <Link href={`/${locale}/quiz`} className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 hover:bg-purple-50 transition-colors">クイズに挑戦</Link>
        </div>
      </div>
    </main>
  )
}
