import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSignInMutation } from "@/lib/features/Auth";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Breadcrumbs from "../../components/breadcrumbs";
import { Alert } from "@material-tailwind/react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { DialogOneButton } from "@/components/modal_one_button";

export default function SignInPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [signIn] = useSignInMutation();
  const [disableButton, setDisableButton] = useState(false);
  const [isDialogFailedOpen, setIsDialogFailedOpen] = useState(false);
  const [statusCode, setStatusCode] = useState("");


  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("login.please_enter_correct_email_address"))
      .required(t("login.please_enter_your_email")),
    password: yup
      .string()
      .min(1, "")
      .required(t("login.please_enter_your_password")),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setDisableButton(true);
        setServerError("");
        await signIn({
          email: values.email,
          password: values.password,
        }).unwrap();
        router.push("/manageAccommodation");
      } catch (error) {
        setServerError(t("login.email_or_password_is_incorrect"));
        setDisableButton(false);
      }
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <div className="font-prompt grid h-screen grid-rows-[auto_1fr] bg-white">
      <div>
        <Header />
        <div className="hidden sm:block my-10 mx-10">
          <Breadcrumbs>
            <a href="/" className="opacity-80 ml-2">
              {t("home")}
            </a>
            <a href="/signIn" className="text-black">
              {t("login.signIn")}
            </a>
          </Breadcrumbs>
        </div>
      </div>
      <Card
        className="flex items-center justify-center p-8"
        color="transparent"
        shadow={false}
      >
        <Typography className="text-[150%] text-black">
          {t("login.signIn")}
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className={`mb-1 flex flex-col ${formik.submitCount > 0 && (Boolean(formik.errors.email) || Boolean(formik.errors.password)) ? 'gap-3' : 'gap-6'}`}>
            <Input
              error={formik.submitCount > 0 && Boolean(formik.errors.email)}
              type="email"
              label={t("email")}
              size="lg"
              color="black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              className=""
            />
            {Boolean(formik.errors.email) && formik.submitCount > 0 && (
              <Typography variant="small" color="red" className="">
                {formik.errors.email}
              </Typography>
            )}
            <Input
              error={formik.submitCount > 0 && Boolean(formik.errors.password)}
              type="password"
              label={t("password")}
              size="lg"
              color="black"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              className=""
            />
             {Boolean(formik.errors.password) && formik.submitCount > 0 && (
              <Typography variant="small" color="red" className="">
                {formik.errors.password}
              </Typography>
            )}

            <Button
              type="submit"
              disabled={disableButton}
              className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300 text-[100%] font-semibold"
              fullWidth
            >
              {t("login.signIn")}
              <DialogOneButton
              title={t("register.modal_title_success_message")}
              body={t("register.modal_body_success_message")}
              buttonText={t("register.modal_button_success_title")}
              buttonColor="bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
              buttonHandler={() => {
                router.push("/login")
              }}
              open={isDialogFailedOpen}
              setOpen={setIsDialogFailedOpen}
              />
            </Button>
            <Typography
              variant="small"
              color="black"
              className="flex justify-center font-normal my-3"
            >
              <a
                href="/forgotPassword"
                className="font-prompt hover:text-gray-700"
              >
                {t("forgot_password")}
              </a>
            </Typography>
          </div>
        </form>
      </Card>
      <Footer />
    </div>
  );
}
