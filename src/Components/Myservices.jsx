import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Myservices = () => {
    const services = useLoaderData();
    const { user } = useContext(authContext);
    const [service, setservice] = useState([]);
    const [updateService, setUpdateService] = useState(null)
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const searchedServices = services
            .filter((ser) => ser.email === user?.email)
            .filter((service) => service.title.toLowerCase().includes(query))

        setservice(searchedServices);
    };


    useEffect(() => {
        if (services && user) {
            const userServices = services.filter((ser) => ser.email === user?.email);
            setservice(userServices);
        }
    }, [services, user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const name = form.name.value;
        const website = form.website.value;
        const description = form.description.value;
        const price = form.price.value;
        const updatedService = { image, title, name, website, description, price };



        const valid = validateForm(updatedService);

        if (valid) {
            fetch(`https://servify-server.vercel.app/services/${updateService._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedService),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success("Service updated successfully!");
                        setservice((prevServices) =>
                            prevServices.map((ser) =>
                                ser._id === updateService._id ? { ...ser, ...updatedService } : ser
                            )
                        );
                        closeModal();
                    } else {
                        toast.error("Failed to update the service.");
                    }
                });
        }
    };

    const validateForm = (ser) => {
        let isValid = true;

        if (!ser.image || !ser.image.trim().startsWith("http")) {
            toast.error("Image must be a valid link.");
            isValid = false;
        }

        if (!ser.website || !ser.website.trim().startsWith("http")) {
            toast.error("Website must be a valid link.");
            isValid = false;
        }

        if (!ser.title || ser.title.length < 2) {
            toast.error("Title must be at least 2 characters long.");
            isValid = false;
        }

        if (!ser.price || isNaN(ser.price)) {
            toast.error("Please enter a valid price.");
            isValid = false;
        }


        if (!ser.description || ser.description.length < 10) {
            toast.error("Description must be at least 10 characters long.");
            isValid = false;
        }
        return isValid;

    }

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
                fetch(`https://servify-server.vercel.app/services/${id}`, {
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

    const openModal = (service) => {
        setUpdateService(service);
        document.getElementById("my_modal_1").showModal();
    };

    const closeModal = () => {
        setUpdateService(null);
        document.getElementById("my_modal_1").close();
    };

    return (
        <div className="bg-base-200">
            <Helmet><title>My Services | Servify</title></Helmet>
            <div className="mx-auto ">
                <div className="mx-auto w-[80%] md:flex items-center justify-between pt-6">
                    <h1 className="text-3xl font-bold mb-4 pt-6">My Services</h1>
                    <input type="text" placeholder="Search..." value={search} onChange={handleSearch} className="text-gray-400 w-[300px] border-[2px] p-1 mr-10 rounded-md border-gray-500" />
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid-cols-1 gap-6 grid lg:grid-cols-3 md:grid-cols-2 md:w-[80%] mx-auto py-6">
                        {service.map((service) => <div
                            key={service._id} >
                            <div className="border-[#2C485F] border-[2px] w-fit p-3 rounded-lg bg-white">
                                <img className="w-80 h-48 object-cover" src={service.image} alt="" />
                                <p className="font-bold text-xl">{service.title}</p>
                                <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">{service.category}</p>
                                <p className="w-80">{service.description}</p>
                                <p>Pricing: {service.price}$</p>
                                <div className="flex gap-3">
                                    <button><FaPen onClick={() => openModal(service)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>
                                    <button><FaTrash onClick={() => removeService(service._id)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>


                <dialog id="my_modal_1" className="modal border-[#2C485F] border-[2px] w-[710px] h-fit mx-auto p-3 rounded-lg bg-white" style={{ top: "50%", transform: "translateY(-50%)" }}>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="photo" name="image" placeholder="Service Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Service Title" name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Company Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Website</span>
                            </label>
                            <input type="url" placeholder="website url" name="website" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" placeholder="description" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#2C485F] hover:scale-105 transition duration-300">Update</button>
                        </div>



                    </form>
                    <button onClick={closeModal}>Close</button>
                </dialog>
            </div>

        </div>
    );
};

export default Myservices;