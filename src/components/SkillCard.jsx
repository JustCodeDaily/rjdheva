export default function SkillCard({ title, technologies, description, bgColor, borderColor }) {
  return (
    <div className={`${bgColor} p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 ${borderColor}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        {/* 100% Progress Circle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90">
            {/* Background circle */}
            <circle 
              cx="32" 
              cy="32" 
              r="28" 
              stroke="currentColor" 
              strokeWidth="6" 
              fill="none" 
              className="text-gray-200 opacity-30"
            />
            {/* Progress circle - Always 100% */}
            <circle 
              cx="32" 
              cy="32" 
              r="28" 
              stroke="#000" 
              strokeWidth="6" 
              fill="none"
              strokeDasharray="176"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold">100%</div>
        </div>
        
        {/* Skill Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{technologies}</p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
