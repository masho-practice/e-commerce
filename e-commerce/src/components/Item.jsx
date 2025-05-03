import React from "react";

const Item = ({ product }) => {
  return (
    //shadow-md rounded-lg
    <div className=" overflow-hidden hover:scale-105 duration-300 cursor-pointer">
      <img
        className="w-full h-48 object-contain mb-6"
        src={product.image}
        alt={product.name}
      />
      <p className="p-3">{product.name}</p>
      <div className="flex space-x-3 items-center p-3 " >
        <p className="line-through text-gray-400 py-2 ">${product.old_price}</p>
        <p className="text-xl">${product.new_price}</p>
      </div>
    </div>
  );
};

export default Item;
