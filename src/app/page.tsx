import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* 1. This puts the buttons at the top of your screen */}
      <div className="w-full max-w-md flex justify-end">
        <LanguageSwitcher />
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Dispotraders</h1>
        <p className="text-xl">Quality Disposable Tableware for Quetta</p>
      </div>
      
      <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
        Contact Us
      </button>
    </main>
  );
} 