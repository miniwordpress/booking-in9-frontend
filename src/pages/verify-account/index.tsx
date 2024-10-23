import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useVerifyAccountMutation } from "@/lib/features/Auth";
import Header from "../../components/header";
import { DialogOneButton } from "@/components/modal_one_button";
import { useSearchParams } from 'next/navigation'

export default function verifyAccountPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [verifyAccount] = useVerifyAccountMutation();
  const [isDialogSuccessOpen, setIsDialogSuccessOpen] = useState(false);
  const [isDialogFailedOpen, setIsDialogFailedOpen] = useState(false);
  const [statusCode, setStatusCode] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  console.log(token);
  
  useEffect(() => {
    if (token != null) {
        console.log(token);


        verifyAccount({token})
        .unwrap()
        .then((value) => {  
        setIsDialogSuccessOpen(true);
        console.log("verify success", value);
      }).catch((error) => {
        setIsDialogFailedOpen(true);
        setStatusCode(error.status.toString());
        console.error(error);
      })
    } 
    return () => {};
  }, [token]);
  
  return (
    <div className="font-prompt grid h-screen grid-rows-[auto_1fr] bg-white">
      <Header />
      <DialogOneButton
        title={t("verify_account.title_modal_success")}
        body={t("verify_account.message_modal_success")}
        buttonText={t("verify_account.title_button_go_to_login")}
        buttonColor="bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
        buttonHandler={() => {
          router.push("/signIn");
        }}
        open={isDialogSuccessOpen}
        setOpen={setIsDialogFailedOpen}
      />
      <DialogOneButton
        title={t("verify_account.title_modal_error")}
        body={parseInt(statusCode, 10) >= 400 && parseInt(statusCode, 10) < 500 ? t("verify_account.message_modal_error") : t("failed_server_down_message")}
        buttonText={t("verify_account.title_button_go_to_login")}
        buttonColor="bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
        buttonHandler={() => {
          router.push("/signIn");
        }}
        open={isDialogFailedOpen}
        setOpen={setIsDialogFailedOpen}
      />
    </div>
  );
}
