'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Automatically check RTL whenever the URL changes
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
    const path = pathname?.replace(/^\/(en|ur)/, '') || '/';
    // If switching to German (default), go to root /
    // Otherwise go to /en or /ur
    if (newLang === 'de') router.push(path);
    else router.push(`/${newLang}${path}`);
  };

  return (
    <div className="flex gap-4 text-sm font-bold bg-gray-800 p-3 rounded-full">
      <button onClick={() => handleSwitch('de')} className="hover:text-blue-400">DE</button>
      <button onClick={() => handleSwitch('en')} className="hover:text-blue-400">EN</button>
      <button onClick={() => handleSwitch('ur')} className="hover:text-blue-400">اردو</button>
    </div>
  );
}