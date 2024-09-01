import "@/styles/globals.css"
// import "@/styles/theme_color.css"
import type { AppProps } from "next/app"
import { appWithI18Next, useSyncLanguage } from "ni18n"
import { ni18nConfig } from "../ni18n.config"
import { ThemeProvider } from "@material-tailwind/react"

const App = ({ Component, pageProps }: AppProps) => {
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem('locale')

  useSyncLanguage(locale || "th")
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
