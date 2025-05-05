import toast from "react-hot-toast";
import { authContext } from "../Authprovider";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Addservice = () => {

    const [districts, setDistricts] = useState([]);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(setDistricts)
    }, []);

    const handleChange = ({ target: { value } }) => {
        setInput(value);
        setSuggestions(
            value.length >= 3
                ? districts.filter(d => d.location.toLowerCase().includes(value.toLowerCase()))
                : []
        );
    };

    const { user } = useContext(authContext);
    const email = user?.email;
    const icon = user?.photoURL;
    const name = user?.displayName;

    const now = new Date();
    const timeser = `${now.getDate()}/${now.getMonth() + 1}`;


    const category = ["Food", "Pet", "Medical", "Hotels", "Construction", "Home Service", "Events & Parties", "Sports", "Travel", "Finance" , "Personal Care" , "Construction"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const number = form.number.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const newService = { image, title, number, website, description, category, price, timeser , location }
        const service = { email,name,icon, ...newService }

        const valid = validateForm(newService)

        if (valid) {

            fetch('https://servify-server.vercel.app/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success("Service added successfully!")
                        form.reset()
                    }
                    else {
                        toast.error("Something went wrong")
                    }

                })

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

        if (!ser.number || isNaN(ser.number)) {
            toast.error("Please enter a valid number.");
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

    return (
        <div>
            <Helmet><title>Add Service | Servify</title></Helmet>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
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
                                <span className="label-text">Number</span>
                            </label>
                            <input type="text" placeholder="number" name="number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={input}
                                onChange={handleChange}
                                className="input input-bordered"
                                placeholder="location" 
                                required
                            />
                            {suggestions.length > 0 && (
                                <ul className="mt-2 border bg-white rounded shadow z-10 relative">
                                    {suggestions.map(({ location }, i) => (
                                        <li
                                            key={i}
                                            onClick={() => {
                                                setInput(location);
                                                setSuggestions([]);
                                            }}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {location}
                                        </li>
                                    ))}
                                </ul>
                            )}
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
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="input input-bordered" required>
                                <option value="">Select Category</option>
                                {category.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pricing</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#2C485F] ">Add Service</button>
                        </div>



                    </form>



                </div>
            </div>
        </div>
    );
};

export default Addservice;