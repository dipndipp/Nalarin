import ButtonCustom from './components/buttonCustom';
import Navbar from './components/navbar';
// import bgGlow1 from './assets/images/bg-glow-1.png';
import bgGlow2 from './assets/images/bg-glow-2.png';
import './index.css';

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
          className="absolute bottom-[-5%] right-[-5%] w-[50%] max-w-none opacity-40 blur-[80px] animate-pulse-slow delay-1000 mix-blend-screen"
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
            Ini deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi websiteIni deksripsi website
          </p>

          <div className="mb-16 scale-90 md:scale-100">
            <ButtonCustom />
          </div>

          {/* Bottom Grid/Cards Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center relative overflow-hidden group/card bg-gradient-to-br from-[#ffffff05] to-[#ffffff01] hover:scale-105 cursor-pointer">
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

        <div className='w-full max-w-6xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-all duration-500 mt-20'>
        </div>
      </div>
    </div>
  )
}

export default App
