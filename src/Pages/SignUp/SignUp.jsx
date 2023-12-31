import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { createContext, useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  //step 6 call create user form authprovider
  const { createUser } = useContext(authContext);

  const signUpHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    //step7 set createUser with parameter(email password)
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-3/4 lg:w-1/2 mr-5 text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className=" card flex-shrink-0 w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-4 font-bold">SignUP now!</h1>

          <form onSubmit={signUpHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUP"
                className="p-3 rounded-md bg-[#FF3811] text-white"
              />
            </div>
          </form>
          <div>
            <p className="text-[#737373] font-semibold text-center mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF3811] font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
