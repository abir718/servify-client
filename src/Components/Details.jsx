import Rating from '@mui/material/Rating';
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";
import { authContext } from '../Authprovider';

const Details = () => {

    const loadServices = useLoaderData();
    const [rating, setRating] = useState(0)
    const { user } = useContext(authContext);
    const reviewerName = user?.displayName;
    const reviewerPic = user?.photoURL;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        const rating = parseInt(form.rating.value) || 0;
        const newReview = {review , rating};
        const addReview = {...newReview , reviewerName , reviewerPic }
        const isValid = validateForm(newReview)


        if (isValid) {

          fetch('http://localhost:5000/reviews' , {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
              toast.success("Review added successfully!")

            }
  
        })
        setRating(0)
        form.reset()
        }


    }
    const validateForm = (reviewData) => {
        let isValid = true;
      
        if (!reviewData.review || reviewData.review.length < 2) {
          toast.error("Title must be at least 2 characters long.");
          isValid = false;
        }
      
        if (!reviewData.rating || reviewData.rating < 0) {
          toast.error("Please provide a rating.");
          isValid = false;
        }

        return isValid;
      };

    return (
        <div className="bg-base-200">
            <div className="mx-auto w-[80%] flex-col flex items-center justify-center py-10">
                <div className="border-[#2C485F] border-[2px] w-fit p-3 rounded-lg bg-white flex items-center gap-10">
                    <div>
                        <img className="w-80 h-48 object-cover" src={loadServices.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl">{loadServices.title}</p>
                        <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">{loadServices.category}</p>
                        <p className="w-80">{loadServices.description}</p>
                        <p>Pricing: {loadServices.price}$</p>
                    </div>



                </div>
                <form className=" border-[#2C485F] border-[2px] w-[710px] p-3 rounded-lg bg-white " onSubmit={handleSubmit}>
                    <div className='flex items-center gap-20'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-bold">Add a Review</span>
                        </label>
                        <textarea type="text" name="review" placeholder="review" className="input border-gray-500 input-bordered w-[400px]" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <div>
                            <Rating name="rating" value={rating} size="large" onChange={(event, newValue) => setRating(newValue)}/>
                        </div>
                    </div>
                    </div>

                    <button className="py-2 rounded-lg text-white bg-[#2C485F] hover:scale-105 transition duration-300 mt-4 px-2">Add Review</button>

                </form>
            </div>

        </div>
    );
};

export default Details;