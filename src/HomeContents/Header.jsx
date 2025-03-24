import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Authprovider";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const underlineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" },
    };

    const { user, logOut } = useContext(authContext);

    return (
        <div className=" bg-white py-1 drop-shadow-lg sticky top-0 z-50">
            <div className="mx-auto w-[90%]  flex items-center justify-between">
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
                        {menuOpen ? (
                            <span className="text-xl"><RxCross2 /></span>
                        ) : (
                            <span className="text-xl"><RxHamburgerMenu /></span>
                        )}
                    </button>
                </div>

                <div className="hidden sm:block">
                    <img className="w-14 cursor-pointer" onClick={() => window.location.reload()}  src="/images/survify.png" alt="" />
                </div>

                <div
                    className={`absolute sm:static top-16  bg-white sm:bg-transparent shadow-lg sm:shadow-none rounded-lg p-4 sm:p-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center transition-transform duration-300 ${menuOpen ? "block" : "hidden sm:flex"}`}
                >
                    {user && user.email ? (
                        <>
                            <NavLink to="/" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>Home</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/services" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>Services</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/addservice" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>Add Service</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/myreviews" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>My Reviews</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/myservices" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>My Services</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>Home</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink to="/services" className="relative font-medium text-gray-400">
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-[#2C485F]" : ""}>Services</span>
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-[-2px] left-0 h-[2px] bg-[#2C485F]"
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={underlineVariants}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {user && user.email ? (
                        <>
                            <img
                                className="w-10"
                                src={user.photoURL}
                                title={user.displayName}
                                alt="User Icon"
                            />
                            <motion.button
                                className="font-medium border-[2px] border-[#2C485F] text-[#2C485F] px-3 py-2 rounded-lg hover:rounded-full transition-all duration-300"
                                onClick={logOut}
                                whileHover={{ borderRadius: "999px" }}
                            >
                                Log-out
                            </motion.button>

                        </>
                    ) : (
                        <div className="flex gap-3">
                            <NavLink to="/login">
                                <button className="font-medium border-[2px] border-[#2C485F] bg-[#2C485F] text-white px-3 py-2 rounded-lg hover:rounded-full transition duration-500">
                                    Login
                                </button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="font-medium border-[2px] border-[#2C485F] text-[#2C485F] px-3 py-2 rounded-lg hover:rounded-full transition duration-500">
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
