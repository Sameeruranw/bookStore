import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        console.log("API Response:", res.data);
        if (res.data.book && Array.isArray(res.data.book)) {
          const data = res.data.book.filter((book) => book.Category === "free");
          setBooks(data);
          console.log("Filtered Data:", data);
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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-14 ">
        <div>
          <h1 className="font-bold text-xl">Free Offered Courses</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((item,index) => (
              <Cards item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
