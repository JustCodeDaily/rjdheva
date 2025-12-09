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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">rjdheva</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            A modern landing page built with React and Tailwind CSS. Discover the future of web design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
