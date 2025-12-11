import NavBar from './components/NavBar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-[800px] mt-[-100px] pb-[50px] pt-[100px] bg-gradient-to-br from-gray-50 to-white">
        {/* Background Text - First Name */}
        <div className="absolute top-0 leading-none font-montserrat text-[200px] font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-50">
          Jenny
        </div>
        {/* Background Text - Last Name */}
        <div className="absolute bottom-0 right-0 font-montserrat text-[200px] font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-50">
          Brown
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm text-gray-600 mb-2">
            © 2025 <span className="font-semibold">BioX</span>, All Rights Reserved.
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
      </section>
    </div>
  );
}

