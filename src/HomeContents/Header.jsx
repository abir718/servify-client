import { NavLink } from "react-router-dom";


const Header = () => {

// [#2C485F]  
    return (
        <div className="mx-auto w-[80%] flex items-center justify-between">
            <div>
                <img className="w-14" src="/images/survify.png" alt="" />
            </div>
        <div className="flex gap-6">
            <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/services">Services</NavLink>

        </div>
        <div className="flex gap-3">
                <NavLink to="/login"><button className="font-medium border-[2px] border-[#2C485F] bg-[#2C485F] text-white px-3 py-2 rounded-lg hover:rounded-full transition-transform  duration-500">Login</button></NavLink>
                <NavLink to="/register"><button className="font-medium border-[2px] border-[#2C485F] text-[#2C485F] px-3 py-2 rounded-lg hover:rounded-full transition-transform  duration-500">Register</button></NavLink>
        </div>
        </div>

    );
};

export default Header;