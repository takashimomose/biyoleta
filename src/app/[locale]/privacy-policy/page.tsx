import { getTranslations } from 'next-intl/server'
import BackButton from '@/components/BackButton'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (locale === 'ja') {
    return {
      title: 'プライバシーポリシー | Biyoleta',
      description: 'Biyoleta のプライバシーポリシーです。',
    }
  }
  return {
    title: 'Privacy Policy | Biyoleta',
    description: 'Privacy policy for Biyoleta.',
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  const isJa = locale === 'ja'

  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <BackButton label={isJa ? '← 戻る' : '← Back'} />
      </div>

      {isJa ? <JaContent /> : <EnContent />}
    </main>
  )
}

function EnContent() {
  return (
    <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
      <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="text-gray-400 text-xs">Last updated: March 2026</p>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Overview</h2>
        <p>
          Biyoleta ("this site") is a free Bisaya (Cebuano) language learning website.
          We are committed to protecting your privacy. This policy explains what information
          is collected and how it is used.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Information We Collect</h2>
        <p>
          This site does not collect any personally identifiable information such as your name,
          email address, or account details. No user registration is required.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Google Analytics</h2>
        <p>
          This site uses Google Analytics to understand how visitors use the site (e.g. pages
          visited, time spent, device type). Google Analytics collects anonymized data via
          cookies and similar technologies.
        </p>
        <p>
          The data collected is used solely to improve the site and is not shared with third
          parties for advertising purposes.
        </p>
        <p>
          You can opt out of Google Analytics tracking by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <p>
          For more information on how Google handles data, please see{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Cookies</h2>
        <p>
          This site uses cookies only through Google Analytics for the purpose of analyzing
          site usage. No other cookies are set.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Changes to This Policy</h2>
        <p>
          This policy may be updated from time to time. Any changes will be reflected on
          this page.
        </p>
      </section>
    </div>
  )
}

function JaContent() {
  return (
    <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
      <h1 className="text-2xl font-bold text-gray-900">プライバシーポリシー</h1>
      <p className="text-gray-400 text-xs">最終更新：2026年3月</p>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">概要</h2>
        <p>
          Biyoleta（以下「本サイト」）は、無料のビサヤ語（セブアノ語）学習サービスです。
          本サイトはユーザーのプライバシーを尊重し、個人情報の保護に努めます。
          本ポリシーでは、収集する情報とその利用方法について説明します。
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">収集する情報</h2>
        <p>
          本サイトでは、氏名・メールアドレス・アカウント情報などの個人を特定できる情報は一切収集しません。
          ユーザー登録も不要です。
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Google アナリティクスについて</h2>
        <p>
          本サイトでは、サイトの利用状況（閲覧ページ、滞在時間、デバイス種別など）を把握するために
          Google アナリティクスを使用しています。Google アナリティクスは Cookie などの技術を利用して
          匿名化されたデータを収集します。
        </p>
        <p>
          収集されたデータはサイト改善のみに使用され、広告目的で第三者と共有されることはありません。
        </p>
        <p>
          Google アナリティクスによる計測を無効にしたい場合は、
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
          >
            Google アナリティクス オプトアウト アドオン
          </a>
          をご利用ください。
        </p>
        <p>
          Google のデータ取り扱いについては、
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70"
          >
            Google プライバシーポリシー
          </a>
          をご覧ください。
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">Cookie について</h2>
        <p>
          本サイトでは、Google アナリティクスによるアクセス解析の目的にのみ Cookie を使用しています。
          それ以外の Cookie は設定されません。
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-gray-900">ポリシーの変更</h2>
        <p>
          本ポリシーは必要に応じて更新することがあります。変更があった場合は本ページに反映されます。
        </p>
      </section>
    </div>
  )
}
