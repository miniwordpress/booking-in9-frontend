import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import LocaleSwitcher from "../components/language_switcher"
import { useEffect, useState } from "react"
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react"

const HeaderBaseAdmin: React.FC = () => {
  const router = useRouter()
  const { locale } = router
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [locale])

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    )
  }, [])

  return (
    <div className="max-h-[768px] w-[calc(100%)] bg-white">
      <Navbar className="sticky top-0 z-10 h-full max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  bg-primary-background" style={{ border: "none" }}>
        <div className="flex justify-end text-blue-gray-900">
          <div className="flex gap-4">
            {loading ? (<></>) : (<LocaleSwitcher />)}
            <Typography>
              <a href="">
                <Image
                  src="/assets/images/help.png"
                  alt="facebook Logo"
                  color="white"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </Typography>
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
      </Navbar>
    </div>
  )
}

export default HeaderBaseAdmin