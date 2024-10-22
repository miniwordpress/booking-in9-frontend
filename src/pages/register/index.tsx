import React, { useRef } from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useCreateUserMutation } from "@/lib/features/Users";
import { DialogOneButton } from "@components/modal_one_button"
import {
  Card,
  Textarea,
  Typography,
  Input,
  Button,
  Radio,
  Breadcrumbs,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { set } from 'cypress/types/lodash';

export default function SignUpPage() {
  const ID_TYPE = "ID";
  const PASSPORT_TYPE = "PASSPORT";
  const SSN_TYPE = "SSN";
  const TIN_TYPE = "TIN";

  
 
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);
  const [createUser] = useCreateUserMutation();
  const [isDialogSuccessOpen, setIsDialogSuccessOpen] = useState(false);
  const [isDialogFailedOpen, setIsDialogFailedOpen] = useState(false);
  const [statusCode, setStatusCode] = useState("");

  useEffect(() => {
    setLoading(false);
  }, [locale]);

  const initialValues = {
    idNumber: "",
    idNumberType: ID_TYPE,
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    description: "",
  }

  const validationSchema = yup.object({
    idNumberType: yup
      .string(),
    idNumber: yup
      .string()
      .min(10, t("register.min_id_number"))
      .required(t("register.required_id_number")),
    firstName: yup
      .string()
      .required(t("register.required_first_name")),
    lastName: yup
      .string()
      .required(t("register.required_last_name")),
    email: yup
      .string()
      .email(t("register.invalid_email"))
      .required(t("register.required_email")),
    tel: yup
      .string()
      .min(10, t("register.min_tel"))
      .required(t("register.required_tel")),
    description: yup
      .string()
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      createUser(values)
        .unwrap()
        .then((value) => {
          setIsDialogSuccessOpen(true);
          console.error("Create user success", value);
        }).catch((error) => {
          setIsDialogFailedOpen(true);
          setStatusCode(error.status.toString());
          console.error(error);
        })
    },
  });

  return (
    <div className="Font-Prompt grid-rows-[auto_1fr] bg-white">
      <div>
        <Header />
        <div className="hidden sm:block my-10 mx-10">
          <Breadcrumbs className="">
            <a href="/" className="opacity-80 ml-2">
              {t("home")}
            </a>
            <a href="/register" className="text-black">
              {t("register.register")}
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
        <form className="mt-8 md:w-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-1 flex flex-col gap-6 rounded-lg p-6">
            <div>
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
            <div className="flex flex-col gap-2">
              <Radio
                name="idNumberType"
                label={t("register.id")}
                value={ID_TYPE}
                checked={formik.values.idNumberType === ID_TYPE}
                onChange={() => formik.setFieldValue("idNumberType", ID_TYPE)}
              />
              <Radio
                name="idNumberType"
                label={t("register.passport")}
                value={PASSPORT_TYPE}
                checked={formik.values.idNumberType === PASSPORT_TYPE}
                onChange={() => formik.setFieldValue("idNumberType", PASSPORT_TYPE)}
              />
              <Radio
                name="idNumberType"
                label={t("register.ssn")}
                value={SSN_TYPE}
                checked={formik.values.idNumberType === SSN_TYPE}
                onChange={() => formik.setFieldValue("idNumberType", SSN_TYPE)}
              />
              <Radio
                name="idNumberType"
                label={t("register.tin")}
                value={TIN_TYPE}
                checked={formik.values.idNumberType === TIN_TYPE}
                onChange={() => formik.setFieldValue("idNumberType", TIN_TYPE)}
              />
            </div>
            <div>
              <Input
                maxLength={50}
                type="text"
                size="lg"
                label={t("register.number_passport")}
                name="idNumber"
                id="idNumber"
                value={formik.values.idNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    formik.handleChange(e);
                  }
                }}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.idNumber) && formik.submitCount > 0}
              />
              {Boolean(formik.errors.idNumber) && formik.submitCount > 0 && (
                <Typography variant="small" color="red" className="mt-2">
                  {formik.errors.idNumber}
                </Typography>
              )}
            </div>
            <div className="grid grid-row xl:grid-cols-2 justify-stretch gap-4">
              <div>
                <Input
                  maxLength={255}
                  label={t("register.name")}
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.firstName) && formik.submitCount > 0}
                />
                {Boolean(formik.errors.firstName) && formik.submitCount > 0 && (
                  <Typography variant="small" color="red" className="mt-2">
                    {formik.errors.firstName}
                  </Typography>
                )}
              </div>
              <div>
                <Input
                  maxLength={255}
                  label={t("register.lastName")}
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.lastName) && formik.submitCount > 0}
                />
                {Boolean(formik.errors.lastName) && formik.submitCount > 0 && (
                  <Typography variant="small" color="red" className="mt-2">
                    {formik.errors.lastName}
                  </Typography>
                )}
              </div>
            </div>
            <div className="grid grid-row xl:grid-cols-2 justify-stretch gap-4">
              <div>
                <Input
                  maxLength={255}
                  label={t("register.email")}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.email) && formik.submitCount > 0}
                />
                {Boolean(formik.errors.email) && formik.submitCount > 0 && (
                  <Typography variant="small" color="red" className="mt-2">
                    {formik.errors.email}
                  </Typography>
                )}
              </div>
              <div>
                <Input
                  maxLength={30}
                  label={t("register.tel")}
                  name="tel"
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.tel) && formik.submitCount > 0}
                />
                {Boolean(formik.errors.tel) && formik.submitCount > 0 && (
                  <Typography variant="small" color="red" className="mt-2">
                    {formik.errors.tel}
                  </Typography>
                )}
              </div>
            </div>
            <Textarea
              rows={4}
              name="recommend"
              label={t("register.recommend")}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.description) && formik.submitCount > 0}
            />
            {Boolean(formik.errors.description) && formik.submitCount > 0 && (
              <Typography variant="small" color="red" className="mt-2">
                {formik.errors.description}
              </Typography>
            )}
            <div />
            <Button
              type="button"
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              fullWidth
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              {t("confirm")}
            </Button>
              <DialogOneButton
              title={t("register.modal_title_success_message")}
              body={t("register.modal_body_success_message")}
              buttonText={t("register.modal_button_success_title")}
              buttonColor="bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              buttonHandler={() => {
                router.push("/login")
              }}
              open={isDialogSuccessOpen}
              setOpen={setIsDialogSuccessOpen}
              />
              <DialogOneButton
              title={`${t("register.modal_title_failed_message")} [${statusCode}]`}
              body={parseInt(statusCode, 10) >= 400 && parseInt(statusCode, 10) < 500 ? t("register.modal_body_failed_normal_message") : t("failed_server_down_message")}
              buttonText={t("register.modal_button_failed_title")}
              buttonColor="bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              buttonHandler={() => {}}
              open={isDialogFailedOpen}
              setOpen={setIsDialogFailedOpen}
              />
          </div>
        </form>
      </Card>
      <Footer />
    </div>
  );
}