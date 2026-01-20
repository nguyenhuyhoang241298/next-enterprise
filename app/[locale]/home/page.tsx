import { LocaleSwitcher } from '@/components/change-locale-example'
import { type NextPageIntlayer } from 'next-intlayer'
import { IntlayerServerProvider, useIntlayer } from 'next-intlayer/server'
import TestClient from './test-client'
import TestServer from './test-server'

const PageContent = () => {
  const content = useIntlayer('page')

  return <p>{content.getStarted.main}</p>
}

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params

  return (
    <IntlayerServerProvider locale={locale}>
      <PageContent />
      <TestServer />
      <TestClient />
      <LocaleSwitcher />
    </IntlayerServerProvider>
  )
}

export default Page
