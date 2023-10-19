import { Link } from "react-router-dom";


const SignIn = () => {
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const Email=e.target.email.value;
        const Password=e.target.password.value;
        console.log(Email , Password);
        // signIn(Email,Password)
        // .then(result=>{
        //     setSuccess('Login Successfully');
        //     navigate(location?.state? location.state :"/")
        // })
        // .catch(error=>{
        //     setError(error.message);
        // })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Login </h1>

                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* <div className="mt-5 text-center bg-slate-200 mx-5 p-2 rounded-lg flex items-center justify-center hover:bg-pink-300">
                        <FaGoogle className="text-blue-600 text-2xl"></FaGoogle>
                        <h1 className="text-lg font-bold ml-3">Sign in With Google</h1>

                    </div> */}

                    <form className="card-body " onSubmit={handleSubmit} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <div>
                            <p>Are you new here? please <Link className="text-blue-800 font-bold text-lg" to={'/signup'}>SignUp</Link></p>
                        </div>
                        <div className="text-center">
                            {/* {
                                success && <p className="text-lg font-semibold text-green-700">{success}</p>
                            }
                            {
                                error && <p className="text-lg font-semibold text-red-700">{error}</p>
                            } */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignIn;