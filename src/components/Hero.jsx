export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-pink-300 rounded-2xl rotate-12 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16">
                <svg viewBox="0 0 100 100" className="text-purple-300 opacity-50">
                  <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute top-8 -right-8 w-24 h-24 opacity-30">
                <svg viewBox="0 0 100 100" className="text-pink-200">
                  <path d="M50,0 Q70,30 100,50 Q70,70 50,100 Q30,70 0,50 Q30,30 50,0" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="w-full h-full rounded-[60px] overflow-hidden border-4 border-slate-700 bg-slate-200 flex items-center justify-center">
                  {/* Placeholder for profile image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <svg className="w-48 h-48 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  {/* Uncomment and use when you have an actual image */}
                  {/* <img 
                    src="/path-to-your-image.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center md:text-left order-2 md:order-2">
            <p className="text-pink-500 text-lg sm:text-xl font-semibold mb-2">
              Hi, I am
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
              Your Name
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <p className="text-xl sm:text-2xl text-slate-600">
                I am a
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-pink-500">
                Web Developer
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 border-2 border-slate-900 rounded-lg font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition">
                Download CV
              </button>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition flex items-center gap-2">
                Hire Me
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
