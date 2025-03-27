
function Partners() {
    return (
        <div>
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
        </div>
    )
}

export default Partners