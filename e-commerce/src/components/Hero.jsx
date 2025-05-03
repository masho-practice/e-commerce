import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import heroImage from "../Assets/heroImage.png";
const Hero = () => {
  return (
    <div className="h-[700px] bg-gradient-to-b from-pink-200 to-white">
      <div className="max-w-[1460px] px-3 sm:px-6 md:px-20 lg:px-32 pt-8  grid gap-8 grid-cols-1 sm:grid-cols-2" >
        <div className="sm:order-1 order-2 mx-auto sm:pt-64">
          <p className="font-bold">NEW ARRIVALS ONLY</p>
          <div className="">
            <div className="flex items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mr-3">
                new
              </h1>
              <img src={hand_icon} alt="" className="h-6 sm:h-10 " />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
              collections  for everyone
            </h1>
            <div className="flex mt-4 sm:mt-8 justify-center  items-center bg-red-500 text-white rounded-full px-4 py-3 w-48 sm:w-64">
              <button className="mr-3 ">Latest Collection </button>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </div>
        <div className="sm:order-2 order-1 mx-auto sm:mt-24 ">
          <img src={heroImage} alt="" className="sm:h-[550px] h-96 object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
