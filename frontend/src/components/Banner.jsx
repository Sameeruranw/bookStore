import React from "react";
import book from "../assets/book.jpg"
const Banner = () => {
  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className=" order-2 md:order-1   w-full  md:w-1/2  md:mt-32 mt-12">
          <div className=" space-y-12">
            <h1 className=" md:text-4xl font-bold text-2xl">
              Hello, welcome here to learn something
              <span className=" text-pink-500"> new everyday!!!</span>
            </h1>
            <p className=" md:text-xl">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="sameeruranw81@gmail.com" />
          </label>
          </div>
          <button className="btn btn-outline btn-secondary mt-6">Secondary</button>
        </div>
        <div className=" md:order-1 md:mt-12 mt-8    w-full  md:w-1/2">
            <img src={book} className=" md:px-8 md:h-[600px] h-[400px]  " alt="book "/>
        </div>
      </div>
      
    </>
  );
};

export default Banner;
