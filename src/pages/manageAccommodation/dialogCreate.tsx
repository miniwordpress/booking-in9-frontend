import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import SidebarMenu from "@/components/SidebarMenu";
import HeaderBaseAdmin from "../../components/header_admin";

import {
  Textarea,
  Typography,
  Input,
  Button,
  Radio,
  Card,
  Select,
  Option,
} from "@material-tailwind/react";

export function createAccommodation() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="font-prompt grid h-full grid-rows-[auto_1fr] bg-white ">
      <div>
        <HeaderBaseAdmin />
        <div className="hidden sm:block my-10 mx-10"></div>
      </div>
      <Card
        className="flex items-center justify-center p-8"
        color="transparent"
        shadow={false}
      >
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-3 ">
            <div className="w-full">
              <Select label={t("ประเภทที่พัก")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <Input
              type="text"
              size="lg"
              color="black"
              placeholder="กรอกชื่อที่พัก"
              label="ชื่อที่พัก"
            />
            <div className="w-full">
              <Select label={t("ประเทศ")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select label={t("รัฐ/จังหวัด")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <Textarea
              rows={4}
              label="ที่อยู่ของที่พัก"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label="ที่อยู่ของที่พัก (Eng)"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label="ตำแหน่งที่ตั้ง (เเนบลิ้งค์ google map)"
              size="lg"
              placeholder="กรอกตำแหน่งที่ตั้ง"
              color="black"
              type="text"
            />
            <Textarea
              rows={4}
              label="รายละเอียดเพิ่มเติมของที่พัก"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label="รายละเอียดเพิ่มเติมของที่พัก (Eng)"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label="เบอร์โทร"
              size="lg"
              placeholder="กรอกเบอร์โทร"
              color="black"
              type="text"
            />
            <Textarea
              rows={4}
              label="สิ่งอำนวยความสะดวก"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label="สิ่งอำนวยความสะดวก (Eng)"
              containerProps={{ className: "min-w-[72px]" }}
            />
            <div className="flex flex-col gap-2">
              <Radio name="type" label="Pet" />
            </div>
            <div className="">
              <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
                <label
                  for="upload"
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-indigo-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-600 font-medium">Upload file</span>
                </label>
                <input id="upload" type="file" className="hidden" />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default createAccommodation;
