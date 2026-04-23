'use client';

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ id, tags, imageUrl, link }: ProjectProps) {
  const t = useTranslations('ProjectData');
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='relative group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='relative bg-gray-100 max-w-2xl rounded-lg borderBlack/5 overflow-hidden sm:pr-8 hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-1 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-72'>
          <h3 className='text-2xl font-semibold'>{t(`${id}.title`)}</h3>
          <p className='mt-2 mb-3 leading-relaxed text-gray-700 dark:text-white/70'>
            {t(`${id}.description`)}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/70 px-3 py-1 text-[0.7rem] text-white uppercase tracking-wider rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={link}
            target='blank'
            className='underline text-sm font-semibold text-indigo-500 hover:text-indigo-400  dark:text-slate-400 dark:hover:text-slate-300 mt-2'
          >
            {link}
          </a>
        </div>
        <a href={link} target='blank'>
          <Image
            className='absolute hidden sm:block top-8 -right-40 w-113 rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
            src={imageUrl}
            alt='Project I worked on'
            quality={75}
          />
        </a>
      </section>
    </motion.div>
  );
}
