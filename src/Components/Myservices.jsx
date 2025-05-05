import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { IoLocationOutline } from "react-icons/io5";

const Myservices = () => {
  const services = useLoaderData();
  const { user } = useContext(authContext);
  const [service, setService] = useState([]);
  const [updateService, setUpdateService] = useState(null);
  const [search, setSearch] = useState("");
  const [districts, setDistricts] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const category = [
    "Food", "Pet", "Medical", "Hotels", "Construction", "Home Service",
    "Events & Parties", "Sports", "Travel", "Finance", "Personal Care"
  ];

  // Load district suggestions
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setDistricts);
  }, []);

  // Debounced location suggestion
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.length >= 3) {
        setSuggestions(
          districts.filter(d =>
            d.location.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [input, districts]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Initial user services
  useEffect(() => {
    if (services && user) {
      const userServices = services.filter(
        (ser) => ser.email === user?.email
      );
      setService(userServices);
    }
  }, [services, user]);

  // Search by title
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const searchedServices = services.filter(
      (ser) =>
        ser.email === user?.email &&
        ser.title.toLowerCase().includes(query)
    );
    setService(searchedServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const name = user?.displayName || "Unknown"; // fallback name
    const number = form.number.value;
    const website = form.website.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;

    const updatedService = {
      image, title, name, website, description, price, number, category, location
    };

    if (validateForm(updatedService)) {
      fetch(`https://servify-server.vercel.app/services/${updateService._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedService)
      })
        .then(res => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Service updated successfully!");
            setService(prev =>
              prev.map(ser =>
                ser._id === updateService._id
                  ? { ...ser, ...updatedService }
                  : ser
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
  };

  const removeService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://servify-server.vercel.app/services/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
              setService(prev => prev.filter((ser) => ser._id !== id));
            }
          });
      }
    });
  };

  const openModal = (ser) => {
    setUpdateService(ser);
    setInput(ser.location || "");
    document.getElementById("my_modal_1").showModal();
  };

  const closeModal = () => {
    setUpdateService(null);
    setInput("");
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="bg-base-200 min-h-[400px]">
      <Helmet><title>My Services | Servify</title></Helmet>

      <div className="mx-auto w-[80%]">
        <div className="flex flex-col md:flex-row items-center justify-between pt-6">
          <h1 className="text-3xl font-bold mb-4">My Services</h1>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="text-gray-400 w-[300px] border border-gray-300 p-1 rounded-md shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {service.map((ser) => (
            <div key={ser._id} className="border shadow p-3 rounded-lg bg-white">
              <div className="relative">
                <img src={ser.image} alt="" className="w-full h-[200px] rounded-md object-cover" />
                <p className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
                  {ser.category}
                </p>
              </div>
              <p className="font-bold text-xl mt-2">{ser.title}</p>
              <div className="flex gap-1 items-center text-gray-500 mt-1">
                <IoLocationOutline className="size-5" />
                <p>{ser.location}</p>
              </div>
              <p className="my-2">{ser.description}</p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-lg">Pricing: ${ser.price}</p>
                <div className="flex gap-2">
                  <button><FaPen onClick={() => openModal(ser)} className="text-white bg-[#2C485F] p-2 rounded size-8" /></button>
                  <button><FaTrash onClick={() => removeService(ser._id)} className="text-white bg-[#2C485F] p-2 rounded size-8" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <dialog id="my_modal_1" className="modal border-[#2C485F] border-2 w-[710px] h-fit mx-auto p-3 rounded-lg bg-white" style={{ top: "50%", transform: "translateY(-50%)" }}>
          <form className="card-body" onSubmit={handleSubmit}>
            <input type="url" name="image" placeholder="Image URL" defaultValue={updateService?.image} className="input input-bordered mb-2" required />
            <input type="text" name="title" placeholder="Title" defaultValue={updateService?.title} className="input input-bordered mb-2" required />
            <input type="text" name="number" placeholder="Number" defaultValue={updateService?.number} className="input input-bordered mb-2" required />
            <input type="text" name="location" placeholder="Location" value={input} onChange={handleChange} className="input input-bordered mb-2" required />
            {suggestions.length > 0 && (
              <ul className="border bg-white rounded shadow mb-2">
                {suggestions.map(({ location }, i) => (
                  <li key={i} onClick={() => { setInput(location); setSuggestions([]); }} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {location}
                  </li>
                ))}
              </ul>
            )}
            <input type="url" name="website" placeholder="Website URL" defaultValue={updateService?.website} className="input input-bordered mb-2" required />
            <textarea name="description" placeholder="Description" defaultValue={updateService?.description} className="input input-bordered mb-2" required />
            <select name="category" className="input input-bordered mb-2" defaultValue={updateService?.category} required>
              <option value="">Select Category</option>
              {category.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
            </select>
            <input type="text" name="price" placeholder="Price" defaultValue={updateService?.price} className="input input-bordered mb-2" required />
            <button type="submit" className="btn bg-[#2C485F] text-white">Update</button>
          </form>
          <button onClick={closeModal} className="text-center mt-2 text-blue-600 hover:underline">Close</button>
        </dialog>
      </div>
    </div>
  );
};

export default Myservices;
