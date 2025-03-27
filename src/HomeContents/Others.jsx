import { Link } from "react-router-dom";

const Others = () => {
    return (
        <div className="">
            <div className="bg-[#2C485F] p-10">
                <div className="lg:flex items-center justify-around mx-auto py-12">
                    <img className="w-80 h-full mb-12 lg:mb-0" src="/images/mail2.png" alt="" />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Email" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div className="flex gap-4">
                            <textarea type="text" placeholder="Message" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div>
                            <button className="btn btn-outline btn-info">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10">
                <div className="w-[80%] mx-auto bg-[#FFDEBF]  p-10 rounded-lg lg:flex items-center justify-around">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl font-bold ">Help millions make the right choice</h1>
                        <p className="font-medium">Share your reviews on servify , where reviews make a difference.</p>
                        <button className="px-4 py-2 font-medium rounded-full text-white bg-black w-fit"><Link to={`/login`}>Login or Sign up</Link></button>

                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 lg:mt-1 mt-10">
                        <div className="overflow-hidden rounded-lg">
                            <img src="/images/imageone.png" alt="" className="w-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src="/images/imagetwo.png" alt="" className="w-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img src="/images/imagethree.png" alt="" className="w-64 object-cover transition-transform duration-300 hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Others;