interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full mb-8">
            {/* Step Text and Percentage */}
            <div className="flex justify-between items-center mb-3">
                <span className="text-white/70 text-sm font-medium">
                    Step {currentStep} of {totalSteps}
                </span>
                <span className="text-white/70 text-sm font-medium">
                    {Math.round(percentage)}%
                </span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Progress Fill with Gradient */}
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                    style={{ width: `${percentage}%` }}
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
            </div>
        </div>
    );
}
