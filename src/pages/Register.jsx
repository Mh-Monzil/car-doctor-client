import { useContext } from "react";
import loginImage from "../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

      createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
    }
  return (
    <div className="my-6">
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={loginImage} alt="" />
        </div>
        <div className="card shrink-0 w-full border lg:w-1/2 h-fit">
          <form onSubmit={handleSubmit} className="p-16 w-full">
            <h3 className="text-center text-4xl font-semibold pb-12">Register</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <input
              name="name"
                type="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Password
                </span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-primary text-white hover:bg-transparent hover:text-primary">
                Register
              </button>
            </div>
            <div className="w-full flex flex-col items-center pt-4">
              
              <p>Have an account? <Link to='/login' className="text-primary font-bold">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
