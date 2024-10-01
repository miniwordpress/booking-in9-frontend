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

const HeaderBase: React.FC = () => {
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
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderBase