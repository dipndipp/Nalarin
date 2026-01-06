import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1260px] px-4">
      <nav className="animate-fade-in-down relative flex items-center justify-between px-8 py-4 bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Left Links */}
        <ul className="flex items-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                to={item.path}
                className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 mix-blend-screen shadow-[0_0_10px_white]"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Brand */}
        <Link to="/" className="font-jakarta-sans font-bold text-2xl text-white tracking-tight cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-300">
          Nalarin
        </Link>
      </nav>
    </div>
  );
}