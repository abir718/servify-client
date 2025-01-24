import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {

    const loadServices = useLoaderData(); 
    const [services, setServices] = useState(loadServices);
    return (
        <div className="bg-base-200">
            {services.map((service)=><div
            key ={service._id} >
                <div className="border-[#2C485F] border-[2px] w-fit p-3 rounded-lg bg-white">
                    <img className="w-80 h-48 object-cover" src={service.image} alt="" />
                    <p className="font-bold text-xl">{service.title}</p>
                    <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">{service.category}</p>
                    <p className="w-80">{service.description}</p>
                    <p>Pricing: {service.price}$</p>
                    <Link to={`/services/${service._id}`} ><button className="bg-[#2C485F] text-white rounded-lg p-2">See Details</button></Link>
                </div>
            </div> )}
            
        </div>
    );
};

export default Services;