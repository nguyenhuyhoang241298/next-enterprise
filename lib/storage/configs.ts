export const LOCAL_STORAGE_KEYS = {
  DEMO_KEY: 'demoKey',
} as const

export type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS

export const COOKIE_KEYS = {
  DEMO_KEY: 'demoKey',
} as const

export type CookieKeys = keyof typeof COOKIE_KEYS
