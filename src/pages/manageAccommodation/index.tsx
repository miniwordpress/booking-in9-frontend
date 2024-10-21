import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import SidebarMenu from "@/components/SidebarMenu";
import HeaderBaseAdmin from "../../components/header_admin";
import DialogCreate from "./dialogCreate";

import {
  Card,
  Chip,
  Typography,
  Tooltip,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function manageAccommodation() {
  const router = useRouter();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const TABLE_HEAD = ["ลำดับ", "ชื่อที่พัก", "Status", "จัดการ"];

  const TABLE_ROWS = [
    {
      name: "1",
      job: "Manager",
      status: "Open",
    },
    {
      name: "2",
      job: "Developer",
      status: "Pending",
    },
    {
      name: "3",
      job: "Executive",
      status: "Open",
    },
    {
      name: "4",
      job: "Developer",
      status: "Open",
    },
    {
      name: "5",
      job: "Manager",
      status: "Closed",
    },
    {
      name: "6",
      job: "Manager",
      status: "Open",
    },
    {
      name: "7",
      job: "Manager",
      status: "Open",
    },
    {
      name: "8",
      job: "Manager",
      status: "Open",
    },
    {
      name: "9",
      job: "Manager",
      status: "Open",
    },
    {
      name: "10",
      job: "Manager",
      status: "Closed",
    },
  ];
  return (
    <div className="font-prompt font-black flex flex-row h-screen w-full bg-white">
      <div className="basis-1/5 ">
        <SidebarMenu />
      </div>
      <div className="basis-1/1 w-full">
        <HeaderBaseAdmin />
        <div className="bg-white p-12">
          <div className="flex justify-between items-center mb-4">
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-bold leading-none opacity-70"
            >
              {t("manage_accommodation.accommodation_anagement")}
            </Typography>
            <a href="/manageAccommodation/dialogCreate" className="font-prompt hover:text-gray-700">
            <Button color="red">{t("manage_accommodation.add_accommodation")}</Button>
              </a>
          </div>
          <Card className="w-full ">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, status }, index) => {
                  const isLast = index === TABLE_ROWS.length;
                  const classes = isLast
                    ? "p-2"
                    : "p-2 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={
                              status === "Open"
                                ? "green"
                                : status === "Pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content={t("manage_accommodation.edit_accommodation")}>
                          <IconButton variant="text">
                            <svg
                              className="w-6 h-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
                              />
                            </svg>
                          </IconButton>
                        </Tooltip>
                        <Tooltip content={t("manage_accommodation.delete_accommodation")}>
                          <IconButton onClick={handleOpen} variant="text">
                            <svg
                              className="w-6 h-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                              />
                            </svg>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader>{t("manage_accommodation.delete_accommodation")}</DialogHeader>
        <DialogBody>
          {t("manage_accommodation.you_sure_delete_accommodation")}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>{t("button.cancel")}</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>{t("button.confirm")}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default manageAccommodation;
