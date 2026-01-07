import NavbarOnboardingPages from "./components/navbarOnboarding";
import bgGlow2 from "../assets/images/bg-glow-2.png";
import FooterOnboarding from "./components/footerOnboarding";

export default function OnboardingPages() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[#050505] font-jakarta-sans overflow-x-hidden text-white">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={bgGlow2}
            alt="Purple Glow Top Right"
            className="absolute top-0 right-0 h-[569px] w-[40%] max-w-none opacity-40 blur-[100px] animate-pulse-slow mix-blend-screen"
          />
          <img
            src={bgGlow2}
            alt="Purple Glow Bottom Left"
            className="absolute bottom-0 left-0 h-[569px] w-[40%] max-w-none opacity-30 blur-[120px] animate-pulse-slow delay-1000 mix-blend-screen"
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar Section */}
          <div className="w-full px-8 mt-5 flex justify-center">
            <NavbarOnboardingPages />
          </div>

          {/* Hero Section */}
          <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-16 md:py-24">
            <div className="w-full max-w-6xl">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-6 animate-fade-in">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-purple-200">Welcome to Nalarin</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Start Your Learning
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                      Journey Today
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                    Unlock your potential with personalized learning experiences designed to help you achieve your goals faster and smarter.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
                    <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                      Learn More
                    </button>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
                    <div className="animate-fade-in-up delay-300">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        10K+
                      </div>
                      <div className="text-sm md:text-base text-white/60">Active Learners</div>
                    </div>
                    <div className="animate-fade-in-up delay-400">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        500+
                      </div>
                      <div className="text-sm md:text-base text-white/60">Courses</div>
                    </div>
                    <div className="animate-fade-in-up delay-500">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        95%
                      </div>
                      <div className="text-sm md:text-base text-white/60">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: "🎯", title: "Personalized", desc: "Tailored learning paths" },
                  { icon: "⚡", title: "Fast Track", desc: "Accelerated progress" },
                  { icon: "🏆", title: "Certified", desc: "Industry recognized" }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Footer Section */}
          <FooterOnboarding />
        </div>
      </div>
    </>
  );
}
