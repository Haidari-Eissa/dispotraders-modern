import Header from '@/components/Header';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      {/* 1. The Header (with Language Switcher inside) */}
      <Header />

      <main className="flex flex-col">
        {/* 2. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Premium Tableware for <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quetta's Best Events
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Elevate your catering with our high-quality, hygienic, and eco-friendly disposable solutions. Designed for reliability.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/25">
                View Products
              </button>
              <button className="px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 rounded-full font-semibold hover:border-gray-600 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* 3. FEATURES GRID */}
        <section className="py-24 px-6 bg-gray-900/50 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dispotraders?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-gray-950 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Hygiene First</h3>
                <p className="text-gray-400">Manufactured under strict sanitary conditions to ensure safety for every guest.</p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-gray-950 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition duration-300">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-400">Durable materials that feel premium and won't break during the meal.</p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-gray-950 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition duration-300">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-400">Instant delivery across Quetta for all your urgent catering needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Simple Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>&copy; 2024 Dispotraders Quetta. All rights reserved.</p>
      </footer>
    </div>
  );
}