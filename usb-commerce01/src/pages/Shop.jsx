import React from "react";
import { PRODUCTS } from "../products";
import ShopCard from "../components/ShopCard";

export const Shop = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1280px]  px-3 sm:px-6 md:px-20 lg:px-32">
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <ShopCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
