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
  const [showErrorUsername, setShowErrorUsername] = useState(false)
  const [showErrorPassword, setShowErrorPassword] = useState(false)
  const [disableButton, setDisableButton] = useState(false)
  const [open, setOpen] = useState(false)

  const loginSubmit = async () => {
    if (username.length > 0 && password.length > 0) {
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
    } else {
      setShowErrorUsername(true)
      setShowErrorPassword(true)
    }
  };

  return (
    <div className="font-prompt grid h-screen grid-rows-[auto_1fr] bg-white ">
      <div>
        <Header />
        <div className="hidden sm:block ">
        <Breadcrumbs className="mt-12 ml-10">
        <a href="#" className="opacity-80 ml-2">
          {t('home')}
        </a>
        <a href="#" className="text-black">
          {t('login.signIn')}
        </a>
        </Breadcrumbs>
        </div>
      </div>
      <Card
        className="flex items-center justify-center p-8"
        color="transparent"
        shadow={false}
      >
        <Typography className="text-[150%] text-black ">
          {t("login.signIn")}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-6 ">
            <Alert open={open} color="red" onClose={() => setOpen(false)}>
              {t("login.error")}
            </Alert>
            <Typography className="text-[110%] font-bold">
              {t("email")}
            </Typography>
            <Input
              error={showErrorUsername}
              type="email"
              size="lg"
              color="white"
              placeholder="email@mail.com"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label="Email"
              onFocus={(e) => { setShowErrorUsername(false) }}
              value={username}
            />
            <Typography className="text-[110%] font-bold">
              {t("password")}
            </Typography>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              icon={<i className="fas fa-heart" />}
            />
            {/* <Input
              type="password"
              size="lg"
              label="Password"
              color="white"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={(e) => { setShowErrorPassword(false) }}
              // icon={<i className="fas fa-heart" />}
              // className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
            />
            <Typography
              variant="small"
              color="black"
              className="flex items-center font-normal mt-3"
            >
              <a href="#" className="font-medium hover:text-gray-700 ml-5" class="Prompt-Regular">
                {t("forgot_password")}
              </a>
            </Typography>
            <Button
              disabled={disableButton}
              onClick={loginSubmit}
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300 text-[100%] font-semibold"
              fullWidth
            >
              {t("signIn")}
            </Button>
          </div>
        </form>
      </Card>
      <Footer />
    </div>
  );
}
