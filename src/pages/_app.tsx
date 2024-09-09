import "@/styles/globals.css"
// import "@/styles/theme_color.css"
import type { AppProps, AppContext } from "next/app"
import { appWithI18Next, useSyncLanguage } from "ni18n"
import { ni18nConfig } from "../ni18n.config"
import { ThemeProvider } from "@material-tailwind/react"
import { wrapper } from '@/lib/store'
import { Provider } from "react-redux"


const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem('locale')
  useSyncLanguage(locale || "th")
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default appWithI18Next(MyApp, ni18nConfig)
