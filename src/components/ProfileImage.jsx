export default function ProfileImage() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        {/* Main circular image container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-gray-300 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
          {/* Placeholder for profile image */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        
        {/* Social Icons - Right side */}
        <div className="absolute -right-2 sm:right-0 top-1/4 space-y-3 sm:space-y-4">
          {/* Gmail */}
          <a href="mailto:your.email@gmail.com" className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 5.5a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        
        {/* About Me Button - Bottom */}
        <div className="absolute bottom-0 right-4 sm:right-8">
          <button className="bg-gray-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center gap-2 text-sm sm:text-base">
            About Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
