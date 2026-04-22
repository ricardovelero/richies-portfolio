'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

function ThemeSwitchInner() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  if (!currentTheme) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      size='icon'
      variant='ghost'
      className='fixed bottom-5 right-5 rounded-full shadow-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-950'
      onClick={toggleTheme}
      aria-label='Toggle theme'
    >
      {currentTheme === 'light' ?
        <SunIcon className='h-5 w-5' />
      : <MoonIcon className='h-5 w-5' />}
    </Button>
  );
}

export default dynamic(() => Promise.resolve(ThemeSwitchInner), {
  ssr: false,
});
