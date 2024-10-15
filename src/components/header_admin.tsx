import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import LocaleSwitcher from "../components/language_switcher"
import { useEffect, useState } from "react"
import {
  Navbar,
  Typography,
  IconButton,
  Avatar
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
    <div className="max-h-[768px] w-[calc(100%)]">
      <Navbar className="top-0 z-10 h-full max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  bg-primary-background" style={{ border: "none" }}>
        <div className="flex justify-end items-center gap-4 text-blue-gray-900">
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
          </div>
          <div className="flex items-center gap-4 text-white">
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" /> Mr. admin
          </div>
        </div>
      </Navbar>
    </div>
    
  )
}

export default HeaderBaseAdmin