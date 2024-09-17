import { useTranslation } from "react-i18next";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  Carousel,
  Card,
  Select,
  Option,
  Typography,
  Button,
  Avatar,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function SignInPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" bg-fixed">
        <Header />
      </div>

      <div className="flex flex-row  bg-[url('/assets/images/friends.png')] bg-cover bg-center ">
        <div className="basis-1/2 items-center justify-center rounded-md h-full w-ful">
          <div className=" ml-8 box-content  p-16">
            <Carousel className="rounded-xl ">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center ">
          <Card className="flex " color="transparent" shadow={false}>
            <Typography
              variant="h3"
              color="white"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]"
            >
              {t("search_accommodation")}
            </Typography>
            <form className="mt-8 mb-2 ">
              {/* <div className="mb-1 flex flex-col gap-6 rounded-lg border-4  border-purple-300 p-6 bg-box-shadow-signin"> */}
              <div className="mb-1 flex flex-col gap-8 ">
                <div className="w-full ">
                  <Select label={t("Location")} className="bg-white h-14">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <div className="w-full">
                  <Select label={t("Province_State")} className="bg-white h-14">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Select label={t("adult")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div>
                    <Select label={t("Children")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <Select label={t("infant")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div>
                    <Select label={t("pets")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                </div>
                <Button
                  className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
                  fullWidth
                >
                  <Typography variant="h5">{t("search")}</Typography>
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <>
        <div className="flex items-center justify-center mt-8 mb-8">
          <Card className="rounded-lg bg-zinc-300">
            <div className="p-6 w-auto  grid grid-cols-5 gap-8 ">
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="border border-green-500 shadow-xl hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("บ้านเดียว")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="border border-green-500 shadow-xl hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("โรงแรม")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="border border-green-500 shadow-xl hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("อพาร์ทเมนท์")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="border border-green-500 shadow-xl hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("บ้านทาวน์โฮม")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="border border-green-500 shadow-xl hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("คอนโด")}
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </>
      <>
        <div className="flex items-center justify-center mt-8 mb-8">
          <div className="p-8 w-full  grid grid-cols-5 gap-4 ">
          <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
            </Card>
            
           
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
