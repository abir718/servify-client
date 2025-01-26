import { Link } from "react-router-dom";

const Featured = ({ loadServices }) => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold w-[90%] mx-auto my-4">Featured Services</h1>
            </div>
            <div className="flex items-center justify-center mb-10">

                <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-10">
                    {loadServices.map((service) => (
                        <div key={service._id}>
                            <div className="border-[2px] border-[#2C485F] w-fit  p-3 rounded-lg">
                                <img className="w-52 h-36 rounded-lg" src={service.image} alt="" />
                                <p className="text-lg font-medium">{service.title}</p>
                                <p>Pricing: {service.price}</p>
                                <Link to={`/services/${service._id}`} ><button className="text-white bg-[#2C485F] rounded-full py-1 px-2">See Details</button></Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Featured;
