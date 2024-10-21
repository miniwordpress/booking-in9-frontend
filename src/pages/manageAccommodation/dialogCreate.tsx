import { useTranslation } from "react-i18next";
import HeaderBaseAdmin from "../../components/header_admin";

import {
  Textarea,
  Input,
  Radio,
  Card,
  Select,
  Option,
} from "@material-tailwind/react";

export function createAccommodation() {
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
              <Select label={t("manageAccommodation_create.accommodationType")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <Input
              type="text"
              size="lg"
              color="black"
              placeholder={t("manageAccommodation_create.please_fill_name_of_accommodation")}
              label={t("manageAccommodation_create.name_of_accommodation")}
            />
            <div className="w-full">
              <Select label={t("manageAccommodation_create.country")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select label={t("manageAccommodation_create.province_state")} className="bg-white" size="lg">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
              </Select>
            </div>
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.accommodation_address")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.accommodation_address_eng")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label={t("manageAccommodation_create.location")}
              size="lg"
              placeholder={t("manageAccommodation_create.please_fill_location")}
              color="black"
              type="text"
            />
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.accommodation_details")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.accommodation_details_eng")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label={t("manageAccommodation_create.phone_number")}
              size="lg"
              placeholder={t("manageAccommodation_create.please_phone_number")}
              color="black"
              type="text"
            />
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.facilities")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Textarea
              rows={4}
              label={t("manageAccommodation_create.facilities_eng")}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <div className="flex flex-col gap-2">
              <Radio name="type" label={t("manageAccommodation_create.pets")} />
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
