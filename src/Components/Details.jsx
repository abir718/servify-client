import Rating from "@mui/material/Rating";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import { Helmet } from "react-helmet";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

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

    const route = loadService.category.toLowerCase().trim().replace(/\s+/g, "-")

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
        <div className="mx-auto md:w-[80%] gap-10 py-10 ">
            <Helmet>
                <title>Details | Servify</title>
            </Helmet>
            <div className="flex gap-2">
                <div >
                    <div className="bg-white shadow-xl p-6 rounded-lg border-gray-200 border-[0.1px]">
                        <div className="flex items-center justify-between px-2">
                            <p className="font-bold text-3xl text-[#052843]">{loadService.title}</p>
                            <p className=" w-fit rounded-md text-white bg-[#052843] py-1 px-2">{loadService.category}</p>
                        </div>

                        <div className="flex gap-6 items-center my-1.5">
                            <div className="flex gap-1 items-center text-gray-500">
                                <IoLocationOutline className="size-5" />
                                <p className="text-lg ">{loadService.location}</p>
                            </div>
                            <div className="flex gap-1 items-center text-gray-500 hover:text-[#052843] transition duration-300 cursor-pointer">
                                <IoIosLink className="size-5" />
                                <Link to={loadService.website} className="text-lg ">Check Website</Link>
                            </div>
                            <div className="flex gap-1 items-center text-gray-500 hover:text-[#e654c1] transition duration-300 cursor-pointer">
                                <FaRegHeart className="size-5" />
                                <p>Add to Wishlist </p>
                            </div>
                        </div>
                        <img className="" src={loadService.image} alt="" />
                        <div>
                            <h1 className="text-2xl font-medium text-[#052843] mt-4">Service Overview</h1>
                            <p className="text-lg">{loadService.description}</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-xl p-6 rounded-lg border-gray-200 border-[0.1px] mt-2">
                        <div className="flex items-center justify-between px-2">
                            <h1 className="text-2xl font-medium text-[#052843] mt-4">Reviews ({reviews.filter((review) => review.serviceId === loadService._id).length})</h1>
                            <button className="bg-[#052843] rounded-lg p-2 w-fit text-white align-middle" onClick={() => setIsModalOpen(true)}>Add a Review</button>
                        </div>
                        <div className="">
                            {reviews.filter((review) => review.serviceId === loadService._id).map((review) => (
                                <div key={review._id} className="border-[0.2px] border-gray-200 shadow-md rounded-lg p-3 m-3">
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <img className="rounded-lg w-12" src={review.reviewerPic} alt="" />
                                            <div className="">
                                                <p className="font-bold">{review.reviewerName}</p>
                                                <p className="text-gray-500" >Posted on {review.timeser}/25</p>
                                            </div>
                                        </div>
                                        <Rating name="rating" value={review.rating} size="medium" readOnly />
                                    </div>
                                    <p className="mt-2">{review.review}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-white shadow-xl p-6 rounded-lg border-gray-200 border-[0.1px] h-fit">
                    <div className="bg-white shadow-md p-6 rounded-lg border-gray-200 border-[0.1px] w-[350px]">
                        <p className="text-gray-500">Starts from</p>
                        <h1 className="text-3xl font-bold">{loadService.price}$</h1>
                        <button className="bg-[#052843] text-white text-lg w-full py-2 rounded-md mt-2">Book Service</button>
                        <Link to={`/services/${route}`}><button className="border-[2px] border-gray-200 text-gray-700 text-lg w-full py-2 rounded-md mt-2 hover:bg-gray-200 transition duration-300">View Similar Services</button></Link>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg border-gray-200 border-[0.1px]">
                        <h1 className="text-2xl font-medium text-[#052843]">Service Provider</h1>
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-3">
                            <img className="w-20 rounded-full" src={loadService.icon} alt="" />
                            <p className="text-xl font-medium">{loadService.name}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="flex items-center gap-1"><IoLocationOutline /> Address</p>
                            <p className="text-gray-500">{loadService.location}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="flex items-center gap-1"><IoMailOutline /> Email</p>
                            <p className="text-gray-500">{loadService.email}</p>
                        </div >
                        <div className="flex justify-between mt-2">
                            <p className="flex items-center gap-1"><MdOutlineLocalPhone /> Phone</p>
                            <p className="text-gray-500">{loadService.number}</p>
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
                                <button className="mt-4 border-2 border-[#052843] rounded-lg text-white bg-[#052843] py-1 px-3">Post</button>
                                <button className="mt-4 border-2 border-[#052843] rounded-lg  text-[#052843] py-1 px-3" onClick={() => setIsModalOpen(false)}>Close</button>

                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Details;