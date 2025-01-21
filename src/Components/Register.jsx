
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp}  from "react-icons/io5";
import { NavLink } from "react-router-dom";


const Register = () => {

    let [btn , setBtn] = useState(true)

    let btnState = () => {
        setBtn(!btn)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        let photo = e.target.photo.value



    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-14">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="photo" placeholder="photo" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={btn ? "password" : ""} placeholder="password" name="password" className="input input-bordered" required />
                            <button onClick={btnState} className="absolute top-12 left-72 mr-14 rounded-lg hover:bg-gray-200 p-2 ">
                                {btn ? <FaRegEyeSlash></FaRegEyeSlash> : <IoEyeSharp></IoEyeSharp>}
                                
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className=" py-3 rounded-lg hover:scale-105 transition duration-300 bg-[#2C485F] text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className="pl-4 pb-2">Already have an Account? <span className="underline"><NavLink to='/login'>Login</NavLink></span></p>

                  
                
                </div>
            </div>
        </div>
    );
};

export default Register;