import { useRouter } from "next/router"
import LocaleSwitcher from "../../components/language_switcher"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react"
import LogoutButton from "@components/logoutButton"

export default function HomePage() {
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [locale])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{t('hello')}</h1>
          <p>Current locale: {locale}</p>
          <LocaleSwitcher />
          <br/>
          SignOut: <LogoutButton />
        </>
      )}
    </div>
  )
}