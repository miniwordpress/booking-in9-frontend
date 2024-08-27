import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithI18Next, useSyncLanguage } from "ni18n"
import { ni18nConfig } from "../ni18n.config";

const App = ({ Component, pageProps }: AppProps) => {
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem('locale')

  useSyncLanguage(locale || "th")
  return <Component {...pageProps} />;
};

export default appWithI18Next(App, ni18nConfig);
