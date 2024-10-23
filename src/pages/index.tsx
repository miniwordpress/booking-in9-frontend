import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import { useListAccommodationMutation } from "@/lib/features/Accommodation";
import { useEffect, useState } from "react";
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

export default function MainPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const [loading, setLoading] = useState(true);
  const [ListAccommodation] = useListAccommodationMutation();


  useEffect(() => {
    setLoading(false);
  }, [locale]);


  return (
    <>
      <div className="bg-fixed">
        <Header />
      </div>

      <div className="flex flex-col items-center xl:flex-row xl:items-stretch justify-center bg-[url('/assets/images/friends.png')] bg-cover bg-center">
        <div className="my-6 mx-6 xl:mx-14 xl:my-12 flex-grow">
          <Carousel className="rounded-xl w-full max-w-lg">
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
        <div className="my-6 mx-6 xl:mx-14 xl:my-12 flex-grow xl:flex-grow-0">
            <Card
              className="w-full backdrop-blur-sm bg-white/30 p-6"
              color="transparent"
              shadow={false}
            >
              <Typography
                variant="h3"
                color="white"
                className="[text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]"
              >
                {t("search_accommodation")}
              </Typography>
              <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-8">
                  <div className="w-full">
                    <Select label={t("location")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Select label={t("province_state")} className="bg-white h-14">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-8 md:flex-row md:gap-2 items-center">
                    <div className="w-full">
                      <Select label={t("adult")} className="bg-white h-14">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>
                    </div>
                    <div className="w-full">
                      <Select label={t("children")} className="bg-white h-14">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 w-full md:flex-row items-center md:gap-2">
                    <div className="w-full">
                      <Select label={t("infant")} className="bg-white h-14">
                        <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select>
                    </div>
                    <div className="w-full">
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
            <div className="p-6 w-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="/assets/images/home.png"
                  className="hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("house")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="/assets/images/hotel.png"
                  className="hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("hotel")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="/assets/images/Apartment.png"
                  className=" hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("apartment")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="/assets/images/townhome.png"
                  className=" hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("townhome")}
                </Typography>
              </div>
              <div className="">
                <Avatar
                  size="xxl"
                  alt="avatar"
                  src="/assets/images/condo.png"
                  className=" hover:ring ring-pink-200 shadow-pink-900/20 "
                />
                <Typography className="text-center mt-4" variant="h6">
                  {t("condominium")}
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </>
      <>
        <div className="flex items-center justify-center mt-8 mb-8 xl:mx-6">
          <div className="p-8 w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 ">
            <a href="http://localhost:3000/rentelDetail" target="_blank" rel="noopener noreferrer">
              <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                src="https://picsum.photos/600/600"
                alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                <Card color="blue" className="items-center justify-centers">
                  Thailand
                </Card>
                <div className="">
                  <img src="/assets/images/thailand.png" />
                </div>
                </div>
                <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-2"
                >
                STAY Hotel Bangkok
                </Typography>
                <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
                >
                5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                color="blue-gray"
                className="font-medium mt-2"
                textGradient
                >
                1,200-2,200 THB
                </Typography>
              </CardBody>
              </Card>
            </a>

            {/* <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://picsum.photos/600/600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-centers">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card>

            <Card className="w-92 shadow-xl hover:shadow-orange-900/50">
              <CardHeader floated={false} className="h-60">
                <img
                  src="https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="">
                <div className="grid grid-cols-3 gap-4 items-center justify-center">
                  <Card color="blue" className="items-center justify-centers">
                    Thailand
                  </Card>
                  <div className="">
                    <img src="/assets/images/thailand.png" />
                  </div>
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 mt-2"
                >
                  STAY Hotel Bangkok
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  5 ซอย รัชดาภิเษก 17 แขวงรัชดาภิเษก ดินแดง กรุงเทพมหานคร 10400
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium mt-2"
                  textGradient
                >
                  1,200-2,200 THB
                </Typography>
              </CardBody>
            </Card> */}
          </div>
        </div>
        <div className="flex items-center justify-center bg-footer-background w-full mt-5">
          <div className="">
            <Typography variant="h3" color="orange" className="mt-8 mb-8">
              {t("what you will receive from in9.co")}
              {/* สิ่งที่คุณจะได้รับจาก In9.co */}
            </Typography>
          </div>
        </div>
        <div className="bg-[url('/assets/images/lgbt.png')] bg-cover">
          <div className="grid grid-cols-3 gap-4 items-center justify-center h-[400px] w-[100px]">
            <div className="flex items-center justify-center ">
              {/* <img src="/assets/images/experience.png" /> */}
            </div>
            <div className="flex items-center justify-center">
              <img src="/assets/images/comfortable.png" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/assets/images/business.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-stretch justify-center bg-footer-background">
            <div className="flex flex-col xl:flex-row justify-center h-full">
            <div className="flex mx-6 xl:mx-4 justify-center">
              <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
                <div className="p-4 ">
                  <Typography
                    variant="h4"
                    color="orange"
                    className="text-center"
                  >
                    {t("experience")}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="text-center font-medium mt-2"
                    textGradient
                  >
                    {t("เปิดประสบการณ์แปลกใหม่ ในการจองที่พัก พบกับชุมชนที่เป็นมิตร ทำให้การพักผ่อนของคุณ เต็มไปด้วยความทรงจำที่น่าประทับใจ")}
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex mx-6 xl:mx-4 justify-center">
              <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
                <div className="p-4 ">
                  <Typography
                    variant="h4"
                    color="orange"
                    className="text-center"
                  >
                    {t("fast convenient")}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="text-center font-medium mt-2"
                    textGradient
                  >
                    {t("จองที่พักสะดวกสบายในไม่กี่คลิก พบที่พักถูกใจ รวดเร็วและง่ายดาย ตอบโจทย์ทุกการเดินทางของคุณ")}
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex mx-6 xl:mx-4 justify-center">
              <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ">
                <div className="p-4">
                  <Typography
                    variant="h4"
                    color="orange"
                    className="text-center"
                  >
                    {t("business partner")}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="text-center font-medium mt-2"
                    textGradient
                  >
                    {t("ฝ่ายบริการลูกค้าของเรา พร้อมช่วยเหลือ และให้คำแนะนำคุณ ตลอด 24 ชั่วโมง")}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center justify-center w-full">
          <div className="hiddden flex items-center justify-center p-4 xl:p-16 xl:border-black border-r">
            <img src="/assets/images/registerUser.png" />
          </div>
          <div className="hidden xl:grid xl:grid-cols-3 xl:gap-4 items-center justify-center xl:h-96 xl:p-16 w-full">
            <img src="/assets/images/groupFriend_01.png" />
            <img src="/assets/images/groupFriend_02.png" />
            <img src="/assets/images/groupFriend_03.png" />
          </div>
        </div>
        <div className="bg-[url('/assets/images/friend_group.png')] w-full h-96 bg-cover"></div>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-6 my-10 xl:mx-16 items-center justify-center h-96 w-full">
            <div className="">
                  <Typography
                    variant="h2"
                    color="black"
                    className="text-center"
                  >
                    {t("How to get visa USA")}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="text-center font-medium mt-2"

                  >
                    {t("ร่วมแชร์ประสบการณ์ ให้คำแนะนำเบื้องต้นในการเตรียมความพร้อมในการทำ visa แนะนำแนวทางที่ถูกต้อง.. เพื่อที่คุณจะไม่ต้องเสียเวลา..")}
                  </Typography>
                  <div className="flex items-center justify-center mt-6">
                  <a href="https://www.rakoonda.co/" target="_blank"><Button color="blue">{t("main_page.more_information")}</Button></a>
                  </div>
                </div>
            <div className="flex item-center xl:items-stretch justify-center xl:w-full">
              <img src="/assets/images/airPlane.png" className="items-center justify-items-center w-3/4 xl:w-full"/>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}
