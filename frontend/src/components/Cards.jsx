import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="p-3">
      <div className="card w-92 h-[360px] md:h-[360px] bg-slate-800 shadow-xl mt-12 hover:scale-95 duration-300">
        <figure>
          <img className=" flex-1 " src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 cursor-pointer px-2">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
