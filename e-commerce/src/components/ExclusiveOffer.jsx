import React from "react";
import kid1 from "../Assets/images/kid1.png";
const ExclusiveOffer = () => {
  return (
    <div className=" py-16 ">
      <div className="mx-auto max-w-[1460px] px-3 sm:px-6 md:px-20 lg:px-32  py-4 ">
        <div className="bg-gradient-to-b from-pink-100 to-white grid grid-cols-1 sm:grid-cols-2 ">
          <div className="mx-auto pt-36 sm:order-1 ">
            <h1 className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Exclusive Offers For You
            </h1>
            <p className="my-4">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="bg-red-400 text-white text-center  px-8 py-2 rounded-full">
              Check Now
            </button>
          </div>
          <div className="sm:order-2">
            <img src={kid1} alt="" className="h-96  w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
