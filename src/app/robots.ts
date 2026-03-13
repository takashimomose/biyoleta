import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*/search',    // 検索結果ページ（クエリ次第で重複コンテンツになる）
          '/*/translate', // 翻訳検索結果ページ（同上）
          '/api/',        // APIルート
        ],
      },
    ],
    sitemap: [
      'https://biyoleta.com/sitemap.xml',
      'https://biyoleta.com/sitemap_pages.xml',
      'https://biyoleta.com/sitemap_words.xml',
      'https://biyoleta.com/sitemap_phrases.xml',
      'https://biyoleta.com/sitemap_categories.xml',
      'https://biyoleta.com/sitemap_langpair.xml',
      'https://biyoleta.com/sitemap_howto.xml',
    ],
  }
}
