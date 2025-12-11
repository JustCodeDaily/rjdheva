export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Biox</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-pink-500 transition">Home</a>
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
            <a href="#services" className="hover:text-pink-500 transition">Services</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[800px] mt-[100px] pb-[50px] pt-[100px] max-[991px]:h-auto max-[991px]:mt-[95px] max-[991px]:pb-[40px] max-[991px]:pt-[80px] max-[767px]:pb-[35px] max-[767px]:pt-[70px]">
        {/* Background Text - First Name */}
        <div className="absolute top-0 leading-none font-montserrat text-[200px] font-black text-white opacity-[0.04] max-[991px]:text-[130px] max-[991px]:top-[30px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
          Jenny
        </div>
        {/* Background Text - Last Name */}
        <div className="absolute bottom-0 right-0 font-montserrat text-[200px] font-black text-white opacity-[0.04] max-[991px]:bottom-[250px] max-[991px]:text-[130px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
          Brown
        </div>
        
        <div className="flex h-full flex-wrap justify-between relative items-center mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap w-full">
            {/* Hero Image */}
            <div className="md:w-1/2 w-full px-3">
              <div className="relative">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/400x500/8B5CF6/FFFFFF?text=Hero+Image" 
                    alt="Portfolio Hero" 
                    className="w-[calc(100%-300px)] mt-auto mx-auto mb-[50px] block max-[1399px]:w-[calc(100%-260px)] max-[1199px]:w-[calc(100%-215px)] max-[991px]:w-[calc(100%-400px)] max-[767px]:w-[calc(100%-250px)] max-[575px]:w-[210px]"
                  />
                </div>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="md:w-1/2 w-full px-3">
              <div className="h-full flex flex-col justify-center relative max-[991px]:mt-[15px] max-[991px]:pb-[30px] max-[991px]:items-center max-[575px]:text-center">
                <h4 className="mb-2 font-montserrat tracking-[0.03rem] leading-tight text-[35px] font-bold text-pink-500 max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[767px]:text-[24px]">
                  Hi, I am
                </h4>
                <h1 className="mb-4 text-[78px] text-gray-900 font-bold relative tracking-[0.03rem] leading-tight max-[1399px]:text-[70px] max-[1199px]:text-[52px] max-[767px]:text-[38px]">
                  Jenny Brown
                </h1>
                <p className="font-montserrat text-[27px] font-semibold text-gray-900 leading-[26px] tracking-[0.03rem] max-[1399px]:text-[24px] max-[1199px]:text-[20px] max-[767px]:text-[18px]">
                  I am a <span className="mx-1 text-pink-500">App Developer</span>
                </p>
                <div className="flex flex-wrap gap-4 pt-[50px] relative max-[991px]:pt-[20px] max-[575px]:justify-center">
                  <button type="button" className="px-4 py-3 font-montserrat text-sm font-semibold leading-tight capitalize bg-white text-gray-900 border border-gray-900 rounded-2xl hover:bg-pink-500 hover:border-pink-500 hover:text-white transition">
                    Download CV
                  </button>
                  <button type="button" className="px-4 py-3 font-montserrat text-sm font-semibold leading-tight capitalize bg-white text-gray-900 border border-gray-900 rounded-2xl hover:bg-pink-500 hover:border-pink-500 hover:text-white transition">
                    Hire Me →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-pink-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote */}
            <div>
              <h3 className="text-3xl font-bold text-gray-200 leading-tight mb-6">
                "Creativity bleeds from the pen of inspiration."
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Sr. Developer</h4>
                <p className="text-gray-700">Jenny B. Brown</p>
              </div>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Profile" 
                  alt="Profile" 
                  className="w-80 h-80 rounded-full border-4 border-gray-900 shadow-xl"
                />
                <div className="absolute bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold">
                  About Me →
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-200">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold">90%</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Frontend</h4>
                    <p className="text-sm text-gray-600">(Angular, React)</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-3xl border-2 border-pink-200">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold">80%</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Backend</h4>
                    <p className="text-sm text-gray-600">(PHP, Python)</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold">85%</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Graphics</h4>
                    <p className="text-sm text-gray-600">(Photoshop, Sketch)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-pink-500">Services</span>
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-yellow-100 rounded-3xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-900">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Graphics Design</h3>
              <p className="text-sm text-gray-700">Develop the Visual Identity of Your Business.</p>
            </div>
            <div className="bg-pink-100 rounded-3xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-900">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web Design</h3>
              <p className="text-sm text-gray-700">Connect With Your Users, Not Just Your Business.</p>
            </div>
            <div className="bg-blue-100 rounded-3xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-900">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">App Development</h3>
              <p className="text-sm text-gray-700">We Develop the Visual Identity of Your Business.</p>
            </div>
            <div className="bg-green-100 rounded-3xl p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-900">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Marketing</h3>
              <p className="text-sm text-gray-700">Taking your site at the top of Google's ranking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-pink-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-900 hover:shadow-2xl transition">
              <img 
                src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Project+1" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Minimart - eCommerce</h3>
                <p className="text-sm text-gray-600 mb-2">Graphics | Web | App</p>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-900 hover:shadow-2xl transition">
              <img 
                src="https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Project+2" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carrot - Admin Dashboard</h3>
                <p className="text-sm text-gray-600 mb-2">Graphics | App | Web</p>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-900 hover:shadow-2xl transition">
              <img 
                src="https://via.placeholder.com/600x400/10B981/FFFFFF?text=Project+3" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Luxurious - Dashboard</h3>
                <p className="text-sm text-gray-600 mb-2">App | Templates | Graphics</p>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Hire Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Good Ideas</h2>
          <h3 className="text-2xl font-semibold mb-8">Why not we bond each other?</h3>
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:scale-105 transition">
              Hire Me Now
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition">📘</a>
            <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition">📸</a>
            <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition">🐦</a>
            <a href="#" className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition">💼</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            © 2025 <span className="font-semibold">Biox</span>, All Rights Reserved.
          </p>
          <p className="text-sm text-gray-600">
            <a 
              href="https://www.flaticon.com/free-icons/sunflower" 
              title="sunflower icons"
              className="hover:text-gray-900 transition underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sunflower icons created by Victoruler - Flaticon
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
