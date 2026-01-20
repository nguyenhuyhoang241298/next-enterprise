import ReactQueryProvider from '@/components/providers/react-query-provider'
import SessionProvider from '@/components/providers/session-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { getHTMLTextDir } from 'intlayer'
import { IntlayerClientProvider, type NextLayoutIntlayer } from 'next-intlayer'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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
        <ReactQueryProvider>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <IntlayerClientProvider locale={locale}>
                {children}
                <Toaster />
              </IntlayerClientProvider>
            </ThemeProvider>
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
