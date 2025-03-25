import { Link } from "react-router-dom";

const Others = () => {
    return (
        <div className="bg-[#FCFBF3]">
            <div className="w-[80%] mx-auto ">
                <div className="py-12">
                    <h1 className="text-4xl font-bold text-[#2C485F] text-center mb-10">Meet Our Partner</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="lg:h-[280px] text-center bg-white border-[1px] border-[#2C485F] p-4 flex flex-col items-center justify-evenly rounded-lg hover:-translate-y-2 transition-transform duration-300">
                            <img className="w-[150px]" src="/images/cheesecake.png" alt="" />
                            <p className="text-[#2C485F] text-2xl font-medium">The Cheesecake Factory</p>
                            <p className="text-gray-600">The Cheesecake Factory, renowned for its diverse menu and iconic desserts, partners with the platform to collect feedback on dining experiences, food quality, and service. By leveraging user reviews, they enhance customer satisfaction and introduce tailored menu improvements, rewarding reviewers with exclusive discounts or special offers.</p>
                        </div>
                        <div className="lg:h-[280px] bg-white text-center border-[1px] border-[#2C485F] p-4 flex flex-col items-center justify-evenly rounded-lg hover:-translate-y-2 transition duration-300">
                            <img className="w-[150px]" src="/images/blue.png" alt="" />
                            <p className="text-[#2C485F] text-2xl font-medium">Blue Apron</p>
                            <p className="text-gray-600">Blue Apron, a leading meal kit delivery service, collaborates with the platform to gain insights into recipe satisfaction, ingredient quality, and delivery reliability. Customer reviews help them refine their offerings and improve convenience, while reviewers are rewarded with discounts or free meal kits as a token of appreciation.</p>
                        </div>

                        <div className="lg:h-[280px] bg-white text-center border-[1px] border-[#2C485F] p-4 flex flex-col items-center justify-evenly rounded-lg hover:-translate-y-2 transition duration-300">
                            <img className="w-[200px]" src="/images/banfield.png" alt="" />
                            <p className="text-[#2C485F] text-2xl font-medium">Banfield Pet Hospital</p>
                            <p className="text-gray-600">Banfield Pet Hospital, a trusted name in veterinary care, uses the platform to gather feedback on pet care services, wellness plans, and clinic experiences. User reviews help them enhance pet health services, ensuring better care, while engaged reviewers receive free consultations or discounted wellness packages.</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="bg-[#2C485F]">
                <div className="lg:flex items-center justify-around w-[80%] mx-auto py-12">
                    <img className="w-80 h-full mb-12 lg:mb-0" src="/images/mail2.png" alt="" />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-white">Send a Message</h1>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[400px]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Email" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[400px]" />
                        </div>
                        <div className="flex gap-4">
                            <textarea type="text" placeholder="Message" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[400px]" />
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