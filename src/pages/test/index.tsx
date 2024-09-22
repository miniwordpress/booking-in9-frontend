import SidebarMenu from "@/components/SidebarMenu";
import HeaderBaseAdmin from "../../components/header_admin";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["ลำดับ", "ชื่อที่พัก", "สถานะ", "จัดการ"];
 
const TABLE_ROWS = [
  {
    name: "1",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "2",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "3",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "4",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "5",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "6",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "7",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "8",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "9",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "10",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "11",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "12",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "13",
    job: "Manager",
    date: "04/10/21",
  },
];

export function Card5() {
  return (
    <div className="flex flex-row h-full w-full">
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
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
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
                    {job}
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
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
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

export default Card5;