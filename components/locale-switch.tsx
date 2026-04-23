'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import 'flag-icons/css/flag-icons.min.css';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function handleToggle() {
    const nextLocale: 'en' | 'es' = locale === 'en' ? 'es' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className='fixed top-6 right-3 sm:top-7 sm:right-5 z-50'>
      <button
        type='button'
        onClick={handleToggle}
        disabled={isPending}
        title={t('locale', { locale: locale === 'en' ? 'es' : 'en' })}
        className='w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/80 backdrop-blur-sm shadow-2xl dark:bg-gray-950/90 dark:border-black/40 hover:scale-110 active:scale-95 transition-all'
      >
        <span
          className={`fi fi-${locale === 'en' ? 'es' : 'us'} h-5 w-5`}
        ></span>
        <span className='sr-only'>
          {t('locale', { locale: locale === 'en' ? 'es' : 'en' })}
        </span>
      </button>
    </div>
  );
}
