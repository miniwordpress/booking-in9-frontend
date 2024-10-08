import { Typography } from "@material-tailwind/react";
import React from "react"
import Image from "next/image";
import { useRouter } from "next/router"
import LocaleSwitcher from "../components/language_switcher"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react"

const FooterBase: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [locale]);

  const LINKS = [
    {
      items: ["ข้อกำหนด", "นโยบายความเป็นส่วนตัว", "ศูนย์ช่วยเหลือ"],
    },
    {
      items: ["เกี่ยวกับเรา", "ติดต่อเรา"],
    },
  ];
   
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-footer-background">
      <div className="mx-auto w-full px-8">
        <div className="flex flex-col md:flex-row  justify-between gap-6 ">
          <div className="grid grid-cols-2 justify-between gap-6 mt-5">
            {LINKS.map(({ items }) => (
              <ul>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="py-1.5 font-normal transition-colors hover:text-orange-500 mt-1"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="grid grid-cols-1 w-full text-end py-4 md:flex-row sm:justify-center">
            <Typography color="white"variant="h5" className="mb-6 mt-4 hidden sm:block font-prompt">
              {t('payment')}
            </Typography>
            <div className="flex gap-5 text-white sm:justify-end md:justify-items-center mr-1">
            <Image
              src="/assets/images/QRcode.png"
              alt="QRcode"
              // style={{width: '50%', height: 'auto'}}
              width={40}
              height={40}
              className="rounded-lg object-cover"
              priority
              />
              <Image
              src="/assets/images/visa.png"
              alt="visa"
              width={40}
              height={40}
              className="rounded-lg object-cover"
              priority
              />
              <Image
              src="/assets/images/mastercard.png"
              alt="mastercard"
              width={40}
              height={40}
              className="rounded-lg object-cover"
              priority
              />
              </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-center justify-center border-t-2 border-yellow-800 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center text-white md:mb-0"
          >
            Copyright &copy; {currentYear} Rakoonda (Thailand) Co.,Ltd. - สงวนสิทธิ์ทุกประการ
          </Typography>
          <div className="flex gap-4 text-white sm:justify-center">
            <Typography as="a" href="#" className="opacity-100 transition-opacity hover:opacity-100">
            <Image
              src="/assets/images/facebook.png"
              alt="facebook Logo"
              className=""
              width={30}
              height={30}
              priority
            />
            </Typography>
            <Typography as="a" href="#" className="opacity-100 transition-opacity hover:opacity-100">
            <Image
              src="/assets/images/youtube.png"
              alt="facebook Logo"
              className=""
              width={30}
              height={30}
              priority
            />
            </Typography>
            <Typography as="a" href="#" className="opacity-100 transition-opacity hover:opacity-100">
            <Image
              src="/assets/images/line.png"
              alt="facebook Logo"
              className=""
              width={30}
              height={30}
              priority
            />
            </Typography>
            <Typography as="a" href="https://www.rakoonda.co" target="_blank">
            <Image
              src="/assets/images/rakoonda.png"
              alt="facebook Logo"
              className=""
              width={40}
              height={40}
              priority
            />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBase

