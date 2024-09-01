import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
// import LocaleSwitcher from "../../components/language_switcher"
import Header from "../../components/header"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Breadcrumbs,
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
      </div>

      {/* <Breadcrumbs className="mt-4 ml-4">
        <a href="#" className="opacity-90">
        {t('home')}
        </a>
        <a href="#">
        {t('signIn')}
        </a>
        </Breadcrumbs> */}
      
    <Card className="flex items-center justify-center" color="transparent" shadow={false}>
      <Typography variant="h3" color="white">
       {t('signIn')}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 rounded-md border-2 border-purple-200">
          <Typography variant="h6" color="white" className="-mb-3">
            {t('email')}
          </Typography>
          <Input
            size="lg"
            placeholder="email@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
          {t('password')}
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
          <Button className="mt-2 bg-[#ea4492]" fullWidth>
            {t('signIn')}
          </Button>
          </div>
        </form>
      </Card>
      </div>
  );
}