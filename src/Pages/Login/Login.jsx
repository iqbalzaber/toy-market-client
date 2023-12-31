import  { useContext } from "react";
import img from '../../assets/Signup1.png'
// import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  // const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email,password)
    .then(users=> {
        const loggedUser = users.user;
        console.log(loggedUser);
        navigate(from, { replace: true })
    })
    .catch(error=>{
        console.log(error.message);
    })


  };
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
            <img className='rounded-3xl' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                <form  onSubmit={handleLogin} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='my-4 text-center'>New to Toy-market <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                {/* <SocialLogin></SocialLogin> */}
            </div>
        </div>
    </div>
</div>
  );
};

export default Login;
