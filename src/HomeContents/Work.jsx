import { MdOutlinePostAdd } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Work() {
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl font-bold text-[#2C485F] text-center">How Servify Works</h1>
            <p className="text-xl text-gray-500 text-center pt-2  pb-4">Each listing is designed to be clear and concise, providing customers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 mt-4">
                <div className="flex flex-col justify-center items-center hover:-translate-y-4 transform duration-300 w-fit h-full rounded-lg p-3 bg-white drop-shadow-lg">
                    <MdOutlinePostAdd className="size-20 text-[#2C485F]" />
                    <h1 className="text-[#2C485F] text-xl font-medium">1. Post a Service</h1>
                    <p className="text-gray-500 max-w-sm text-center">Describe the service you offer and post it. Service providers will be notified and can express interest in your job.</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:-translate-y-4 transform duration-300 w-fit h-full rounded-lg p-3 bg-white drop-shadow-lg">
                    <SiTicktick className="size-20 text-[#2C485F]" />
                    <h1 className="text-[#2C485F] text-xl font-medium">2. Get Booked & Job Done</h1>
                    <p className="text-gray-500 max-w-sm text-center">Providers interested in your job will send offers. Choose the best one, and get the job done seamlessly.</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:-translate-y-4 transform duration-300 w-fit h-full rounded-lg p-3 bg-white drop-shadow-lg">
                    <FaCoins className="size-20 text-[#2C485F]" />
                    <h1 className="text-[#2C485F] text-xl font-medium">3. Make Secure Payments</h1>
                    <p className="text-gray-500 max-w-sm text-center">Pay securely through our platform once the job is completed to your satisfaction.</p>
                </div>
                <div className="flex flex-col justify-center items-center hover:-translate-y-4 transform duration-300 w-fit h-full rounded-lg p-3 bg-white drop-shadow-lg">
                    <FaRegStar className="size-20 text-[#2C485F]" />
                    <h1 className="text-[#2C485F] text-xl font-medium">4. Rate & Review</h1>
                    <p className="text-gray-500 max-w-sm text-center">Leave feedback and rate the provider to help others find reliable services.</p>
                </div>
            </div>

        </div>
    )
}

export default Work