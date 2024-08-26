import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/language_switcher";
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('hello')}</h1>
      <p>Current locale: {locale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      
      <LocaleSwitcher />

      </div>
  );
}