import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";

const Myservices = () => {
    const services = useLoaderData();
    const { user } = useContext(authContext);
    const [service, setservice] = useState([]);

    useEffect(() => {
        if (services && user) {
            const userServices = services.filter((ser) => ser.email === user?.email);
            setservice(userServices);
        }
    }, [services, user]);



    return (
        <div className="bg-base-200">
            <div className="mx-auto w-[80%]">
                <h1 className="text-3xl font-bold mb-4 pt-6">My Services</h1>
                {service.map((service) => <div
                    key={service._id} >
                    <div className="border-[#2C485F] border-[2px] w-fit p-3 rounded-lg bg-white">
                        <img className="w-80 h-48 object-cover" src={service.image} alt="" />
                        <p className="font-bold text-xl">{service.title}</p>
                        <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">{service.category}</p>
                        <p className="w-80">{service.description}</p>
                        <p>Pricing: {service.price}$</p>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Myservices;