import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function RegisterPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] font-jakarta-sans overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5D5DFF]/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A44CEE]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div>
        <Navbar />
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 shadow-2xl flex flex-col items-center text-center mt-36">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <p className="text-gray-400 mb-8">
          Start your critical thinking journey today.
        </p>

        <div className="w-full space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#5D5DFF] transition-colors"
          />
        </div>

        <div className="w-full mt-8">
          <button className="w-full bg-gradient-to-r from-[#3A4CEC] to-[#A44CEE] hover:opacity-90 transition-opacity text-white font-bold py-3 rounded-xl">
            Sign Up
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5D5DFF] hover:underline">
            Log In
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
