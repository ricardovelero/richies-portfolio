'use client';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';
import { useTranslations } from 'next-intl';
import React from 'react';
import Project from './project';
import SectionHeading from './section-heading';

export default function Projects() {
  const t = useTranslations('ProjectsSection');
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='relative scroll-mt-28 mb-28'>
      <SectionHeading>{t('title')}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
