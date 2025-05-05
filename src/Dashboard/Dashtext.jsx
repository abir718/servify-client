import { useContext } from "react";
import { authContext } from "../Authprovider";
import { useLoaderData } from "react-router-dom";


const Dashtext = () => {
    const { loadReviews, loadServices } = useLoaderData();
    const { user } = useContext(authContext);

    const userEmail = user?.email;
    const UserReviews = loadReviews?.filter(review => review.reviewerEmail === userEmail) || [];
    const UserServices = loadServices?.filter(service => service.email === userEmail) || []; 

    return (
        <div className="max-w-xl mx-auto mt-20  rounded-lg">
            <h1 className="text-3xl font-bold text-[#052843]">User Profile</h1>
            <div className="bg-white shadow-lg">
                <div className="h-28 bg-[#052843] rounded-tl-lg rounded-tr-lg mt-2"></div>
                <div className="p-3 relative text-center">
                    <div className="">
                        <img src={user?.photoURL} alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-white -mt-14" />
                        <div className="text-left ml-6">
                            <h2 className="text-2xl font-bold mt-2">{user?.displayName || "User Name"}</h2>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-semibold">User Contributions</h3>
                        <p className="text-gray-700">Total Service Created: {UserServices.length} | Total Review Posted: {UserReviews.length}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashtext;
