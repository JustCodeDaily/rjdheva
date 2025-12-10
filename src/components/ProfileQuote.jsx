export default function ProfileQuote() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-tight">
        "Creativity bleeds from the pen of inspiration."
      </h2>
      
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
      
      <div className="space-y-2 pt-4">
        <h3 className="text-xl font-bold text-gray-900">Sr. Developer</h3>
        <p className="text-gray-700">Jenny B. Brown</p>
      </div>
      
      {/* Signature SVG */}
      <div className="pt-4">
        <svg className="w-32 h-16" viewBox="0 0 120 60" fill="none">
          <path d="M10 40 Q 20 10, 40 30 T 70 35 Q 90 40, 100 30" stroke="#374151" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}
