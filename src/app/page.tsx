import Header from '@/components/Header';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* The Header now contains the Language Switcher automatically */}
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-8 gap-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Dispotraders
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Premium disposable tableware for Quetta. Quality, hygiene, and reliability for every event.
        </p>
        
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
            Order Now
          </button>
          <button className="px-8 py-3 border border-gray-700 rounded-full font-semibold hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}