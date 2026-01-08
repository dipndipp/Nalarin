import { useState } from "react";
import NavbarOnboardingPages from "./components/navbarOnboarding";
import bgGlow2 from "../assets/images/bg-glow-2.png";
import FooterOnboarding from "./components/footerOnboarding";
import ButtonNext from "./components/buttonNext";
import ButtonPrev from "./components/buttonPrev";
import RoleSelection from "./components/roleSelection";
import ProgressBar from "./components/progressBar";

export default function OnboardingPages() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Total number of onboarding steps

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
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
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Progress Bar */}
                  <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

                  {/* Title Section */}
                  <div className="text-left mb-12">
                    <h1 className="font-bold text-4xl">Welcome! Let's get started</h1>
                    <p className="mt-1">Are you joining as a student or mentor?</p>
                  </div>

                  {/* Role Selection Cards */}
                  <div className="mb-12">
                    <RoleSelection />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start" onClick={handlePrev}>
                      <ButtonPrev />
                    </div>
                    <div className="flex justify-end" onClick={handleNext}>
                      <ButtonNext />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
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
