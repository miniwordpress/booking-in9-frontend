import React from "react"
import { useRouter } from "next/router"
import LocaleSwitcher from "../components/language_switcher"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react"
import {   Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton, } from "@material-tailwind/react"

const HeaderBase: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [locale]);
  
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  //  const navList = (
  //   <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

  //   </ul>
  // );
 
  return (
    <div className="max-h-[768px] w-[calc(100%)] bg-primary-background">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  bg-primary-background" style={{ border: "none" }}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            color="white"
            as="a"
            href="#"
            className="ml-5 cursor-pointer py-1.5 font-medium"
          >
            Logo
          </Typography>
          <div className="flex items-center gap-4">
            {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
            <div className="flex items-center gap-x-1">
            <Button
                color="white"
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <LocaleSwitcher/>
              </Button>
              <Button
                color="white"
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>ช่วยเหลือ</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {/* {navList} */}
          <div className="flex items-center gap-x-1">
            <LocaleSwitcher/>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>ช่วยเหลือ</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
  export default HeaderBase