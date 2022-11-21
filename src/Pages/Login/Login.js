import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, {replace: true});
  }

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Logged In Successful");
        setLoginUserEmail(data.email);
        
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("User Logged In Failed");
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[550px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl rounded-md">
        <h2 className="text-xl text-center font-bold text-secondary uppercase">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text mb-2">
                <Link className="underline text-blue-800" to="/">
                  Forgot Password?
                </Link>
              </span>
            </label>
            {errors.password && (
              <p className="text-red-600 mb-1">{errors.password?.message}</p>
            )}
          </div>
          <div className="mb-2">
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-1 text-center">
          <small>
            New to Doctors Portal{" "}
            <Link className="text-secondary font-bold" to="/signup">
              Create new Account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
