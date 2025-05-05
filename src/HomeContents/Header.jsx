import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Authprovider";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(authContext);

    return (
        <div className="bg-white py-1 drop-shadow-lg sticky top-0 z-50">
            <div className="mx-auto w-[90%] flex items-center justify-between">
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 text-xl">
                        {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>
                </div>

                <div className="hidden sm:block">
                    <img
                        className="w-12 cursor-pointer"
                        onClick={() => window.location.reload()}
                        src="/images/survify.png"
                        alt=""
                    />
                </div>

                <div
                    className={`absolute sm:static top-16 bg-white sm:bg-transparent shadow-lg sm:shadow-none rounded-lg p-4 sm:p-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center transition-transform duration-300 ${menuOpen ? "block" : "hidden sm:flex"}`}
                >
                    {user?.email ? (
                        <>
                            <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>Home</NavLink>
                            <NavLink to="/services/all" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>Services</NavLink>
                            <NavLink to="/about-us" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>About Us</NavLink>

                        </>
                    ) : (
                        <>
                            <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>Home</NavLink>
                            <NavLink to="/services" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>Services</NavLink>
                            <NavLink to="/about-us" className={({ isActive }) => `font-medium ${isActive ? 'text-[#052843]' : 'text-gray-400'}`}>About Us</NavLink>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {user?.email ? (
                        <>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button"><img className="w-10" src={user.photoURL} title={user.displayName} alt="User Icon" /></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><button onClick={logOut}>Log-out</button></li>
                                </ul>
                            </div>

                        </>
                    ) : (
                        <div className="flex gap-3">
                            <NavLink to="/login">
                                <button className="font-medium border-[2px] border-[#052843] bg-[#052843] text-white px-3 py-2 rounded-lg">
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="font-medium border-[2px] border-[#052843] text-[#052843] px-3 py-2 rounded-lg">
                                    Register
                                </button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
