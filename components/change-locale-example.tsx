'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Locales,
  getHTMLTextDir,
  getLocaleName,
  getLocalizedUrl,
} from 'intlayer'
import { useLocale } from 'next-intlayer'
import Link from 'next/link'
import type { FC } from 'react'

export const LocaleSwitcher: FC = () => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>{getLocaleName(locale)}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {availableLocales.map((localeItem) => (
          <DropdownMenuItem key={localeItem} asChild>
            <Link
              href={getLocalizedUrl(pathWithoutLocale, localeItem)}
              aria-current={locale === localeItem ? 'page' : undefined}
              onClick={() => setLocale(localeItem)}
              replace
              className="flex flex-col items-start"
            >
              <span>
                {/* Locale - e.g. FR */}
                {localeItem}
              </span>
              <span>
                {/* Language in its own Locale - e.g. Français */}
                {getLocaleName(localeItem, locale)}
              </span>
              <span dir={getHTMLTextDir(localeItem)} lang={localeItem}>
                {/* Language in current Locale - e.g. Francés with current locale set to Locales.SPANISH */}
                {getLocaleName(localeItem)}
              </span>
              <span dir="ltr" lang={Locales.ENGLISH}>
                {/* Language in English - e.g. French */}
                {getLocaleName(localeItem, Locales.ENGLISH)}
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
