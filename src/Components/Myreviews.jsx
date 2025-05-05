import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import Rating from '@mui/material/Rating';
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Myreviews = () => {
    const reviews = useLoaderData();
    const { user } = useContext(authContext);
    const [review, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [updatereview, setUpdateReview] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        if (reviews && user) {
            const userReviews = reviews.filter((rev) => rev.reviewerEmail === user?.email);
            setReviews(userReviews);
        }
    }, [reviews, user]);

    const handleEdit = (review) => {
        setUpdateReview(review); 
        setRating(review.rating); 
        setIsModalOpen(true);  
    };

    const removeReview = (id) => {
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
                fetch(`https://servify-server.vercel.app/reviews/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success",
                            });
                            setReviews(review.filter((rev) => rev._id !== id));
                        }
                    });
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedReview = form.review.value;
        const updatedRating = rating;

        const isValid = validateForm({ review: updatedReview, rating: updatedRating });

        if (isValid && updatereview) {
            const updatedData = { review: updatedReview, rating: updatedRating };

            fetch(`https://servify-server.vercel.app/reviews/${updatereview._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success("Review updated successfully!");
                        setIsModalOpen(false);
                        setReviews((prevReviews) =>
                            prevReviews.map((rev) => rev._id === updatereview._id ? { ...rev, review: updatedReview, rating: updatedRating } : rev)
                        );
                        

                    }
                });
        }
    };

    const validateForm = (reviewData) => {
        let isValid = true;

        if (!reviewData.review || reviewData.review.length < 4) {
            toast.error("Review must be at least 4 characters long.");
            isValid = false;
        }

        if (!reviewData.rating || reviewData.rating <= 0) {
            toast.error("Please provide a valid rating.");
            isValid = false;
        }

        return isValid;
    };







    return (
        <div className="h-screen">
            <Helmet><title>My Reviews | Servify</title></Helmet>
            <h1 className="font-bold text-3xl mx-auto py-3 lg:mt-10 mt-20 w-[90%] ">My Reviews</h1>
            {review
                .map((review) => (
                    <div className="w-[90%] mx-auto" key={review._id}>
                        <div className="border-[0.2px] border-gray-200 shadow-md rounded-lg p-3 m-3 lg:flex justify-between">
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold">{review.serviceTitle}</p>
                                        <Rating name="rating" value={review.rating} size="medium" readOnly />
                                    </div>
                                </div>
                                <p className="mt-2">{review.review}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link to={`/service-details/${review.serviceId}`} className="text-white bg-[#2C485F] p-2 rounded-lg">View Service</Link>
                                <button><FaPen onClick={() => handleEdit(review)} className="text-white bg-[#2C485F] p-3 rounded-lg size-10" /></button>
                                <button><FaTrash onClick={() => removeReview(review._id)} className="text-white bg-[#2C485F] p-3 rounded-lg size-10" /></button>

                            </div>

                        </div>
                    </div>
                ))}

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-md w-[90%] md:w-[400px] relative">
                        <form className=" p-3 rounded-lg bg-white" onSubmit={handleSubmit}>
                            <div className=" items-center gap-3 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-xl font-bold">Update Review</span>
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
                                <button className="mt-4 border-2 border-[#2C485F] rounded-lg text-white bg-[#2C485F] hover:bg-transparent hover:text-[#2C485F] transition duration-300 py-1 px-3">Update</button>
                                <button className="mt-4 border-2 border-[#2C485F] rounded-lg  text-[#2C485F] py-1 px-3" onClick={() => setIsModalOpen(false)}>Close</button>

                            </div>
                        </form>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Myreviews;

