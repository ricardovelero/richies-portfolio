import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout(props: Props) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  return (
    <html suppressHydrationWarning lang={locale} className='scroll-smooth!'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 min-h-screen flex flex-col`}
      >
        <div className='bg-[#fbe2e3] absolute -top-24 -z-10 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute -top-4 -z-10 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#676394]'></div>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <NextIntlClientProvider locale={locale}>
              <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
