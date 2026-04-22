'use server';

import { ServerClient } from 'postmark';

import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/contact-schema';

type SendEmailResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: string;
    };

const defaultContactEmail = 'ricardo@solucionesio.es';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export async function sendEmail(
  values: ContactFormValues,
): Promise<SendEmailResult> {
  const parsedValues = contactFormSchema.safeParse(values);

  if (!parsedValues.success) {
    return {
      ok: false,
      error: 'Invalid form data.',
    };
  }

  const serverToken = process.env.POSTMARK_SERVER_TOKEN;
  const fromEmail = process.env.POSTMARK_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? defaultContactEmail;

  if (!serverToken || !fromEmail) {
    return {
      ok: false,
      error: 'Email service is not configured.',
    };
  }

  const { senderEmail, message } = parsedValues.data;
  const client = new ServerClient(serverToken);
  const escapedEmail = escapeHtml(senderEmail);
  const escapedMessage = escapeHtml(message).replaceAll('\n', '<br />');

  try {
    await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      ReplyTo: senderEmail,
      Subject: 'New portfolio contact form message',
      TextBody: `Sender: ${senderEmail}\n\nMessage:\n${message}`,
      HtmlBody: `
        <p><strong>Sender:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
      MessageStream: process.env.POSTMARK_MESSAGE_STREAM ?? 'outbound',
    });

    return { ok: true };
  } catch (error) {
    console.error('Failed to send contact email:', error);

    return {
      ok: false,
      error: 'Unable to send email right now.',
    };
  }
}
