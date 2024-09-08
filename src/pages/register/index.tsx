import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import LocaleSwitcher from "../../components/language_switcher"
import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumbs from "../../components/breadcrumbs";

import {
  Card,
  Textarea,
  Typography,
  Input,
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

  //ยังไม่ได้ทำระบบ 2 ภาษา

  return (
    <div className="grid  grid-rows-[auto_1fr] bg-primary-background">
      <div>
        <Header />
        <Breadcrumbs />
      </div>
      <Card
        className="flex items-center justify-center"
        color="transparent"
        shadow={false}
      >
        <Typography variant="h3" color="white">
          {t("ลงทะเบียน/สมัครสมาชิก")}
        </Typography>
        <form className="mt-8 w-96 md:w-auto">
          <div className="mb-1 flex flex-col gap-6 rounded-lg p-6 ">
            <div className="">
              <label  className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                      {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          <div>
              <Typography variant="h6" color="white" className="mb-2 font-medium">
                {t("เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง/เลขนิติบุคคล *")}
              </Typography>
              <Input
                type="email"
                size="lg"
                placeholder="email@mail.com"
                className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  ชื่อ *
                </Typography>
                <Input
                  maxLength={5}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="00/00"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  นามสกุล *
                </Typography>
                <Input
                  maxLength={4}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="000"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  ชื่อ (ภาษาอังกฤษ) *
                </Typography>
                <Input
                  maxLength={5}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="00/00"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  นามสกุล (ภาษาอังกฤษ) *
                </Typography>
                <Input
                  maxLength={4}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="000"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  อีเมล *
                </Typography>
                <Input
                  maxLength={5}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="00/00"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 font-medium"
                >
                  เบอร์โทร *
                </Typography>
                <Input
                  maxLength={4}
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="000"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <Typography variant="small" color="white" className=" font-medium">
            ข้อมูลแนะนำผู้ให้เช่า ธุรกิจที่มี หรือต้องการหนุนเสริมด้านธุรกิจ
            </Typography>
            <Textarea
              rows={4}
              containerProps={{ className: "min-w-[72px]" }}
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div />
            <Button
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              fullWidth
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