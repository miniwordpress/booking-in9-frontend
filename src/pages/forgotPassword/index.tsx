import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
// import Breadcrumbs from "../../components/breadcrumbs"
import {
  Card,
  Typography,
  Input,
  Button,
  Breadcrumbs
} from "@material-tailwind/react";

export default function SignInPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [locale]);

  return (

    <div className="grid h-screen grid-rows-[auto_1fr] bg-white">
      <div>
      <Header />
      <div className="hidden sm:block ">
      <Breadcrumbs className="mt-12 ml-10">
        <a href="#" className="opacity-80 ml-2">
          {t('home')}
        </a>
        <a href="#" className="text-black">
          {t('forgot_password')}
        </a>
        </Breadcrumbs>
      </div>   
      </div>   
    <Card className="flex items-center justify-center p-8" color="transparent" shadow={false}>
      <Typography variant="h4" color="black">
       {t('forgot_password')}
      </Typography>
      <Typography className="mt-2 items-center justify-center" variant="h6" color="black">
       {t('forgot_password_detail')}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 rounded-lg border-4  border-purple-300 p-6 bg-box-shadow-signin">
          <Typography variant="h6" color="black" className="-mb-3">
            {t('email')}
          </Typography>
          <Input
              type="email" 
              size="lg" 
              placeholder="name@mail.com"/>
          <Button className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300" fullWidth>
            {t('confirm')}
          </Button>
          </div>
        </form>
      </Card>
      <Footer/>
      </div>

  );
}