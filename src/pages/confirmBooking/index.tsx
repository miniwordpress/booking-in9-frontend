import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Breadcrumbs,
} from "@material-tailwind/react";

export default function ConfirmBookingPage() {
  const { t } = useTranslation();

  return (
    <div className="Font-Prompt bg-white">
      <div className="bg-fixed">
        <Header />
      </div>
      <div className="hidden sm:block my-10 mx-10">
        <Breadcrumbs className="">
          <a href="/" className="opacity-80 ml-2">
            {t("home")}
          </a>
          <a href="/register" className="opacity-80 ">
            {t("รายละเอียดที่พัก")}
          </a>
          <a href="/register" className="text-black">
            {t("ยืนยันการจอง")}
          </a>
        </Breadcrumbs>
      </div>

      <div className="flex items-center justify-center w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 mx-6 my-10 xl:mx-16  w-full">
          <div className="flex item-center  xl:items-stretch justify-center xl:w-full gap-8">
            <div className="">
              <Card className="mt-6 w-96 h-84 border  items-center justify-center">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-4">
                    วันที่ต้องการเข้าพัก
                  </Typography>

                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    <img
                      src="/assets/images/calendar.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    วันที่เช็คอิน : 16/10/2567
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    <img
                      src="/assets/images/clock.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    เวลา : 14:00 น.
                  </Typography>
                  <div className="mb-2">
                    <hr></hr>
                  </div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    <img
                      src="/assets/images/calendar.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    วันที่เช็คเอ้าท์ : 18/10/2567
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    <img
                      src="/assets/images/clock.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    เวลา : 12:00 น.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-6 w-96 h-84 border  items-center justify-center">
                <CardBody>
                  <Typography variant="h4" color="blue-gray" className="mb-4">
                    จำนวนผู้เข้าพัก
                  </Typography>

                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 ml-6"
                  >
                    <img
                      src="/assets/images/user.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    ผู้ใหญ่ : 2 คน
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 ml-6"
                  >
                    <img
                      src="/assets/images/user.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    เด็ก : 1 คน
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 ml-6"
                  >
                    <img
                      src="/assets/images/user.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />
                    ทารก : 0 คน
                  </Typography>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-6 ml-6"
                  >
                    <img
                      src="/assets/images/pet.png"
                      alt="calendar"
                      className="relative inline-block mr-2 h-6 w-6"
                    />{" "}
                    สัตว์เลี้ยง : 1 ตัว
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="">
            <Card className="mt-6 w-full h-auto border">
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  รายละเอียดที่พัก
                </Typography>

                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 ml-6"
                >
                  ยอมรับหมวยแอพพริคอทแบรนด์ เมคอัพซิม อุรังคธาตุก๋ากั่นกรีน บึ้ม
                  ซูโม่คลับ ﻿กรรมาชน ท็อปบูตคอร์รัปชั่นวอลนัทอีสเตอร์ตัวตน
                  หมวยคาแรคเตอร์สไลด์ กุมภาพันธ์นอร์ทผลักดัน
                  ไพลินซูฮกคาราโอเกะแคชเชียร์แอปเปิล เนอะเฟอร์รี่มอนสเตอร์ โครนา
                  โฟล์คแคร์บึ้มช็อปปิ้ง แตงกวามาร์ตสเตริโอ
                  จิ๊กซอว์พาสปอร์ตเวสต์แบนเนอร์ ฮิปโป
                  เปเปอร์เที่ยงวันเยอร์บีราแดนเซอร์อุปนายิกาสเกตช์ บรรพชน
                  เด้อกรุ๊ปแรงใจดีพาร์ทเมนต์ไฮเทค ครูเสดดิสเครดิตว้อยซากุระมหภาค
                  ปาร์ตี้แอดมิสชันไวอากร้าเฮอร์ริเคนดิกชันนารี
                  เปเปอร์เที่ยงวันเยอร์บีราแดนเซอร์อุปนายิกาสเกตช์ บรรพชน
                  เด้อกรุ๊ปแรงใจดีพาร์ทเมนต์ไฮเทค ครูเสดดิสเครดิตว้อยซากุระมหภาค
                  ปาร์ตี้แอดมิสชันไวอากร้าเฮอร์ริเคนดิกชันนารี
                </Typography>
                <div className="mb-2 mt-4">
                  <hr></hr>
                </div>
                <Typography variant="h4" color="blue-gray" className="">
                  รายละเอียดราคา
                </Typography>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 mx-2 my-10 xl:mx-16 w-full">
                  <div className="">
                    <Typography variant="h6" color="blue-gray" className="ml-6">
                      5,000.00 บาท x 2 คืน
                    </Typography>
                  </div>
                  <div className="">
                    <Typography variant="h6" color="blue-gray" className="">
                      10,000.00 บาท
                    </Typography>
                  </div>
                  <div className="">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className=" ml-6"
                    >
                      ค่าบริการ In.9.co
                    </Typography>
                  </div>
                  <div className="">
                    <Typography variant="h6" color="blue-gray" className="">
                      500.00 บาท
                    </Typography>
                  </div>
                  <div className="">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className=" ml-6"
                    >
                      รวม(THB)
                    </Typography>
                  </div>
                  <div className="">
                    <Typography variant="h5" color="blue-gray" className="">
                      10,500.00 บาท
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:w-full gap-8 p-16">
        <Card className="mt-6 w-full h-auto border p-16">
          <CardBody>
            <div>
              <Typography variant="h5" color="blue-gray">
                ชำระเงินด้วย
              </Typography>
            </div>
            <div className="p-16">
              <div className="pb-4">
                <Input
                  maxLength={19}
                  label="Card Details"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              {/* <div className="my-4 flex items-center justify-center gap-4 "> */}
              <div className="pb-4">
                <Input maxLength={5} label="Expires" placeholder="00/00" />
              </div>
              <div>
                <Input maxLength={4} label="CVC" placeholder="0000" />
              </div>
            </div>
            {/* </div> */}
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
