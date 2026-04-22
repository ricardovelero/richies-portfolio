'use client';

import { Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from './ui/button';

type SubmitButtonProps = {
  pending?: boolean;
};

export default function SubmitButton({ pending = false }: SubmitButtonProps) {
  const t = useTranslations();

  return (
    <Button
      type='submit'
      size='lg'
      className='h-12 w-32 self-start rounded-full'
      disabled={pending}
    >
      {pending ?
        <div className='size-5 animate-spin rounded-full border-b-2 border-primary-foreground' />
      : <>
          {t('submit')}
          <Mail data-icon='inline-end' />
        </>
      }
    </Button>
  );
}
