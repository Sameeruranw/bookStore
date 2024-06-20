import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        console.log("API Response:", res.data);
        if (res.data.book && Array.isArray(res.data.book)) {
          setBooks(res.data.book);
        } else {
          console.error("Data is not an array:", res.data);
          setBooks([]);
        }
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="items-center justify-center text-center">
        <h1 className="text-2x1 md:text-4xl text-white pt-32">
          we're delighted to have you{" "}
          <span className="text-pink-500">here! :</span>
        </h1>
        <div className="mt-6 md:text-xl text-xs">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s
        </div>
        <button className="mt-8 md:mt-2 bg-pink-500 rounded-md w-20 h-10 text-white hover:bg-pink-800 hover:scale-105 duration-300">
          <Link to="/">Back</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {books.length > 0 ? (
          books.map((item,index) => <Cards key={index} item={item} />)
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Course;
