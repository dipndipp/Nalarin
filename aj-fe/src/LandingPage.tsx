import ButtonCustom from "./components/buttonCustom";
import Navbar from "./components/navbar";
// import bgGlow1 from './assets/images/bg-glow-1.png';
import bgGlow2 from "./assets/images/bg-glow-2.png";
import Read from "./assets/images/Read.png";
import ChatRoom from "./assets/images/Chat Room.png";
import Learning from "./assets/images/Learning.png";
import Interior from "./assets/images/Interior Mirror.png";
import BarChart from "./assets/images/Bar Chart.png";
import arrowRight from "./assets/images/Vector.png";
import glow from "./assets/images/glowEffect.png";

import "./index.css";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] font-jakarta-sans overflow-hidden selection:bg-[#4361EE] selection:text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* <img
          src={bgGlow1}
          alt="Purple Glow Top"
          className="absolute top-[-5%] left-[-5%] w-[50%] max-w-none opacity-50 blur-[60px] animate-pulse-slow mix-blend-screen"
        /> */}
        <img
          src={bgGlow2}
          alt="Purple Glow Bottom"
          className="absolute top-0 right-0 h-[569px] w-[40%] max-w-none opacity-50 blur-[90px] animate-pulse-slow delay-1000 mix-blend-screen"
        />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 px-4 pb-20 min-h-screen">
        {/* Glass Card Container */}
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500">
          {/* Subtle sheen effect on card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 mt-4">
            <span className="text-[#5D5DFF] ">Nalarin</span>
            <span className="text-white"> : Start your Study Jam</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed opacity-80">
            <span className="text-white text-3xl font-bold">Nalarin</span> adalah platform edukasi yang membantu pelajar mengembangkan
            kemampuan berpikir kritis di berbagai kondisi keterbatasan. Melalui
            studi kasus, refleksi, dan diskusi terarah, Nalarin membiasakan pengguna
            memahami bagaimana cara mengetahui mana yang benar—bukan sekadar
            menghafal jawaban.
          </p>

          <div className="mb-16 scale-90 md:scale-100">
            <ButtonCustom />
          </div>

          {/* Bottom Grid/Cards Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-32 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center relative overflow-hidden group/card bg-gradient-to-br from-[#ffffff05] to-[#ffffff01] hover:scale-105 cursor-pointer"
              >
                {/* Decorative pills/shapes */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-20 group-hover/card:opacity-40 transition-opacity">
                  <div className="w-1/2 h-3 bg-white/30 rounded-full rotate-[-5deg]"></div>
                  <div className="w-3/4 h-3 bg-white/20 rounded-full rotate-[2deg]"></div>
                  <div className="w-2/3 h-3 bg-white/20 rounded-full rotate-[-2deg]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500 mt-20">
          {/* Subtle background gradient for this section */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex flex-wrap justify-between items-center w-full px-4 md:px-12 gap-8 md:gap-0">
            {/* Item 1: Belajar */}
            <div className="flex flex-col items-center gap-4 group/item cursor-pointer min-w-[100px] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={Read}
                alt="Belajar"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
              />
              <span className="text-gray-300 font-medium text-base tracking-wide group-hover/item:text-white transition-colors duration-300">
                Belajar
              </span>
            </div>

            {/* Item 2: NalarLab */}
            <div className="flex flex-col items-center gap-4 group/item cursor-pointer min-w-[100px] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={Learning}
                alt="NalarLab"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
              />
              <span className="text-gray-300 font-medium text-base tracking-wide group-hover/item:text-white transition-colors duration-300">
                NalarLab
              </span>
            </div>

            {/* Item 3: Refleksi */}
            <div className="flex flex-col items-center gap-4 group/item cursor-pointer min-w-[100px] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={Interior}
                alt="Refleksi"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
              />
              <span className="text-gray-300 font-medium text-base tracking-wide group-hover/item:text-white transition-colors duration-300">
                Refleksi
              </span>
            </div>

            {/* Item 4: Discuss */}
            <div className="flex flex-col items-center gap-4 group/item cursor-pointer min-w-[100px] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={ChatRoom}
                alt="Discuss"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
              />
              <span className="text-gray-300 font-medium text-base tracking-wide group-hover/item:text-white transition-colors duration-300">
                Discuss
              </span>
            </div>

            {/* Item 5: Progress */}
            <div className="flex flex-col items-center gap-4 group/item cursor-pointer min-w-[100px] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={BarChart}
                alt="Progress"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
              />
              <span className="text-gray-300 font-medium text-base tracking-wide group-hover/item:text-white transition-colors duration-300">
                Progress
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500 mt-20">
          <h1 className="text-white text-2xl">Register Now</h1>
          <button className="bg-gradient-to-r bg-[#9148EF] hover:opacity-90 transition-opacity text-white font-bold py-3 px-12 rounded-2xl font-jakarta-sans text-2xl cursor-pointer h-[px] w-[301px] mt-10">
            Sign Up
          </button>
        </div>

        <div className="relative w-full py-20 mt-[100px]">
          {/* Header Title */}
          <div className="text-center mb-16 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-[#5D5DFF]">Nalarin</span>
              <span className="text-white"> : Start your Study Jam</span>
            </h1>
          </div>

          {/* Cards Container with Glow */}
          <div className="relative w-full flex justify-center items-center">

            {/* Centered Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none z-0 flex justify-center items-center">
              <img src={glow} alt="Glow Effect" className="w-[120%] max-w-none h-auto opacity-100 mix-blend-screen scale-150" />
            </div>

            {/* Grid Layout for Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">

              {/* Card 1: Belajar */}
              <div className="bg-[#101010]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-start text-left group hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <h1 className="text-white text-3xl font-bold mb-4">Belajar</h1>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ini deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi website
                </p>
                <div className="self-end mt-auto w-16 h-12 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <img src={arrowRight} alt="Arrow Right" className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Refleksi */}
              <div className="bg-[#101010]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-start text-left group hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <h1 className="text-white text-3xl font-bold mb-4">Refleksi</h1>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ini deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi website
                </p>
                <div className="self-end mt-auto w-16 h-12 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <img src={arrowRight} alt="Arrow Right" className="w-6 h-6" />
                </div>
              </div>

              {/* Card 3: Nalar Lab */}
              <div className="bg-[#101010]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-start text-left group hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <h1 className="text-white text-3xl font-bold mb-4">Nalar Lab</h1>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ini deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi website
                </p>
                <div className="self-end mt-auto w-16 h-12 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <img src={arrowRight} alt="Arrow Right" className="w-6 h-6" />
                </div>
              </div>

              {/* Card 4: Diskusi */}
              <div className="bg-[#101010]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-start text-left group hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <h1 className="text-white text-3xl font-bold mb-4">Diskusi</h1>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Ini deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi website
                </p>
                <div className="self-end mt-auto w-16 h-12 bg-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <img src={arrowRight} alt="Arrow Right" className="w-6 h-6" />
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>
      <Footer />
    </div>
  );
}

export default App;
