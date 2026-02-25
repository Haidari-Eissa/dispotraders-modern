'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const isUrdu = pathname?.includes('/ur');

  useEffect(() => {
    if (pathname?.includes('/ur')) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ur';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [pathname]);

  const handleSwitch = () => {
    const cleanPath = pathname?.replace(/^\/(en|ur)/, '') || '/';
    
    if (isUrdu) {
      router.push(cleanPath);
      return;
    }

    router.push(`/ur${cleanPath === '/' ? '' : cleanPath}`);
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label={isUrdu ? 'Switch to English' : 'Switch to Urdu'}
      title={isUrdu ? 'Switch to English' : 'Switch to Urdu'}
      className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 p-2 transition-colors hover:bg-gray-700/60"
    >
      <Image src="/globe.svg" alt="Language" width={20} height={20} />
    </button>
  );
}
