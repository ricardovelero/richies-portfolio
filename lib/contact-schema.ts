import { z } from 'zod';

export const CONTACT_FORM_MAX_LENGTH = 500;

export const contactFormSchema = z.object({
  senderEmail: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.')
    .max(CONTACT_FORM_MAX_LENGTH, 'Email must be 500 characters or fewer.'),
  message: z
    .string()
    .trim()
    .min(1, 'Please enter a message.')
    .max(CONTACT_FORM_MAX_LENGTH, 'Message must be 500 characters or fewer.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
