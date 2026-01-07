import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import LoginPic from "../../assets/images/loginPic.png";


export default function LoginPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] font-jakarta-sans overflow-hidden flex flex-col items-center justify-center text-white">
            {/* Background Effects */}
            <div>
                <Navbar/>
            </div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5D5DFF]/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A44CEE]/20 blur-[120px] rounded-full pointer-events-none"></div>

         

            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 shadow-2xl flex flex-col items-center text-center mt-44">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <p className="text-gray-400 mb-8">Login to continue your progress.</p>

                <div>

                    
                </div>
                <div className="w-full space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors" />
                    <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors" />
                </div>

                    <div>
                        
                    </div>
                <div className="w-full mt-8 flex justify-center">
                    <Link to="/onboarding"  className="bg-gradient-to-r from-[#002DFF] to-[#050063] hover:opacity-90 transition-opacity text-white font-bold py-3 px-12 rounded-2xl font-jakarta-sans text-2xl cursor-pointer  w-full flex items-center justify-center">
                        Log In
                    </Link>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                    Don't have an account? <Link to="/register" className="text-[#5D5DFF] hover:underline">Sign Up</Link>
                </div>

            </div>

                <Footer/>
            
        </div>
    )
}