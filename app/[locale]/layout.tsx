import { getHTMLTextDir } from 'intlayer'
import { IntlayerClientProvider, type NextLayoutIntlayer } from 'next-intlayer'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export { generateStaticParams } from 'next-intlayer'

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IntlayerClientProvider locale={locale}>
          {children}
        </IntlayerClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
