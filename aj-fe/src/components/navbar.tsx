export default function Navbar() {
  const navItems = ["Home", "Course", "About Us"];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-4">
      <nav className="animate-fade-in-down relative flex items-center justify-between px-8 py-4 bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Left Links */}
        <ul className="flex items-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <li key={item} className="group relative">
              <a
                href="#"
                className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 mix-blend-screen shadow-[0_0_10px_white]"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Brand */}
        <h1 className="font-jakarta-sans font-bold text-2xl text-white tracking-tight cursor-default hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-300">
          Nalarin
        </h1>
      </nav>
    </div>
  );
}