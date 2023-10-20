import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../public/ContentAPI/AuthContext";


const SignUp = () => {
    const [error,setError]=useState(null);
    const {createUser, setUsers}=useContext(AuthContext)
    
    // const navigate = useNavigate();
    // const { createUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.checkbox.checked;
        // console.log(name, email,password);
        // reset the error and success message
      
        // password validation
        if (password.length < 6) {
            setError('Password should be 6 charecters or longer');
            return;
        }
        else if ((!/[A-Z]/.test(password))) {
            setError('Use at least one upper letter');
            return;
        }
        else if (!terms) {
            setError('Acccept our terms and conditions');
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setError("You must use a spacial cherecter");
            return;
        }

       createUser(email,password)
       .then(result=>{
        console.log(result.user);
        setUsers(true)
       })
       .catch(error=>{
        console.log(error);
       })
        // console.log(name,Reg_email,Reg_password,terms);
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-10">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Register</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name..." className="input input-bordered" required />
                        </div>
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
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="checkbox" id="" />
                                <p>Accept our terms and condition</p>
                            </div>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-secondary">SignUp</button>
                        </div>
                        <div>
                            <p>Already have an account? please <Link className="text-blue-800 font-bold text-lg" to={'/signin'}>SignIn</Link></p>
                        </div>
                        <div className="text-center">
                            {/* {
                                newUser && <p className="text-lg font-semibold text-green-700">{newUser}</p>
                            } */}
                            {
                                error && <p className="text-lg font-semibold text-red-700">{error}</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;