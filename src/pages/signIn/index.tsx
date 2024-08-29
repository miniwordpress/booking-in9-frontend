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
      <Header />
      {/* <Breadcrumbs className="mt-4 ml-4">
        <a href="#" className="opacity-90">
          {t('home')}
        </a>
        <a href="#">
          {t('signIn')}
        </a>
      </Breadcrumbs> */}
      <div className="flex items-center justify-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" crossOrigin="" />
            <Input label="Password" size="lg" crossOrigin="" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" crossOrigin="" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}