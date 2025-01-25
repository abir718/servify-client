import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

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

    const removeService = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/services/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success",
                            });
                            setservice(service.filter((ser) => ser._id !== id));
                        }
                    });
            }
        });
    };

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
                        <div className="flex gap-3">
                            <button><FaPen size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>
                            <button><FaTrash onClick={() => removeService(service._id)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Myservices;