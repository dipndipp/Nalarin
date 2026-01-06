import { Link } from "react-router-dom";

export default function ButtonCustom() {
    return (
        <Link to="/login" className="bg-gradient-to-r from-[#3A4CEC] to-[#A44CEE] hover:opacity-90 transition-opacity text-white font-bold py-3 px-12 rounded-2xl font-jakarta-sans text-2xl cursor-pointer h-[77px] w-[301px] flex items-center justify-center">
            Start Course
        </Link>
    );
}