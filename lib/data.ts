import lafuriaaiImg from '@/public/la-furia-ai.webp';
import shorttermrentalsImg from '@/public/short-term-rentals.webp';
import solucionesioImg from '@/public/solucionesio.webp';
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
    title: 'Full-Stack Developer',
    location: 'Malaga, Spain',
    description:
      "Over the past several months, I have been dedicated to expanding my programming skills and have focused my efforts on mastering React, Next.js and other related technologies. During this time, I have diligently honed my abilities by creating numerous small demonstration projects, each serving as a testament to my growing proficiency in React's intricacies. Additionally, I had the privilege of being hired to spearhead the development of a comprehensive invoicing system using Ruby on Rails. This project not only highlighted my technical capabilities, but also demonstrated my ability to deliver practical solutions. These experiences have solidified my commitment to advancing my expertise in web development and delivering impactful software solutions.",
    icon: React.createElement(Briefcase),
    date: '2020 - 2023',
  },
  {
    title: 'Commercial Director',
    location: 'Caracas, Venezuela',
    description:
      "I was responsible for ensuring the proper operation and optimization of processes, primarily focusing on the operations department. My role also involved negotiating and collaborating with international suppliers to secure the best prices, guarantees, and conditions, thereby enhancing our competitiveness. Additionally, I took charge of developing and maintaining the company's website. To boost sales and expand our customer base, I implemented digital marketing strategies, leveraging SEO and Google Ads to reach a broader audience.",
    icon: React.createElement(FolderKanban),
    date: '2006 - 2021',
  },
  {
    title: 'B.S. Industrial Engineering',
    location: 'Gainesville, Florida, USA',
    description:
      'I earned my Bachelor of Science degree in Industrial Engineering from the University of Florida, located in the city of Gainesville, Florida, USA. This educational milestone not only equipped me with a strong foundation in industrial engineering principles but also marked the beginning of my journey towards becoming a skilled and knowledgeable professional.',
    icon: React.createElement(GraduationCap),
    date: '1992 - 1997',
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
    imageUrl: lafuriaaiImg,
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
    imageUrl: shorttermrentalsImg,
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
    imageUrl: solucionesioImg,
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
