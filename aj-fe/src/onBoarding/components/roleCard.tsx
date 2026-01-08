interface RoleCardProps {
    icon: string;
    title: string;
    description: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export default function RoleCard({ icon, title, description, isSelected = false, onClick }: RoleCardProps) {
    return (
        <div
            onClick={onClick}
            className={`
                relative group cursor-pointer
                bg-white/5 backdrop-blur-xl 
                border-2 rounded-3xl p-8
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-2xl
                ${isSelected
                    ? 'border-[#9148EF] shadow-[0_0_30px_rgba(145,72,239,0.5)]'
                    : 'border-white/10 hover:border-white/20'
                }
            `}
        >
            {/* Gradient Overlay on Hover */}
            <div className={`
                absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isSelected ? 'bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/10' : 'bg-gradient-to-br from-white/5 via-transparent to-white/5'}
            `}></div>

            {/* Content */}
            <div className="relative z-10 flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <span className="text-5xl">{icon}</span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                    <h3 className="font-bold text-2xl text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Check Icon (only shown when selected) */}
                {isSelected && (
                    <div className="flex-shrink-0 animate-scale-in">
                        <div className="w-8 h-8 bg-[#9148EF] rounded-full flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Decorative Glow Effect */}
            {isSelected && (
                <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-500/20 blur-xl animate-pulse-slow"></div>
            )}
        </div>
    );
}
