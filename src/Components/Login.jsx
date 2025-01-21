import { NavLink} from "react-router-dom";

const Login = () => {

    let handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
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
                        <div className="form-control mt-4">
                            <button className="py-3 rounded-lg hover:scale-105 transition duration-300 text-[#2C485F] border-[#2C485F] border-[2px]">Continue With Google</button>
                        </div>
                        <div className="form-control">
                            <button className="py-3 rounded-lg hover:scale-105 transition duration-300 bg-[#2C485F] border-[#2C485F] border-[2px] text-white">Login</button>
                        </div>
                    </form>
                    <p className="pl-4 pb-2">Dont have an Account? <span className="underline"><NavLink to='/register'>Register</NavLink></span></p>
                </div>

            </div>
        </div>
    );
};

export default Login;