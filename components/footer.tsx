import { useTranslations } from 'next-intl';

function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        Copyright &copy; {getCurrentYear()} Ricardo Rodriguez. {t('copyright')}.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>{t('about-website')}:</span>{' '}
        {t('about-description')}.
      </p>
    </footer>
  );
}
