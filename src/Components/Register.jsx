
import { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()

    let {newUser , setUser , changeProfile } = useContext(authContext)
    let [errorp , setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
    
        setError('');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
        if (!passwordRegex.test(password)) {
            setError(
                <div>
                    <p>Password must contain:</p>
                    <ul>
                        <li>One capital letter</li>
                        <li>One small letter</li>
                        <li>At least 6 characters</li>
                    </ul>
                </div>
            );
            return;
        }
    
        newUser(email, password)
            .then((result) => {
                const user = result.user;
                const userData = {
                    email: user.email,
                    displayName: name,
                    photoURL: photo,
                    role: "user",
                };
                changeProfile({ displayName: name, photoURL: photo }).then(() => {
                    setUser(user);
                    fetch("https://servify-server.vercel.app/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userData),
                    })
                    toast.success('Registration successful');
                    navigate("/");
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

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
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className=" py-3 rounded-lg bg-[#2C485F] text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className="pl-4 pb-2">Already have an Account? <span className="underline"><NavLink to='/login'>Login</NavLink></span></p>
                    
                    {
                        errorp && <div>
                            <div className="text-red-600 pl-4 pb-2">{errorp}</div>
                        </div>
                    }
                  
                
                </div>
            </div>
        </div>
    );
};

export default Register;