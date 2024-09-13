import React from 'react'
import { Button } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"
import { destroyAccessToken } from '@/utils/cookies'
import { useRouter } from 'next/navigation'

const LogoutButton: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const signOut = () => {
    destroyAccessToken()
    router.push("/sigIn")
  }

  return (
    <Button
      key="btn-logout"
      variant="filled"
      size="md"
      onClick={() => signOut()}
    >
      {t('logout')}
    </Button>
  )
}

export default LogoutButton