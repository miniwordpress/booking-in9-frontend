import React from "react"
import { useRouter } from "next/router"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react"
import { Breadcrumbs, } from "@material-tailwind/react"

const BreadcrumbsSigin: React.FC = () => {
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
 
  return (
      <Breadcrumbs className="mt-12 ml-10">
        <a href="#" className="opacity-90 ml-2">
          {t('home')}
        </a>
        <a href="#" className="text-white">
          {t('signIn')}
        </a>
        </Breadcrumbs>
  );
}
  export default BreadcrumbsSigin