import { Link } from "react-router";
import ArrowRight from "../../assets/images/arrowBack.png";

export default function ButtonNext() {
    return (
        <>
            <div>
                <Link to="/" className="relative px-8 py-4 bg-[#9148EF] rounded-2xl font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden flex items-center gap-3">
                    Next
                    <img src={ArrowRight} alt="Next" className="w-5 h-5 object-contain" />
                </Link>
            </div>
        </>
    )
}