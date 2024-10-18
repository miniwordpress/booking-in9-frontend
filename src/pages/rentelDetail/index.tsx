import { useTranslation } from "react-i18next";
import { useState } from "react"
import Header from "@components/header";
import Footer from "@components/footer";
import {
  Carousel,
  Card,
  Select,
  Option,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Breadcrumbs
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function MainPage() {
  const { t } = useTranslation();
  const [checkin, setCheckin] = useState<Date>();
  const [checkout, setCheckout] = useState<Date>();
  const data = [
    {
      imgelink:
      "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_1.jpg",
    },
    {
      imgelink:
        "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_5.jpg",
    },
    {
      imgelink:
        "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_15.jpg",
    },
    {
      imgelink:
        "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_24.jpg",
    },
    {
      imgelink:
        "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_51.jpg",
    },
    {
      imgelink:
        "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_40.jpg",
    },
    
  ];
 
  const [active, setActive] = useState(
    "https://baanpoolvillas.com/wp-content/uploads/2024/03/LINE_ALBUM_2024.3.24_240324_48.jpg",
  );
  return (
    <>
      <div className="bg-fixed">
        <Header />
      </div>
      <div className="hidden sm:block my-10 mx-10">
        <Breadcrumbs className="">
        <a href="/" className="opacity-80 ml-2">
          {t('home')}
        </a>
        <a href="/register" className="text-black">
          {t('รายละเอียดที่พัก')}
        </a>
        </Breadcrumbs>
      </div>
      <div className=" p-16">
        <div className="p-4">
        <Typography
                    variant="h3"
                    color="black"
                  >
        {t('บ้านพักพูลวิลล่าหัวหิน')}
                  </Typography>

        </div>
      <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[550px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-9 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-50 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
      </div>

      
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-6 my-10 xl:mx-16   h-96 w-full">
            <div className="">
                  <Typography
                    variant="h4"
                    color="black"
                    className="mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  >
                    {t("บ้านเดี่ยว")}
                  </Typography>
                  
                  <Typography
                    variant="h3"
                    color="black"
                    className=""
                  >
                    {t("อ.หัวหิน จ.ประจวบคีรีขันธ์")}
                  </Typography>
                 
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mt-4"

                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รายละเอียดที่พัก
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-2"

                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ยอมรับหมวยแอพพริคอทแบรนด์ เมคอัพซิม อุรังคธาตุก๋ากั่นกรีน บึ้ม ซูโม่คลับ ﻿กรรมาชน ท็อปบูตคอร์รัปชั่นวอลนัทอีสเตอร์ตัวตน หมวยคาแรคเตอร์สไลด์ กุมภาพันธ์นอร์ทผลักดัน ไพลินซูฮกคาราโอเกะแคชเชียร์แอปเปิล เนอะเฟอร์รี่มอนสเตอร์ โครนา โฟล์คแคร์บึ้มช็อปปิ้ง แตงกวามาร์ตสเตริโอ จิ๊กซอว์พาสปอร์ตเวสต์แบนเนอร์ ฮิปโป เปเปอร์เที่ยงวันเยอร์บีราแดนเซอร์อุปนายิกาสเกตช์ บรรพชน เด้อกรุ๊ปแรงใจดีพาร์ทเมนต์ไฮเทค ครูเสดดิสเครดิตว้อยซากุระมหภาค ปาร์ตี้แอดมิสชันไวอากร้าเฮอร์ริเคนดิกชันนารี
                  </Typography>
                </div>
            <div className="flex item-center xl:items-stretch justify-center xl:w-full p-4">
            {/* <div className="my-6 mx-6 xl:mx-14 xl:my-12 flex-grow xl:flex-grow-0"> */}
            <Card
              className="w-full backdrop-blur-sm bg-white/90 p-4"
              color="transparent"
              shadow={false}
            >
              <Typography
                variant="h3"
                color="black"
                className="[text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]"
              >
                {t("1,500 - 3,000 THB/NIGHT")}
              </Typography>
              <form className="mt-4 mb-2 w-full">
                <div className="mb-8 flex flex-col gap-8">
                
                  <div className="flex flex-col gap-8 md:flex-row md:gap-2 items-center">
                  <div className="w-full">
                  <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Check In"
            className = "bg-white"
            onChange={() => null}
            value={checkin ? format(checkin, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={checkin}
            onSelect={setCheckin}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
          />
        </PopoverContent>
      </Popover>
                    </div>
                    <div className="w-full">
                    <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Check Out"
            className = "bg-white"
            onChange={() => null}
            value={checkout ? format(checkout, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={checkout}
            onSelect={setCheckout}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
          />
        </PopoverContent>
      </Popover>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 md:flex-row md:gap-2 items-center">
                    <div className="w-full">
                    <Input label={t("adult")} className="bg-white"/>
                    </div>
                    <div className="w-full">
                    <Input label={t("children")} className="bg-white "/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 w-full md:flex-row items-center md:gap-2">
                    <div className="w-full">
                    <Input label={t("infant")} className="bg-white "/>
                    </div>
                    <div className="w-full">
                    <Input label={t("pets")} className="bg-white "/>
                    </div>
                  </div>
                  <Button
                    className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300"
                    fullWidth
                  >
                    <Typography variant="h5">{t("จอง")}</Typography>
                  </Button>
                </div>
              </form>
            </Card>
        </div>
            </div>
          </div>
        {/* </div> */}
        <div className="mt-14 grid grid-cols-1 xl:grid-cols-2 gap-4 h-full w-full border-t-2 border-yellow-800 py-4 px-8 md:flex-row md:justify-between">
          <div className="grid justify-items-center items-center">
          <Card className="w-96 h-full">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/face-2.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Mr.Admin
        </Typography>

      </CardBody>
     
    </Card>
          </div>
          <div className="">
          <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mt-4"

                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; เกี่ยวกับผู้ให้เช่า
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-4"

                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ใช้งานฟลุท ออร์แกนิกโปรโมเตอร์ยนตรกรรมซาฟารี
                    สเก็ตช์คอรัปชั่นชัตเตอร์โปรเจคท์ ฟลุกโจ๋ครูเสดพาเหรดนิว เรซิ่นนินจา ตัวตนกาญจนาภิเษกโพสต์มาร์ก วอลล์เซ็กซี่เอสเปรสโซ โพสต์อุปการคุณหล่อฮังก้วย จ๊าบสะเด่า บรรพชนลิสต์สัมนา ไมค์ท็อปบูตกฤษณ์เปโซสมาพันธ์ คลับมินท์แอดมิชชั่นสต็อคหยวน อิกัวนาดัมพ์ วาริชศาสตร์แอดมิชชั่นเซ่นไหว้อุด้ง เป่ายิ้งฉุบไฮเปอร์เฟรชชี่ถูกต้องหน่อมแน้ม เชอร์รี่
                  </Typography>
            </div>

        </div>
      <Footer />
    </>
  );
}
