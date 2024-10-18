
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useTranslation } from "react-i18next"
import SidebarMenu from "@/components/SidebarMenu";
import HeaderBaseAdmin from "../../components/header_admin";

import {
  Card,
  Typography,
} from "@material-tailwind/react";

export default function bookingDetails() {
  const router = useRouter()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  const TABLE_HEAD = ["ลำดับ", "วันที่จอง", "ระยะเวลาที่จอง", "ชื่อ", "นามสกุล", "อีเมล", "เบอร์โทร"];
 
const TABLE_ROWS = [
  {
    name: "1",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "2",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "3",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "4",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "5",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "6",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "7",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "8",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "9",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "10",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "11",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
  {
    name: "12",
    date: "14 ส.ค 67",
    duration: "15 ส.ค 67 - 15 ก.ย 67",
    firstName : "นายเอ",
    lastName : "สมมุติ",
    email : "usertest@gmail.com",
    tel : "0123456789"
  },
];
  return (
    
    <div className="font-prompt font-black flex flex-row h-full w-full">
      <div className="basis-1/5 h-full">
        <SidebarMenu/>
      </div>
      <div className="basis-1/1 w-full">
        <HeaderBaseAdmin/>
        <div className="bg-white p-12 ">
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
          {TABLE_ROWS.map(({ name, date, duration, firstName, lastName, email, tel }, index) => {
            const isLast = index === TABLE_ROWS.length ;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
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
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {duration}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {firstName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {lastName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {tel}
                  </Typography>
                </td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
        </div>
      </div>
      </div>
      
  );
}
