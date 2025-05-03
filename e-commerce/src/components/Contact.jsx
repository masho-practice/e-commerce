import React from "react";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-[1460px] px-3 sm:px-6 md:px-20 lg:px-32 bg-gradient-to-b from-pink-200">
        <div className="flex flex-col text-center ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4">Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our Newsletter and stay updated.</p>
          <div className="flex flex-row justify-center py-4 ">
            <input type="email" placeholder="your email id " className="  border shadow-lg rounded-full w-[340px] px-4 py-3" />
            <button className="border shadow-lg bg-black text-white rounded-full px-12 py-3 ml-[-45px]" type="submit"> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
