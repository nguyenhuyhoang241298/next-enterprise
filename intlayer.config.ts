import { type IntlayerConfig, Locales } from 'intlayer'

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.VIETNAMESE],
    defaultLocale: Locales.VIETNAMESE,
  },
}

export default config
