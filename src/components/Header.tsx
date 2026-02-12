import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 bg-gray-950/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Dispotraders
        </Link>

        {/* Navigation & Switcher */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>
          
          {/* This is where we plug in your new component */}
          <div className="pl-6 border-l border-gray-800">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}