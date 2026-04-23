'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './github-icon';
import LinkedinIcon from './linkedin-icon';

export default function Intro() {
  const t = useTranslations('IntroSection');
  const locale = useLocale();
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='relative mb-28 max-w-200 text-center sm:mb-0 scroll-mt-400'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/foto-perfil.jpg'
              alt='Ricardo portrait'
              width={'192'}
              height={'192'}
              quality={'75'}
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl '
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium leading-normal! sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>{t('salutation')},</span> {t('a')}{' '}
        <span className='font-bold'>{t('full-stack-dev')}</span> {t('with')}{' '}
        <span className='font-bold'>3 {t('years')}</span> {t('of experience')}.{' '}
        {t('I enjoy building')}{' '}
        <span className='italic'>{t('sites & apps')}</span>. {t('My focus is')}{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {t('Contact me here')}{' '}
          <ArrowRight className='opacity-80 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href={
            locale === 'es' ?
              '/curriculo-ricardo-rodriguez.pdf'
            : '/resume-ricardo-rodriguez.pdf'
          }
          download
        >
          {t('Download')} CV{' '}
          <Download className='opacity-80 group-hover:translate-y-1 transition' />
        </a>

        <a
          aria-label='LinkedIn'
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/ricardovelero/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <LinkedinIcon className='h-5 w-5' />
        </a>

        <a
          aria-label='GitHub'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'
          href='https://github.com/ricardovelero'
          rel='noopener noreferrer'
          target='_blank'
        >
          <GithubIcon className='h-5 w-5' />
        </a>
      </motion.div>
    </section>
  );
}
