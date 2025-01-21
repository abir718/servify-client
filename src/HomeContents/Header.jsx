import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Authprovider";


const Header = () => {

const { user, logOut } = useContext(authContext);

// [#2C485F]  
    return (
        <div className="mx-auto w-[80%] flex items-center justify-between">
            <div>
                <img className="w-14" src="/images/survify.png" alt="" />
            </div>
            <div>
            {user && user.email ? 
                <div className="flex gap-6">
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/services">Services</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/addservice">Add Service</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/myreviews">My Reviews</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/myservices">My Services</NavLink>
                </div>  :

                <div className="flex gap-6">
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `font-medium ${isActive ? "text-[#2C485F] underline" : "text-gray-400"}`} to="/services">Services</NavLink>
                </div> 
                }
            </div>


        <div>
        {user && user.email ? 
        <div className="flex items-center gap-3">
            <img className="w-10" src={user.photoURL} title={user.displayName} alt="User Avatar" />
            <button className="font-medium border-[2px] border-[#2C485F] text-[#2C485F] px-3 py-2 rounded-lg hover:rounded-full transition-transform  duration-500" onClick={logOut}>Log-out</button>
        </div> : 
        <div className="flex gap-3">
            <NavLink to="/login"><button className="font-medium border-[2px] border-[#2C485F] bg-[#2C485F] text-white px-3 py-2 rounded-lg hover:rounded-full transition-transform  duration-500">Login</button></NavLink>
            <NavLink to="/register"><button className="font-medium border-[2px] border-[#2C485F] text-[#2C485F] px-3 py-2 rounded-lg hover:rounded-full transition-transform  duration-500">Register</button></NavLink>
        </div>
        }
        </div>


        </div>

    );
};

export default Header;