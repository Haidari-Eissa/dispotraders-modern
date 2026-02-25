'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setIsOpen(false);
    const cleanPath = pathname?.replace(/^\/(en|ur)/, '') || '/';
    
    if (newLang === 'en') {
        router.push(cleanPath); 
    } else {
        router.push(`/ur${cleanPath === '/' ? '' : cleanPath}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div>
      {/* Dropdown for mobile */}
      <div className="relative md:hidden" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center bg-gray-800/50 p-2 rounded-lg border border-gray-700">
          <Image src="/globe.svg" alt="Language" width={20} height={20} />
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-32 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg">
            <button
              onClick={() => handleSwitch('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${!pathname?.includes('/ur') ? 'bg-blue-600 text-white' : 'hover:text-blue-400'}`}
            >
              EN
            </button>
            <button
              onClick={() => handleSwitch('ur')}
              className={`block w-full text-left px-4 py-2 text-sm ${pathname?.includes('/ur') ? 'bg-blue-600 text-white' : 'hover:text-blue-400'}`}
            >
              اردو
            </button>
          </div>
        )}
      </div>

      {/* Buttons for larger screens */}
      <div className="hidden md:flex items-center gap-2 text-sm font-bold bg-gray-800/50 p-2 rounded-lg border border-gray-700">
        <Image src="/globe.svg" alt="Language" width={18} height={18} />
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
    </div>
  );
}
