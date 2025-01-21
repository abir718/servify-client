const Footer = () => {
    return (
        <div>
            <div className="">
                <div className="flex flex-col items-center justify-center gap-2 pt-10">
                    <img className="w-20" src="/images/survify.png" alt="" />
                    <p className="text-[#2C485F] text-lg font-medium text-center">Empowering businesses and individuals with trusted reviews and insights to build better connections – Servify, your partner in reliability.</p>
                </div>

                <footer className="footer lg:w-[80%] mx-auto text-base-content text-lg p-10 flex flex-col sm:flex-row sm:items-start items-center justify-between gap-6">
                    <nav className="flex flex-col items-center sm:items-start">
                        <h6 className="font-bold text-xl text-[#2C485F]  mb-4 sm:mb-2">Services</h6>
                        <a className="link link-hover text-gray-400 mb-2">Branding</a>
                        <a className="link link-hover text-gray-400 mb-2">Design</a>
                        <a className="link link-hover text-gray-400 mb-2">Marketing</a>
                        <a className="link link-hover text-gray-400">Advertisement</a>
                    </nav>

                    <nav className="flex flex-col items-center sm:items-start">
                        <h6 className="font-bold text-xl text-[#2C485F]  mb-4 sm:mb-2">Company</h6>
                        <a className="link link-hover text-gray-400 mb-2">About us</a>
                        <a className="link link-hover text-gray-400 mb-2">Contact</a>
                        <a className="link link-hover text-gray-400 mb-2">Jobs</a>
                        <a className="link link-hover text-gray-400">Press kit</a>
                    </nav>

                    <nav className="flex flex-col items-center sm:items-start">
                        <h6 className="font-bold text-xl text-[#2C485F]  mb-4 sm:mb-2">Social</h6>
                        <div className="flex gap-4 text-[#2C485F] ">
                            <a href="https://www.facebook.com/yuta.553/" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/abir718" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.419-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.768.84 1.234 1.911 1.234 3.221 0 4.61-2.806 5.625-5.479 5.922.43.372.823 1.103.823 2.222 0 1.606-.014 2.899-.014 3.293 0 .32.218.694.824.576 4.765-1.587 8.202-6.085 8.202-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                        </div>
                    </nav>
                    
                </footer>
                <div className="w-[100%] flex flex-col items-center mt-8">
                <hr className="w-[100%] text-black" />
                <p className="text-gray-400 mt-6 mb-8">@2025 Your Company All Rights Reserved.</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;