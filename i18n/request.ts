import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from './routing';

type AppLocale = (typeof routing.locales)[number];

function isAppLocale(locale: string | undefined): locale is AppLocale {
  return locale === 'en' || locale === 'es';
}

export default getRequestConfig(async ({ requestLocale }) => {
  const cookieLocale = (await cookies()).get('locale')?.value;
  const routeLocale = await requestLocale;

  const locale =
    isAppLocale(routeLocale) ? routeLocale
    : isAppLocale(cookieLocale) ? cookieLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
