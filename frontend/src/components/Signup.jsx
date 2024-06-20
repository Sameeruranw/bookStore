import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "./Home/Home";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
    
      <div className=" flex h-screen items-center justify-center ">
        
        <div
          id="my_modal_3"
          className=" border-[2px] rounded-3xl shadow-md p-5"
        >
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className=" mt-4 space-y-2">
                <span>Username</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("text", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </div>
              {errors.text && (
                <span className=" text-red-500 text-sm">
                  must not contain space or any special character
                </span>
              )}
              <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
              </div>
              <div className=" mt-4 space-y-2">
                <span>password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <span className=" text-red-500 pt-4">
                  password must be 8-20 characters long
                </span>
              )}
              <div className=" flex justify-between mt-4">
                <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                  Signup
                </button>

                <p className=" text-sm items-center flex ">
                  Already have an account{" "}
                  <span className=" text-blue-500 underline  cursor-pointer">
                    <Link to="/">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
