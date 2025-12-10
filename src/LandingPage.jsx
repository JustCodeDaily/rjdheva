export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            rjdheva
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-gray-600 transition">
              Features
            </a>
            <a href="#about" className="hover:text-gray-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Image Placeholder */}
          <div className="flex justify-center items-center">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-gray-500 text-sm">Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Right Side - 3 Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Section One</h2>
              <p className="text-gray-700 leading-relaxed">
                This is the first section with some content. You can customize this text to include any information you want to display.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Section Two</h2>
              <p className="text-gray-700 leading-relaxed">
                This is the second section with different styling. Each section can have its own unique design and content.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Section Three</h2>
              <p className="text-gray-700 leading-relaxed">
                This is the third section completing the layout. The grid system ensures everything looks great on all devices.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
