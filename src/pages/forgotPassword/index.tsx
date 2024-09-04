import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
// import LocaleSwitcher from "../../components/language_switcher"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Breadcrumbs from "../../components/breadcrumbs"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
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

    <div className="grid h-screen grid-rows-[auto_1fr] bg-primary-background">
      <div>
      <Header />
      <Breadcrumbs/>
      </div>   
    <Card className="flex items-center justify-center" color="transparent" shadow={false}>
      <Typography variant="h4" color="white">
       {t('forgot_password')}
      </Typography>
      <Typography className="mt-2" variant="h6" color="white">
       {t('forgot_password_detail')}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 rounded-lg border-4  border-purple-300 p-6 bg-box-shadow-signin">
          <Typography variant="h6" color="white" className="-mb-3">
            {t('email')}
          </Typography>
          <Input
              type="email" 
              size="lg" 
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}/>
          <Button className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300" fullWidth>
            {t('signIn')}
          </Button>
          </div>
        </form>
      </Card>
      <Footer/>
      </div>

  );
}