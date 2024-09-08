import "@/styles/globals.css"
// import "@/styles/theme_color.css"
import type { AppProps, AppContext } from "next/app"
import { appWithI18Next, useSyncLanguage } from "ni18n"
import { ni18nConfig } from "../ni18n.config"
import { ThemeProvider } from "@material-tailwind/react"
import { wrapper } from '@/lib/store'
import App from 'next/app'


const MyApp = ({ Component, pageProps }: AppProps) => {
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem('locale')

  useSyncLanguage(locale || "th")
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }
)

export default wrapper.withRedux(appWithI18Next(MyApp, ni18nConfig))
