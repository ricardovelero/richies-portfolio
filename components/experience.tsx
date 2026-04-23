'use client';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';
import { useTranslations } from 'next-intl';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

export default function Experience() {
  const t = useTranslations('ExperienceSection');
  const { ref } = useSectionInView('Experience');

  return (
    <section
      id='experience'
      ref={ref}
      className='relative scroll-mt-28 mb-28 sm:mb-40'
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <VerticalTimeline lineColor='var(--timeline-line)'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: 'var(--timeline-bg)',
                boxShadow: 'none',
                border: '1px solid var(--timeline-border)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid var(--timeline-arrow)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'var(--timeline-icon-bg)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize bg-gra'>
                {t(`title-${index}`)}
              </h3>
              <p className='font-normal mt-0!'>{item.location}</p>
              <p
                className='mt-1! font-normal!'
                style={{ color: 'var(--timeline-description)' }}
              >
                {t(`description-${index}`)}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
