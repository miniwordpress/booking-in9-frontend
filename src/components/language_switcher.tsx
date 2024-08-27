import React from 'react';
import { useRouter } from 'next/router';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  const changeLanguage = (locale: string) => {
    router.push({
      pathname: router.pathname,
    }, undefined, { locale });
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <div>
        {otherLocales.map((locale) => (
          <button
            key={locale}
            onClick={() => changeLanguage(locale)}
            style={{
              fontWeight: locale === activeLocale ? 'bold' : 'normal',
              margin: '0 5px',
              padding: '5px 10px',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: locale === activeLocale ? '#eee' : 'transparent',
            }}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocaleSwitcher;