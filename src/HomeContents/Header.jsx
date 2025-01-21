import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Authprovider";
import { motion } from "framer-motion";

const Header = () => {

    const underlineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" },
    };

    const { user, logOut } = useContext(authContext);

    // [#2C485F]  
    return (
        <div className="mx-auto w-[80%] flex items-center justify-between">
            <div>
                <img className="w-14" src="/images/survify.png" alt="" />
            </div>
            <div>
                {user && user.email ? (
                    <div className="flex gap-6">
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

                        <NavLink
                            to="/addservice"
                            className="relative font-medium text-gray-400"
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={isActive ? "text-[#2C485F]" : ""}>
                                        Add Service
                                    </span>
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
                                    <span className={isActive ? "text-[#2C485F]" : ""}>
                                        My Reviews
                                    </span>
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
                                    <span className={isActive ? "text-[#2C485F]" : ""}>
                                        My Services
                                    </span>
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
                    </div>
                ) : (
                    <div className="flex gap-6">
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
                    </div>
                )}
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