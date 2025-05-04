import { Link } from "react-router-dom";

const Featured = ({ loadServices }) => {
    return (
        <div className="mt-6 w-[90%] mx-auto">
            <h1 className="text-4xl font-bold text-[#2C485F] text-center">Popular Service</h1>
            <p className="text-xl text-gray-500 text-center pt-2 pb-4">Each listing is designed to be clear and concise, providing customers</p>
            <div className="mb-10">

                <div className="grid lg:grid-cols-5 md:grid-cols-2 place-items-center gap-4">
                    {loadServices.slice(0, 5).map((service) => (
                        <div key={service._id}>
                            <div className="border-[1px] p-2 rounded-lg drop-shadow-md bg-white">
                                <div className="relative overflow-hidden w-80 h-44">
                                    <p className="absolute top-2 right-2 text-[#2C485F] bg-white px-2 py-1 rounded-md z-10">{service.category}</p>
                                    <div className="">
                                        <img src={service.image} alt="" className=" w-full h-full rounded-md object-cover transition duration-300 hover:scale-110"/>
                                    </div>
                                </div>
                                <div className="p-2 rounded-b-lg">
                                    <p className="text-xl font-medium">{service.title}</p>
                                    <div className="flex items-center justify-between pt-2">
                                        <p>Pricing: {service.price}$</p>
                                        <Link to={`/services/${service._id}`}>
                                            <button className="text-[#2C485F] bg-[rgba(44,72,95,0.2)] hover:text-white hover:bg-[#2C485F] rounded-md p-2 transition duration-300">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>


    );
};

export default Featured;
