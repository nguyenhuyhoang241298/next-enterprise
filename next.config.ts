import type { NextConfig } from 'next'
import { withIntlayer } from 'next-intlayer/server'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@hugeicons-pro/core-solid-rounded',
      '@hugeicons-pro/core-stroke-rounded',
      '@hugeicons/core-free-icons',
    ],
  },
}

export default withIntlayer(nextConfig)
