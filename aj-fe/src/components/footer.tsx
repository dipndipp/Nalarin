import FooterImage from "../assets/images/footer.png";

export default function Footer() {
  return (
    <footer className="relative w-full mt-72">
      {/* Background Glow Image */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <img
          src={FooterImage}
          alt="Footer Glow"
          className="w-full h-auto object-cover opacity-100"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-8 md:pb-12 pt-32 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-wide font-jakarta-sans text-center drop-shadow-lg">
          Nalarin
        </h1>

        <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
          <li>
            <a
              href="#"
              className="text-white/90 hover:text-white text-base md:text-lg font-medium transition-colors font-jakarta-sans"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white/90 hover:text-white text-base md:text-lg font-medium transition-colors font-jakarta-sans"
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white/90 hover:text-white text-base md:text-lg font-medium transition-colors font-jakarta-sans"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
