import Rating from "@mui/material/Rating";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import { Helmet } from "react-helmet";

const Details = () => {
    const { loadService, loadReviews, loadServices } = useLoaderData();
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState(loadReviews);
    const { user } = useContext(authContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const reviewerName = user?.displayName;
    const reviewerPic = user?.photoURL;
    const reviewerEmail = user?.email;
    const serviceTitle = loadService.title;
    const navigate = useNavigate();
    const serviceId = loadService._id;

    const now = new Date();
    const timeser = `${now.getDate()}/${now.getMonth() + 1}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user?.email) {
            toast.error("You need to log in to add a review!");
            navigate("/login");
            return;
        }

        const form = e.target;
        const review = form.review.value;
        const rating = parseInt(form.rating.value) || 0;
        const newReview = { review, rating };

        const addReview = {
            ...newReview,
            reviewerName,
            reviewerPic,
            serviceId,
            reviewerEmail,
            serviceTitle,
            timeser,
        };
        const isValid = validateForm(newReview);

        if (isValid) {
            fetch("https://servify-server.vercel.app/reviews", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(addReview),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setReviews([{ ...addReview, _id: data.insertedId }, ...reviews]);
                        toast.success("Review added successfully!");
                        setIsModalOpen(false);
                    }
                });

            setRating(0);
            form.reset();
        }
    };

    const validateForm = (reviewData) => {
        let isValid = true;

        if (!reviewData.review || reviewData.review.length < 4) {
            toast.error("Review must be at least 4 characters long.");
            isValid = false;
        }

        if (!reviewData.rating || reviewData.rating < 0) {
            toast.error("Please provide a rating.");
            isValid = false;
        }

        return isValid;
    };

    return (
        <div>
            <Helmet>
                <title>Details | Servify</title>
            </Helmet>
            <div className="mx-auto md:w-[80%] gap-10 py-10 flex lg:flex-row flex-col justify-around">
                <div>
                    <div className="w-fit p-3 rounded-lg bg-white md:flex items-center gap-4">
                        <div>
                            <img className="w-96 h-60 object-cover" src={loadService.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-3xl text-[#2C485F]">{loadService.title}</p>
                            <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">
                                {loadService.category}
                            </p>
                            <p className="w-80">{loadService.description}</p>
                            <p>Pricing: {loadService.price}$</p>
                            <button
                                className="bg-[#2C485F] rounded-lg p-2 w-fit text-white align-middle"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Review
                            </button>
                        </div>
                    </div>
                    <div className=" p-3 rounded-lg bg-white">
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-2xl text-[#2C485F]">All Reviews</p>
                            <p className="text-lg text-gray-600">{reviews.filter((review) => review.serviceId === loadService._id).length} reviews</p>
                        </div>

                        {reviews
                            .filter((review) => review.serviceId === loadService._id)
                            .map((review) => (
                                <div key={review._id} className="border-[2px] border-gray-400 rounded-lg p-3 m-3">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="rounded-lg w-12" src={review.reviewerPic} alt="" />
                                            <div className="">
                                                <p className="font-bold">{review.reviewerName}</p>
                                                <Rating name="rating" value={review.rating} size="medium" readOnly />
                                            </div>


                                        </div>
                                        <p >{review.timeser}/25</p>
                                    </div>
                                    <p className="mt-2">{review.review}</p>
                                </div>
                            ))}
                    </div>
                </div>

                <div>
                    <p className="font-bold text-3xl text-[#2C485F]">Recommended Services</p>
                    <div className="flex flex-col items-center">
                        <div>
                            {loadServices.slice(0, 6).map((service) => (
                                <div key={service._id} className="hover:drop-shadow-md">
                                    <div className="border-[1px] bg-white border-[#2C485F] w-[350px] md:w-[700px] md:flex gap-4 p-3 rounded-xl my-4 ">
                                        <img className="w-fit md:w-64 rounded-lg" src={service.image} alt="" />
                                        <div>
                                            <p className="text-lg font-medium">{service.title}</p>
                                            <p className="text-gray-500 border-[2px] py-1 px-2 rounded-full w-fit">
                                                {loadService.category}
                                            </p>
                                            <p>Pricing: {service.price}$</p>
                                            <Link to={`/services/${service._id}`} ><button className="text-white bg-[#2C485F] rounded-lg py-1 px-2">See Details</button></Link>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-md w-[90%] md:w-[400px] relative">
                        <form className=" p-3 rounded-lg bg-white" onSubmit={handleSubmit}>
                            <div className=" items-center gap-3 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl font-bold">Add a Review</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        name="review"
                                        placeholder="Write your review..."
                                        className="border border-gray-400 rounded-md p-2"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-bold">Ratings</span>
                                    </label>
                                    <Rating name="rating" value={rating} size="large" onChange={(event, newValue) => setRating(newValue)} />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button className="mt-4 border-2 border-[#2C485F] rounded-lg text-white bg-[#2C485F] hover:bg-transparent hover:text-[#2C485F] transition duration-300 py-1 px-3">Post</button>
                                <button className="mt-4 border-2 border-[#2C485F] rounded-lg  text-[#2C485F] py-1 px-3" onClick={() => setIsModalOpen(false)}>Close</button>

                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Details;
