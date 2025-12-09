import Hero from './components/Hero';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            rjdheva
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-purple-400 transition">
              Features
            </a>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <Hero />
    </div>
  );
}
