import Rating from '@mui/material/Rating';
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from '../Authprovider';
import { Helmet } from 'react-helmet';

const Details = () => {

    const { loadServices, loadReviews } = useLoaderData();
    const [rating, setRating] = useState(0)
    const [reviews, setReviews] = useState(loadReviews);
    const { user } = useContext(authContext);
    const reviewerName = user?.displayName;
    const reviewerPic = user?.photoURL;
    const reviewerEmail = user?.email;
    const serviceTitle = loadServices.title
    const navigate = useNavigate();
    const serviceId = loadServices._id

    const now = new Date();
    const timeser = `${now.getDate()}/${now.getMonth() + 1}`;


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!user?.email) {
            toast.error("You need to log in to add a review!");
            navigate('/login');
            return
        }

        const form = e.target;
        const review = form.review.value;
        const rating = parseInt(form.rating.value) || 0;
        const newReview = { review, rating };

        const addReview = { ...newReview, reviewerName, reviewerPic, serviceId, reviewerEmail, serviceTitle, timeser }
        const isValid = validateForm(newReview)


        if (isValid) {

            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addReview)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setReviews([{ ...addReview, _id: data.insertedId }, ...reviews]);
                        toast.success("Review added successfully!")

                    }

                })
            setRating(0)
            form.reset()
        }


    }
    const validateForm = (reviewData) => {
        let isValid = true;

        if (!reviewData.review || reviewData.review.length < 4) {
            toast.error("review must be at least 4 characters long.");
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
            <Helmet><title>Details | Servify</title></Helmet>
            <div className="mx-auto w-[80%] flex-col flex items-center gap-4 justify-center py-10">
                <div className="border-[#2C485F] border-[2px] w-fit p-3 rounded-lg bg-white md:flex items-center gap-10">
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
                <form className=" border-[#2C485F] border-[2px] md:w-[710px] p-3 w-full rounded-lg bg-white " onSubmit={handleSubmit}>
                    <div className='md:flex items-center gap-20'>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">Add a Review</span>
                            </label>
                            <textarea type="text" name="review" placeholder="review" className="input  border-gray-500 input-bordered md:w-[400px]" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <div>
                                <Rating name="rating" value={rating} size="large" onChange={(event, newValue) => setRating(newValue)} />
                            </div>
                        </div>
                    </div>

                    <button className="py-2 rounded-lg text-white bg-[#2C485F] hover:scale-105 transition duration-300 mt-4 px-2">Add Review</button>

                </form>
                <div className=" border-[#2C485F] border-[2px] md:w-[710px] w-full p-3 rounded-lg bg-white ">
                    <div className="flex items-center justify-between">
                        <p className='font-bold text-2xl'>All Reviews</p>
                        <p className="text-lg text-gray-600">{reviews.filter(review => review.serviceId === loadServices._id).length} reviews</p>
                    </div>

                    {reviews
                        .filter((review) => review.serviceId === loadServices._id)
                        .map((review) => (
                            <div key={review._id}>
                                <div className="border-[2px] border-gray-400 rounded-lg p-3 m-3">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="rounded-lg w-10" src={review.reviewerPic} alt="" />
                                            <p className="font-bold">{review.reviewerName}</p>
                                            <p>{review.timeser}</p>
                                        </div>
                                        <div>
                                            <Rating name="rating" value={review.rating} size="medium" readOnly />
                                        </div>
                                    </div>
                                    <p className="mt-2">{review.review}</p>
                                </div>
                            </div>
                        ))}


                </div>
            </div>

        </div>
    );
};

export default Details;