import { Link } from "react-router";

export default function NavbarOnboardingPages() {
  return (
    <nav className="animate-fade-in-down w-[916px] relative flex items-center justify-center px-8 py-4 bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <Link
        to="/"
        className="font-jakarta-sans font-bold text-4xl text-white tracking-tight cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-300"
      >
        Nalarin
      </Link>
    </nav>
  );
}
