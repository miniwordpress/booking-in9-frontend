import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import {
  Carousel,
  Card,
  Select, 
  Option,
  Typography,
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
    <>
    <div className=" bg-fixed">
    <Header/>
    </div>

  <div className="flex flex-row bg-[url('/assets/images/friend.jpg')]  w-full">
  <div className="basis-1/2">
  <Carousel className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
              />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
              />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
              />
          </Carousel>
  </div>
  <div className="basis-1/2">
  <Card className="flex items-center justify-center " color="transparent" shadow={false}>
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
          <div className="w-full ">
            <Select   
            className=" !border-t-blue-gray-500 focus:!border-t-gray-900 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}>
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <Button className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300" fullWidth>
            {t('signIn')}
          </Button>
          </div>
        </form>
      </Card>
  </div>
</div>
    {/* <div>
    <figure className="relative h-96 w-full ">
      <div>
        <img
          className=" h-96  w-full"
          src="/assets/images/friend.jpg"
          alt="nature image"
          />
      </div>
        <div className="flex flex-row">
         <div className="basis-1/2">
      <figcaption className="absolute bottom-8 top-8 left-1/4 flex w-[calc(35%-4rem)] -translate-x-2/4 rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <Carousel className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
              />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
              />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
              />
          </Carousel>
      </figcaption>
              </div>
        </div>
      
    </figure>

    </div> */}
    <Footer/>
    </>
  );
}
