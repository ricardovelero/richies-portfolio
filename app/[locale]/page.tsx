import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return <main className='flex flex-col items-center px-4'>{t('title')}</main>;
}
