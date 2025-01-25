import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Authprovider";
import Rating from '@mui/material/Rating';
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const Myreviews = () => {

    const reviews = useLoaderData()
    const { user } = useContext(authContext);
    const [review , setReviews] = useState([])
    useEffect(() => {
        if (reviews && user) {
          const userReviews = reviews.filter((rev) => rev.reviewerEmail === user?.email)
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
            fetch(`http://localhost:5000/reviews/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data); 
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your review has been deleted.",
                    icon: "success",
                  });
                  setReviews(review.filter((rev) => rev._id !== id));
                } 
              })
              
          }
        });
      };

    return (
        <div className="bg-base-200 py-10">
            <h1 className="font-bold text-3xl mx-auto ml-10">My Reviews</h1>
            {review
                .map((review) => (
                    <div key={review._id}>
                        <div className="border-[2px] border-gray-400 rounded-lg p-3 m-3 bg-white w-[70%] mx-auto flex justify-between">
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
                            <button><FaPen size="32" className="text-white bg-[#2C485F] p-2 rounded-lg"/></button>
                            <button><FaTrash onClick={()=> removeReview(review._id)} size="32" className="text-white bg-[#2C485F] p-2 rounded-lg"/></button>
                            
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Myreviews;