'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/hooks/use-section-in-view';
import {
  CONTACT_FORM_MAX_LENGTH,
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SectionHeading from './section-heading';
import SubmitButton from './submit-btn';
import { Field, FieldError, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function Contact() {
  const t = useTranslations('ContactSection');
  const { ref } = useSectionInView('Contact', 0.75);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      senderEmail: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const result = await sendEmail(values);

    if (!result.ok) {
      toast.error(result.error);
      return;
    }

    toast.success(t('email-sent'));
    form.reset();
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='contact'
      className='relative mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    >
      <SectionHeading>{t('contact-me')}</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        {t('please-contact-me')}{' '}
        <a href='mailto:ricardo@solucionesio.es' className='underline'>
          ricardo@solucionesio.es
        </a>{' '}
        {t('or-through-this-form')}.
      </p>
      <form
        className='mt-10 flex flex-col gap-5 text-left'
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <FieldGroup>
          <Controller
            name='senderEmail'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                data-disabled={form.formState.isSubmitting}
              >
                <FieldLabel htmlFor='contact-sender-email'>
                  {t('your-email')}
                </FieldLabel>
                <Input
                  {...field}
                  id='contact-sender-email'
                  type='email'
                  placeholder={t('your-email')}
                  autoComplete='email'
                  maxLength={CONTACT_FORM_MAX_LENGTH}
                  disabled={form.formState.isSubmitting}
                  aria-invalid={fieldState.invalid}
                  className='h-14 px-4'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='message'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                data-disabled={form.formState.isSubmitting}
              >
                <FieldLabel htmlFor='contact-message'>
                  {t('your-message')}
                </FieldLabel>
                <Textarea
                  {...field}
                  id='contact-message'
                  placeholder={t('your-message')}
                  maxLength={CONTACT_FORM_MAX_LENGTH}
                  disabled={form.formState.isSubmitting}
                  aria-invalid={fieldState.invalid}
                  className='min-h-52 resize-none p-4'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <SubmitButton pending={form.formState.isSubmitting} />
      </form>
    </motion.section>
  );
}
