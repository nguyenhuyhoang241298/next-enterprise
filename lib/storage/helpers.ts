import Cookies from 'js-cookie'
import { CookieKeys, LocalStorageKeys } from './configs'

export const getLocalStorage = (key: LocalStorageKeys) => {
  return localStorage.getItem(key)
}

export const setLocalStorage = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value)
}

export const deleteLocalStorage = (key: LocalStorageKeys) => {
  localStorage.removeItem(key)
}

export const getCookie = (name: CookieKeys) => {
  return Cookies.get(name)
}

export const setCookie = (name: CookieKeys, value: string) => {
  Cookies.set(name, value)
}

export const deleteCookie = (name: CookieKeys) => {
  Cookies.remove(name)
}
