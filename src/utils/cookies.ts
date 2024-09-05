import Cookies from 'js-cookie'

export const setTheme = (theme: string) => {
  Cookies.set(
    'theme',
    theme,
    {
      secure: process.env.NEXT_PUBLIC_APP_ENV !== 'development',
      path: '/',
      sameSite: 'strict'
    }
  )
}

export const setLocale = (locale: string) => {
  Cookies.set(
    'i18next',
    locale,
    {
      secure: process.env.NEXT_PUBLIC_APP_ENV !== 'development',
      path: '/',
      sameSite: 'strict'
    }
  )
}

export const getTheme = () => Cookies.get('theme')
export const getLocale = () => Cookies.get('i18next')
