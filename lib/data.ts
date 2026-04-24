import clipboosthostingImg from '@/public/clipboost-hosting.webp';
import pawlaroidaiImg from '@/public/pawlaroid-ai.webp';
import sangreaiImg from '@/public/sangre-ai-2.webp';
import { Briefcase, FolderKanban, GraduationCap } from 'lucide-react';
import React from 'react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full Stack Developer',
    location: 'Remote · Facturama Ltd, UK',
    icon: React.createElement(Briefcase),
    date: '2024 - 2025',
  },
  {
    title: 'Full Stack Developer',
    location: 'Spain · Soluciones iO',
    icon: React.createElement(Briefcase),
    date: '2020 - 2023',
  },
  {
    title: 'Software & Systems Development',
    location: 'Independent · Estepona, Spain',
    icon: React.createElement(FolderKanban),
    date: '2017 - 2019',
  },
  {
    title: 'Commercial Director',
    location: 'Caracas, Venezuela · Suministros Yupi',
    icon: React.createElement(FolderKanban),
    date: '2006 - 2017',
  },
  {
    title: 'Chief Executive Officer',
    location: 'Caracas, Venezuela · Profelim, C.A.',
    icon: React.createElement(FolderKanban),
    date: '1998 - 2006',
  },
  {
    title: 'B.S. Industrial Engineering',
    location: 'University of Florida · Gainesville, FL, USA',
    icon: React.createElement(GraduationCap),
    date: '1997',
  },
] as const;

export const projectsData = [
  {
    id: 'pawlaroid',
    tags: [
      'React',
      'Supabase',
      'Tailwind CSS',
      'Shadcn',
      'Tanstack React Query',
      'Vite',
      'Replicate API',
    ],
    imageUrl: pawlaroidaiImg,
    link: 'https://pawlaroid.ai',
  },
  {
    id: 'clipboost',
    tags: [
      'React',
      'Supabase',
      'Tailwind CSS',
      'Shadcn',
      'Tanstack React Query',
      'Vite',
      'Cloudinary',
    ],
    imageUrl: clipboosthostingImg,
    link: 'https://app.clipboost.com',
  },
  {
    id: 'sangreai',
    tags: [
      'React',
      'Tailwind',
      'Shadcn',
      'NodeJS',
      'Cloudinary',
      'Zustand',
      'Mongoose',
      'MongoDB',
      'OpenaAI API',
      'Google Gemini AI',
    ],
    imageUrl: sangreaiImg,
    link: 'https://sangre-ai-react.vercel.app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Next-Intl',
  'Framer Motion',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'API',
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
  'Flask',
  'Ruby on Rails',
  'OpenAI API',
] as const;
