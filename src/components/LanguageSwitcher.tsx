'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

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
    // Logic: 
    // If selecting 'en', go to root '/'
    // If selecting 'ur', go to '/ur'
    const cleanPath = pathname?.replace(/^\/(en|ur)/, '') || '/';
    
    if (newLang === 'en') {
        router.push(cleanPath); 
    } else {
        router.push(`/ur${cleanPath === '/' ? '' : cleanPath}`);
    }
  };

  return (
    <div className="flex gap-2 text-sm font-bold bg-gray-800/50 p-2 rounded-lg border border-gray-700">
      <button 
        onClick={() => handleSwitch('en')} 
        className={`px-2 py-1 rounded ${!pathname?.includes('/ur') ? 'bg-blue-600 text-white' : 'hover:text-blue-400'}`}
      >
        EN
      </button>
      <button 
        onClick={() => handleSwitch('ur')} 
        className={`px-2 py-1 rounded ${pathname?.includes('/ur') ? 'bg-blue-600 text-white' : 'hover:text-blue-400'}`}
      >
        اردو
      </button>
    </div>
  );
}