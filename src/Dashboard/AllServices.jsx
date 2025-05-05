import { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AllServices() {

    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://servify-server.vercel.app/admin-services", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (res.status === 403) {

                    navigate("/dashboard");
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    setServices(data);
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, [navigate]);

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
                  setServices(prev => prev.filter((ser) => ser._id !== id));
                }
              });
          }
        });
      };

    return (
        <div>
            <h1 className='text-3xl font-bold lg:mt-10 mt-20 ml-6'>All Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 w-[90%] mx-auto">
                {services.map((ser) => (
                    <div key={ser._id} className="border-[1px] border-gray-200 p-3 rounded-lg shadow-md bg-whitee">
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
                            <div className="">
                                <button><FaTrash onClick={() => removeService(ser._id)} className="text-white bg-[#2C485F] p-2 rounded size-8" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllServices