

import toast from "react-hot-toast";


const addservice = () => {

    const category = ["Food", "Appliances", "Pet", "Medical", "Construction"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const name = form.name.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const newService = {image , title , name , website , description , category , price}
        console.log(newService)

        const valid = validateForm(newService)

        if (valid) {

            fetch('http://localhost:5000/addservice' , {
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(newService)
          })
          .then(res => res.json())
          .then(data =>{
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

    const validateForm = (service) => {
        let isValid = true;
      
        if (!service.image || !service.image.trim().startsWith("http")) {
          toast.error("Image must be a valid link.");
          isValid = false;
        }

        if (!service.website || !service.website.trim().startsWith("http")) {
            toast.error("Website must be a valid link.");
            isValid = false;
          }
      
        if (!service.title || service.title.length < 2) {
          toast.error("Title must be at least 2 characters long.");
          isValid = false;
        }
      
        if (!service.price || isNaN(service.price)) {
            toast.error("Please enter a valid price.");
            isValid = false;
          }
          
      
        if (!service.description || service.description.length < 10) {
          toast.error("Description must be at least 10 characters long.");
          isValid = false;
        }
        return isValid;

    }

    return (
        <div>
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
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#2C485F] hover:scale-105 transition duration-300">Add Service</button>
                        </div>



                    </form>



                </div>
            </div>
        </div>
    );
};

export default addservice;