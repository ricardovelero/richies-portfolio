'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='z-10 relative'>
      <motion.div
        className={cn(
          'fixed top-0 left-1/2 h-18 w-full rounded-none border shadow-lg shadow-black/3 backdrop-blur-sm sm:top-6 sm:h-13 sm:rounded-full bg-[var(--header-bg)] border-[var(--header-border)]',
          locale === 'es' ? 'sm:w-2xl' : 'sm:w-xl',
        )}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-88 flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[var(--header-text)] sm:w-160 sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className='relative h-3/4 flex items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                href={link.hash}
                className={cn(
                  'flex w-full items-center justify-center px-3 py-3 transition text-[var(--header-text)] hover:text-[var(--header-text-hover)]',
                  activeSection === link.name &&
                    'text-[var(--header-text-active)]',
                )}
              >
                {t(link.name)}
                {link.name === activeSection && (
                  <motion.span
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className='bg-[var(--header-pill-bg)] rounded-full absolute inset-0 -z-10'
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
