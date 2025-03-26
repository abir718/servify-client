import Typewriter from "typewriter-effect";
import { IoIosStarOutline } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Slide = () => {
    return (
        <div className="pt-10 bg-gray-50">
            <div className="flex justify-around">
                <div className="pt-20">
                    <div className="text-4xl font-bold">
                        <h1>Connect with Top-rated</h1>
                        <div className="flex py-2 gap-2">
                            <h1 >Professional </h1>
                            <span className="text-[#4D92C1]">
                                <Typewriter options={{ strings: ["Doctor", "Electrician", "Worker", "Veterian"], autoStart: true, loop: true, deleteSpeed: 40, }} />
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-xl py-2">Connect with Sevify and unlock the perfect service tailored just for you</p>
                    <div className="flex items-center gap-4 text-[#2C485F] py-2">
                        <div className=" flex items-center gap-2">
                            <IoIosStarOutline className="size-12" />
                            <div>
                                <p className="text-xl font-bold">300k+</p>
                                <p className="text-gray-500">Reviews Intotal</p>
                            </div>

                        </div>
                        <div className=" flex items-center gap-2">
                            <AiOutlineRise className="size-12" />
                            <div>
                                <p className="text-xl font-bold">20k+</p>
                                <p className="text-gray-500">Verified Services</p>
                            </div>

                        </div>
                        <div className=" flex items-center gap-2">
                            <FaUser className="size-10" />
                            <div>
                                <p className="text-xl font-bold">200k+</p>
                                <p className="text-gray-500">Verified Users</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-[#2C485F] w-fit text-white rounded-full border-2 border-[#1a2e3f]">
                        <p className="text-xl font-medium">Servify</p>
                        <div className=" bg-[#1a2e3f] rounded-full p-1">
                            <MdArrowOutward className="size-6"  />
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-[750px]" src="/images/bg.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Slide;
