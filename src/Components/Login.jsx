import { useContext} from "react";
import { NavLink, useLocation, useNavigate} from "react-router-dom";
import { authContext } from "../Authprovider";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate()
    let {login , setUser} = useContext(authContext)
    let location = useLocation()

    let handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        login(email , password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            toast.success('login successful')
            navigate(location?.state ? location.state : "/")
          })
          .catch((error) => {
            const errorMessage = error.message;
            const errorText =errorMessage.includes("auth/invalid-credential")
                ? "Invalid Email or Password. Please try again with correct information."
                : "Something went wrong. Please try again.";         
            toast.error(errorText);
          });
         
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-14">
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                
                        <div className="form-control">
                            <button className="py-3 rounded-lg bg-[#2C485F] border-[#2C485F] border-[2px] text-white">Login</button>
                        </div>

                    </form>

                    <p className="pl-4 pb-2">Dont have an Account? <span className="underline"><NavLink to='/register'>Register</NavLink></span></p>
                </div>

            </div>
        </div>
    );
};

export default Login;