import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-200">
                <div className="flex flex-col items-center justify-center gap-2 pt-10">
                    <img className="w-20" src="/images/survify.png" alt="" />
                    <p className="text-[#052843] text-lg font-medium text-center">Empowering businesses and individuals with trusted reviews and insights to build better connections – Servify, your partner in reliability.</p>
                </div>

                <footer className="footer lg:w-[80%] mx-auto text-base-content text-lg p-10 flex flex-col sm:flex-row  items-center justify-between gap-6">
                    <nav className="flex flex-col text-center justify-center items-center">
                        <h6 className="font-bold text-xl text-[#052843]  mb-4 sm:mb-2">Services</h6>
                        <Link className="hover:text-[#052843] transition duration-300 text-gray-400 mb-2" to={`/services`}>All Services</Link>
                        <a href="https://www.trustpilot.com/" className="hover:text-[#052843] transition duration-300 text-gray-400 mb-2">Inspiration</a>
                    </nav>

                    <div className="flex flex-col text-center justify-center items-center">
                        <h6 className="font-bold text-xl text-[#052843]  mb-4 sm:mb-2">Company</h6>
                        <Link className="hover:text-[#052843] transition duration-300 text-gray-400 mb-2" to={`/addservice`}>Post</Link>
                        <a href="https://www.facebook.com/yuta.553/" className="hover:text-[#052843] transition duration-300 text-gray-400 mb-2">Contact</a>
                    </div>

                    <nav className="flex flex-col items-center">
                        <h6 className="font-bold text-xl text-[#22537a]  mb-4 sm:mb-2">Social</h6>
                        <div className="flex items-center gap-4 text-[#6395be]">
                            <a href="https://www.facebook.com/yuta.553/" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className="size-8 hover:text-[#052843] transition duration-300" />
                            </a>
                            <a href="https://github.com/abir718" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare className="size-8 hover:text-[#052843] transition duration-300" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="size-10 hover:text-[#052843] transition duration-300" />
                            </a>
                        </div>
                    </nav>

                </footer>
                <div className="w-[100%] flex flex-col items-center mt-8 bg-[#052843]">
                    <p className="text-white my-5 text-lg">© 2024 - 2030 | Alrights reserved by Servify.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;