import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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

    useEffect(() => {
        if (reviews && user) {
            const userReviews = reviews.filter((rev) => rev.reviewerEmail === user?.email);
            setReviews(userReviews);
        }
    }, [reviews, user]);

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
                        setReviews((prevReviews) =>
                            prevReviews.map((rev) =>
                                rev._id === updatereview._id ? { ...rev, review: updatedReview, rating: updatedRating } : rev
                            )
                        );
                        closeModal();
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

    const openModal = (review) => {
        setUpdateReview(review);
        setRating(0);
        document.getElementById("my_modal_1").showModal();
    };

    const closeModal = () => {
        setUpdateReview(null);
        setRating(0);
        document.getElementById("my_modal_1").close();
    };



    return (
        <div className="bg-base-200 py-10">
            <Helmet><title>My Reviews | Servify</title></Helmet> 
            <h1 className="font-bold text-3xl mx-auto ml-10">My Reviews</h1>
            {review
                .map((review) => (
                    <div key={review._id}>
                        <div className="border-[2px] border-gray-400 rounded-lg p-3 m-3 bg-white w-[70%] mx-auto md:flex justify-between">
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold">{review.serviceTitle}</p>
                                        <Rating name="rating" value={review.rating} size="medium" readOnly />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <p className="mt-2">{review.review}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button><FaPen onClick={() => openModal(review)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>
                                <button><FaTrash onClick={() => removeReview(review._id)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg" /></button>

                            </div>

                        </div>
                    </div>
                ))}
            <dialog id="my_modal_1" className="modal border-[#2C485F] border-[2px] w-[710px] h-fit mx-auto p-3 rounded-lg bg-white" style={{ top: "50%", transform: "translateY(-50%)" }}>
                <form className="" onSubmit={handleSubmit}>
                    <div className='flex items-center gap-20'>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-bold">Update Review</span>
                            </label>
                            <textarea type="text" name="review" placeholder="review" className="input border-gray-500 input-bordered w-[400px]" required />
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

                    <button className="py-2 rounded-lg text-white bg-[#2C485F] hover:scale-105 transition duration-300 mt-4 px-2">Update</button>

                </form>
                <button onClick={closeModal}>Close</button>
            </dialog>


        </div>
    );
};

export default Myreviews;

