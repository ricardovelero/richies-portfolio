'use client';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './section-heading';

export default function About() {
  const t = useTranslations('AboutSection');
  const { ref } = useSectionInView('About', 0.99);

  return (
    <motion.section
      ref={ref}
      id='about'
      className='relative mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>{t('title')}</SectionHeading>
      {t.rich('description', {
        p: (chunks) => <p className='mb-3'>{chunks}</p>,
        span: (chunks) => <span className='font-medium'>{chunks}</span>,
        i: (chunks) => <i className='italic'>{chunks}</i>,
        u: (chunks) => <u className='underline'>{chunks}</u>,
      })}
    </motion.section>
  );
}
