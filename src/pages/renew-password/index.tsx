import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import LocaleSwitcher from "../../components/language_switcher"
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useCreateUserMutation } from "@/lib/features/Users"
// import Breadcrumbs from "../../components/breadcrumbs";

import {
  Card,
  Textarea,
  Typography,
  Input,
  Button,
  Radio ,
  Breadcrumbs
} from "@material-tailwind/react";

export default function SignUpPage() {
  const ID_TYPE = "ID";
  const PASSPORT_TYPE = "PASSPORT";
  const SSN_TYPE = "SSN";
  const TIN_TYPE = "TIN";

  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);

  const [idNumber, setIdnumber] = useState("");
  const [idNumberType, setidNumberType] = useState(ID_TYPE);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [description, setDescription] = useState("");
  const [createUser] = useCreateUserMutation()

  const submit = () => {
    createUser({idNumber, idNumberType, firstName, lastName, email, tel, description})
  }
 
  useEffect(() => {
    setLoading(false);
  }, [locale]);

  return (
    <div className="Font-Prompt grid h-screen grid-rows-[auto_1fr] bg-white">
      <div>
        <Header />
        <div className="hidden sm:block my-10 mx-10">
        <Breadcrumbs className="">
        <a href="/" className="opacity-80 ml-2">
          {t('home')}
        </a>
        <a href="/register" className="text-black">
          {t('forgot_password')}
        </a>
        </Breadcrumbs>
      </div>
      </div>
      <Card
        className="flex items-center justify-center p8"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h3" color="black" className="p-6">
          {t("forgot_password_group.renew_password_title")}
        </Typography>
        <form className="mt-8 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6 rounded-lg p-6">
            <div>
              <Typography variant="h6" color="black" className="mb-2 font-medium">
                {t("forgot_password_group.new_password_title")}
              </Typography>
              <Input
                maxLength={10}
                type="text"
                size="lg"
                placeholder={t("forgot_password_group.new_password_title")}
                value={idNumber}
                onChange={(e) => { setIdnumber(e.target.value); }}
              />
            </div>
            <div>
              <Typography variant="h6" color="black" className="mb-2 font-medium">
                {t("forgot_password_group.confirm_password_title")}
              </Typography>
              <Input
                maxLength={10}
                type="text"
                size="lg"
                placeholder={t("forgot_password_group.confirm_password_title")}
                value={idNumber}
                onChange={(e) => { setIdnumber(e.target.value); }}
              />
            </div>
            <Button
              className="my-6 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              fullWidth
              onClick={submit}
            >
              {t('confirm')}
            </Button>
          </div>
        </form>
      </Card>
      <Footer />
    </div>
  );
}