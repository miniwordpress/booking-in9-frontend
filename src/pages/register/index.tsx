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

  const [idnumber, setIdnumber] = useState("");
  const [idType, setIdType] = useState(ID_TYPE);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [description, setDescription] = useState("");
  const [createUser] = useCreateUserMutation()

  const submit = () => {
    createUser({idnumber, idType, firstName, lastName, email, tel, introduce: description})
  }
 
  useEffect(() => {
    setLoading(false);
  }, [locale]);

  return (
    <div className="Font-Prompt grid-rows-[auto_1fr] bg-white">
      <div>
        <Header />
        <div className="hidden sm:block my-10 mx-10">
        <Breadcrumbs className="">
        <a href="/" className="opacity-80 ml-2">
          {t('home')}
        </a>
        <a href="/register" className="text-black">
          {t('register.register')}
        </a>
        </Breadcrumbs>
      </div>
      </div>
      <Card
        className="flex items-center justify-center"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h3" color="black" className="p-6">
          {t("register.register")}
        </Typography>
        <form className="mt-8 md:w-auto">
          <div className="mb-1 flex flex-col gap-6 rounded-lg p-6 ">
            <div className="">
              <label  className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{t("click_upload_file")}</span></p>
                      {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <Radio name="type" label={t("register.id")} value={ID_TYPE} checked={idType === ID_TYPE} onClick={() => setIdType(ID_TYPE)} />
              <Radio name="type" label={t("register.passport")} value={PASSPORT_TYPE} checked={idType === PASSPORT_TYPE} onClick={() => setIdType(PASSPORT_TYPE)} />
              <Radio name="type" label={t("register.ssn")} value={SSN_TYPE} checked={idType === SSN_TYPE} onClick={() => setIdType(SSN_TYPE)} />
              <Radio name="type" label={t("register.tin")} value={TIN_TYPE} checked={idType === TIN_TYPE} onClick={() => setIdType(TIN_TYPE)} />
            </div>
          <div>
              <Typography variant="h6" color="black" className="mb-2 font-medium">
                {t("register.number_passport")}
              </Typography>
              <Input
                maxLength={50}
                type="number"
                size="lg"
                placeholder={t("register.number_passport")}
                value={idnumber}
                onChange={(e) => { setIdnumber(e.target.value); }}
              />
            </div>
            <div className="grid grid-row xl:grid-cols-2 justify-stretch gap-4">
              <div>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-2 font-medium"
                >
                  {t("register.name")} *
                </Typography>
                <Input
                  maxLength={50}
                  containerProps={{ className: "" }}
                  placeholder={t("register.name")}
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-2 font-medium"
                >
                  {t("register.lastName")} *
                </Typography>
                <Input
                  maxLength={50}
                  containerProps={{ className: "" }}
                  placeholder={t("register.lastName")}
                  value={lastName}
                  onChange={(e) => { setLastname(e.target.value); }}
                />
              </div>
            </div>
            <div className="grid grid-row xl:grid-cols-2 justify-stretch gap-4">
              <div>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-2 font-medium"
                >
                  {t("register.email")} *
                </Typography>
                <Input
                  maxLength={50}
                  containerProps={{ className: "" }}
                  placeholder={t("register.email")}
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="black"
                  className="mb-2 font-medium"
                >
                  {t("register.tel")} *
                </Typography>
                <Input
                  maxLength={20}
                  containerProps={{ className: "" }}
                  placeholder={t("register.tel")}
                  value={tel}
                  onChange={(e) => { setTel(e.target.value); }}
                />
              </div>
            </div>
            <Typography variant="h6" color="black" className=" font-medium">
            {t("register.recommend")}
            </Typography>
            <Textarea
              rows={4}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder=""
              value={description}
              onChange={(e) => { setDescription(e.target.value); }}
            />
            <div />
            <Button
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
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
