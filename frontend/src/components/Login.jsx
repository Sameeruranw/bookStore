import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  }= useForm();

  const onSubmit = (data) => console.log(data)
  return (
    <>
      
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
         
          <h3 className="font-bold text-lg">Login</h3>
          <div className=" mt-4 space-y-2">
            <span>Email</span><br/>
            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email",{required:true})}
            />
           
          </div>
          <div className=" mt-4 space-y-2">
            <span>password</span><br/>
            <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password",{required:true,minLength:8})}
            />
             {errors.password && <span className=" text-red-500 pt-4">password must be 8-20 characters long</span>}
           
          </div>
          <div className=" flex justify-between mt-4">
            <button  type="submit" className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">Login</button>
            <p>Not registered <span className=" text-blue-500 underline  cursor-pointer">
                
                <Link to="/Signup">Signup !</Link></span></p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
