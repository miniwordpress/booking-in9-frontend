import React, { useRef } from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SidebarMenu from "@/components/SidebarMenu";
import HeaderBaseAdmin from "../../components/header_admin";

import {
  Card,
  Textarea,
  Typography,
  Input,
  Breadcrumbs,
  Button,

} from "@material-tailwind/react";


export default function ManageAccount() {

  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, [locale]);

 

  return (
    <div className="font-prompt font-black flex flex-row h-screen w-full">
      <div className="basis-1/5 h-full">
        <SidebarMenu/>
      </div>
      <div className="basis-1/1 w-full h-full">
        <HeaderBaseAdmin/>
        <div className="bg-white h-screen flex justify-center">
        <form className="mt-10">
          <div className="mb-1 mt-12 flex flex-col gap-6 rounded-lg p-4">
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">{t("click_upload_file")}</span>
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="w-full mt-4">
              <Input
                maxLength={50}
                type="text"
                size="lg"
                label={t("register.number_passport")}
                name="idNumber"
                id="idNumber"
              />
            </div>
            <div className="grid grid-row xl:grid-cols-2  gap-4 mt-4">
              <div>
                <Input
                  maxLength={255}
                  label={t("register.name")}
                  name="firstName"
                 
                />
               
              </div>
              <div>
                <Input
                  maxLength={255}
                  label={t("register.lastName")}
                  name="lastName"
                  
                />
              </div>
            </div>
            <div className="grid grid-row xl:grid-cols-2 justify-stretch gap-4 mt-4">
              <div>
                <Input
                  maxLength={255}
                  label={t("register.email")}
                  name="email"
                 
                />
               
              </div>
              <div>
                <Input
                  maxLength={30}
                  label={t("register.tel")}
                  name="tel"
                 
                />
              
              </div>
            </div>
            <div className="mt-4">

            <Textarea
              rows={4}
              name="recommend"
              label={t("register.recommend")}
              
              />
              </div>
           
            <div />
            <div className="mt-4">
            <Button
              type="button"
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              fullWidth
              >
              {t("confirm")}
            </Button>
              </div>
            </form>
        </div>
      </div>
      </div>
      
  );
}