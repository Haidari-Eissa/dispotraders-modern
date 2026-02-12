'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // This simple logic flips the site to RTL when the URL has '/ur'
  useEffect(() => {
    if (pathname?.includes('/ur')) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ur';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [pathname]);

  const handleSwitch = (newLang: string) => {
    const cleanPath = pathname?.replace(/^\/(en|ur)/, '') || '/';
    if (newLang === 'de') router.push(cleanPath);
    else router.push(`/${newLang}${cleanPath}`);
  };

  return (
    <div className="flex gap-4 p-4 text-sm font-bold justify-end">
      <button onClick={() => handleSwitch('de')}>DE</button>
      <button onClick={() => handleSwitch('en')}>EN</button>
      <button onClick={() => handleSwitch('ur')}>اردو</button>
    </div>
  );
}