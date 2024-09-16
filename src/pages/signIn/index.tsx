import { useRouter } from 'next/navigation'
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { useSignInMutation } from '@/lib/features/Auth'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumbs from "../../components/breadcrumbs"
import { Alert } from "@material-tailwind/react"

import {
  Card,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react"

export default function SignInPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const [signIn] = useSignInMutation()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [disableButton, setDisableButton] = useState(false)
  const [open, setOpen] = useState(false)

  const loginSubmit = async () => {
    setOpen(false)
    try {
      await signIn(
        {
          email: username,
          password: password
        }
      ).unwrap()
      setDisableButton(true)
      router.push("/home")
    } catch (error: any) {
      setOpen(true)
      setDisableButton(false)
    }
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-primary-background">
      <div>
        <Header />
        <Breadcrumbs />
      </div>
      <Card className="flex items-center justify-center" color="transparent" shadow={false}>
        <Typography variant="h3" color="white">
          {t('signIn')}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-6 rounded-lg border-4  border-purple-300 p-6 bg-box-shadow-signin">
            <Alert open={open} color="red" onClose={() => setOpen(false)}>
              {t('login.error')}
            </Alert>
            <Typography variant="h6" color="white" className="-mb-3">
              {t('email')}
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="email@mail.com"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
              className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }} />
            <Typography variant="h6" color="white" className="-mb-3">
              {t('password')}
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              icon={<i className="fas fa-heart" />}
              className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="white"
              className="flex items-center font-normal mt-3"
            >
              <a href="#" className="font-medium hover:text-gray-300 ml-5">
                {t('forgot_password')}
              </a>
            </Typography>
            <Button disabled={disableButton} onClick={loginSubmit} className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300" fullWidth>
              {t('signIn')}
            </Button>
          </div>
        </form>
      </Card>
      <Footer />
    </div>
  )
}