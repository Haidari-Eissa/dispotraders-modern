'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    // 1. Save the choice in a cookie so Next.js remembers it
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    // 2. Remove the old language prefix from the URL
    const currentPathWithoutLang = pathname.replace(/^\/(en|ur)/, '') || '/';

    // 3. Redirect to the new language folder
    if (newLang === 'de') {
      router.push(currentPathWithoutLang); // DE is our root
    } else {
      router.push(`/${newLang}${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`);
    }
  };

  return (
    <div className="flex gap-4 p-2 font-sans text-sm font-bold">
      <button onClick={() => handleLanguageChange('de')} className="hover:text-blue-500">DE</button>
      <button onClick={() => handleLanguageChange('en')} className="hover:text-blue-500">EN</button>
      <button onClick={() => handleLanguageChange('ur')} className="hover:text-blue-500">اردو</button>
    </div>
  );
}