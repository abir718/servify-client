import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {

    const loadServices = useLoaderData();
    const [services, setServices] = useState(loadServices);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const category = ["Food", "Pet", "Medical", "Hotels", "Construction", "Home Service", "Events & Parties", "Sports", "Travel", "Finance"];


    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const searchedServices = loadServices.filter((service) => service.title.toLowerCase().includes(query));
        setServices(searchedServices);
    };

    const handleFilter = (e) => {
        const category = e.target.value;
        setFilter(category);

        const filteredServices = loadServices.filter((service) => (category ? service.category === category : true) && service.title.toLowerCase().includes(search));
        setServices(filteredServices);
    };

    return (
        <div className="">
            <div className="w-[80%] mx-auto md:flex items-center justify-between pt-6">
                <h1 className="text-3xl font-bold ">All Services</h1>
                <div>
                    <input type="text" placeholder="Search..." value={search} onChange={handleSearch} className="text-gray-400 w-[300px] border-[2px] p-1 mr-10 rounded-md border-gray-500" />
                    <select name="category" onChange={handleFilter} className="py-1 border-[2px] border-[#2C485F]" required>
                        <option value="">Filter</option>
                        {category.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <Helmet><title> Services | Servify</title></Helmet>
            <div className="flex items-center justify-center">
                <div className="grid-cols-1 gap-6 grid lg:grid-cols-3 md:grid-cols-2 py-6 lg:w-fit w-[90%]">
                    {services.map((service) => (
                        <div key={service._id}>
                            <div className="border-[1px] p-3 rounded-lg drop-shadow-md bg-white ">
                                <div className="overflow-hidden">
                                    <img src={service.image} alt="" className="w-[420px] h-[240px] rounded-md object-cover transition duration-300 hover:scale-110" />
                                </div>
                                
                                <div className="p-2 rounded-b-lg">
                                    <p className="text-xl font-medium hover:text-[#2C485F] cursor-pointer">{service.title}</p>
                                    <p className="text-lg mt-1">{service.description}</p>
                                    <div className="flex items-center justify-between pt-2">
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

export default Services;