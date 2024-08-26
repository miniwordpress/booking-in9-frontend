import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/language_switcher";
import { useTranslation } from 'react-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from "react";

//TODO: client side session storage
export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
      props: {
        ...(await serverSideTranslations(context.locale || 'th', ['common'])),
      },
    };
  };

  export default function HomePage() {
    const router = useRouter();
    const { locale, locales } = router;
    const { t } = useTranslation('common');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(false);
    }, [locale]);
  
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{t('hello')}</h1>
            <p>Current locale: {locale}</p>
            <p>Configured locales: {JSON.stringify(locales)}</p>
            <LocaleSwitcher />
          </>
        )}
      </div>
    );
  }