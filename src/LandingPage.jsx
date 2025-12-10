import ProfileQuote from './components/ProfileQuote';
import ProfileImage from './components/ProfileImage';
import SkillCard from './components/SkillCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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

      {/* Main Content - Portfolio Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Side - Quote and Info */}
          <div className="lg:col-span-1">
            <ProfileQuote />
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-1">
            <ProfileImage />
          </div>

          {/* Right Side - Skills */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <SkillCard 
              title="Frontend"
              technologies="(Angular, React)"
              description="Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam."
              bgColor="bg-yellow-50"
              borderColor="border-yellow-200"
            />
            
            <SkillCard 
              title="Backend"
              technologies="(Php, Python)"
              description="Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam."
              bgColor="bg-pink-50"
              borderColor="border-pink-200"
            />
            
            <SkillCard 
              title="Graphics"
              technologies="(Photoshop, Sketch)"
              description="Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam."
              bgColor="bg-blue-50"
              borderColor="border-blue-200"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
