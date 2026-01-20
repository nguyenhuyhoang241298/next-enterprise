import { useIntlayer } from 'next-intlayer/server'

const TestServer = () => {
  const content = useIntlayer('page')
  return <div>{content.server.main}</div>
}

export default TestServer
