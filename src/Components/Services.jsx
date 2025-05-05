import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Services = () => {
    const { category } = useParams();

    const data = useLoaderData();
    const [searchTerm, setSearch] = useState("");

    const spaceRemoval = str => str.toLowerCase().trim().replace(/\s+/g, "-");

    const filteredServices = data.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "all" ||!category ||spaceRemoval(service.category) === category.toLowerCase()));

    return (
        <div className=" bg-gray-50">
            <Helmet><title> Services | Servify</title></Helmet>
            <div className="w-[80%] mx-auto pt-6">
                <div className="lg:flex items-center justify-between mt-3 mb-6">
                    <h1 className="text-3xl font-bold ">All Services</h1>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearch(e.target.value)} className="text-gray-400 w-[300px] border-[0.5px] border-gray-300  p-1 mr-10 rounded-md " />
                </div>

                <div className="flex flex-wrap gap-2">
                    <NavLink to="/services/all" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>All</NavLink>
                    <NavLink to="/services/mechanic" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Mechanic</NavLink>
                    <NavLink to="/services/medical" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Medical</NavLink>
                    <NavLink to="/services/personal-care" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Personal Care</NavLink>
                    <NavLink to="/services/pet" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Pet</NavLink>
                    <NavLink to="/services/restaurant" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Restaurants</NavLink>
                    <NavLink to="/services/sports" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Sports</NavLink>
                    <NavLink to="/services/construction" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Constructions</NavLink>
                    <NavLink to="/services/events" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Events</NavLink>
                    <NavLink to="/services/finance" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Finance</NavLink>
                    <NavLink to="/services/home-service" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Home Service</NavLink>
                    <NavLink to="/services/hotels" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Hotels</NavLink>
                    <NavLink to="/services/travel" className={({ isActive }) => `px-4 py-1 w-fit flex items-center justify-center rounded-full font-medium ${isActive ? 'text-white bg-[#052843] border-2 border-[#052843]' : 'text-[#052843] border-2 border-[#052843]'}`}>Travel</NavLink>
                </div>

            </div>


            <div className="flex items-center justify-center w-[80%] mx-auto">
                <div className="grid-cols-1 gap-6 grid lg:grid-cols-4 md:grid-cols-2 py-6">
                    {filteredServices.map((service) => (
                        <div key={service._id}>
                            <div className="border-[1px] p-3 rounded-lg drop-shadow-md bg-white w-fit">
                                <div className="relative ">
                                    <img src={service.image} alt="" className="w-[340px] h-[200px] rounded-md object-cover" />
                                    <p className="absolute top-2 left-2 bg-white p-1 px-2 rounded-lg  font-medium">{service.category}</p>
                                    <FaRegHeart className="absolute top-2 right-2 bg-white p-1 rounded-full size-7 cursor-pointer" />
                                </div>

                                <div className="p-2 rounded-b-lg">
                                    <p className="text-xl font-medium hover:text-[#052843] cursor-pointer">{service.title}</p>
                                    <div className="flex gap-1 items-center text-gray-500 mt-1">
                                    <IoLocationOutline className="size-5"/>
                                    <p className="text-lg ">{service?.location ? service.location : "N/A"}</p>
                                    </div> 
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-lg font-medium">Pricing: {service.price}$</p>
                                        <Link to={`/service-details/${service._id}`} ><button className="text-[#052843] bg-[rgba(44,72,95,0.2)] hover:text-white hover:bg-[#052843] rounded-md p-2 transition duration-300">Details</button></Link>
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

export default Services;