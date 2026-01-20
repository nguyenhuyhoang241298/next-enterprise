'use client'

import { useIntlayer } from 'next-intlayer'

const TestClient = () => {
  const content = useIntlayer('page')

  return <div>{content.client.main}</div>
}

export default TestClient
