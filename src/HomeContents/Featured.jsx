import { Link } from "react-router-dom";

const Featured = ({ loadServices }) => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold w-[90%] mx-auto my-4">Popular Services</h1>
            </div>
            <div className="flex items-center justify-center mb-10">

                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
                    {loadServices.slice(0, 5).map((service) => (
                        <div key={service._id} className="drop-shadow-md bg-white rounded-lg">
                            <div className="">
                                <div className="overflow-hidden">
                                    <img src={service.image} alt="" className="w-72 h-44 rounded-t-md object-cover transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="p-2 border-x-2 border-b-2 rounded-b-lg">
                                    <p className="text-xl font-medium">{service.title}</p>
                                    <div className="flex items-center justify-between py-2">
                                        <p className="">Pricing: {service.price}$</p>
                                        <Link to={`/services/${service._id}`} ><button className="text-[#2C485F] bg-[rgba(44,72,95,0.2)] hover:text-white hover:bg-[#2C485F] rounded-md p-2 transition duration-300">Details</button></Link>
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
