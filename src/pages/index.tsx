import { useTranslation } from "react-i18next"
import Header from "../components/header"
import Footer from "../components/footer"
import {
  Carousel,
  Card,
  Select,
  Option,
  Typography,
  Button,
} from "@material-tailwind/react"

export default function SignInPage() {
  const { t } = useTranslation()
  return (
    <>
      <div className=" bg-fixed">
        <Header />
      </div>

      <div className="flex flex-row  bg-[url('/assets/images/friends.png')] bg-cover bg-center ">
        <div className="basis-1/2 items-center justify-center">
        <div className=" ml-8 box-content h-96 w-full p-12">

          <Carousel className="rounded-xl ">
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
        </div>
        <div className="basis-1/2 flex items-center justify-center ">
          <Card className="flex " color="transparent" shadow={false}>
            <Typography variant="h3" color="white" className="[text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
              {t('search_accommodation')}
            </Typography>
            <form className="mt-8 mb-2 ">
              {/* <div className="mb-1 flex flex-col gap-6 rounded-lg border-4  border-purple-300 p-6 bg-box-shadow-signin"> */}
              <div className="mb-1 flex flex-col gap-6 ">
                <div className="w-full">
                <Select label="ตำแหน่งที่ตั้ง" className="bg-white">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
                </div>
                <div className="w-full ">
                <Select label="จังหวัด/รัฐ" className="bg-white">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
                </div>
                <div className="flex items-center gap-2 ">
                  <div>
                    <Select label="ผู้ใหญ่ (13 ปีขึ้นไป)" className="bg-white">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div>
                    <Select label="เด็ก (2-13 ปี)" className="bg-white">
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
                    <Select label="ทารก (น้อยกว่า 2 ปี)" className="bg-white">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                  <div>
                    <Select label="สัตว์เลี้ยง" className="bg-white">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>
                  </div>
                </div>
                <Button className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300" fullWidth>
                  {t('search')}
                </Button>
              </div>
              
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
