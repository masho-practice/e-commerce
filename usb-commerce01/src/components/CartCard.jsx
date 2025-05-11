import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartCard = (props) => {
  const { id, productImage, price, productName } = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartValue} = useContext(ShopContext)
  return (
    <div className=" flex items-center border shadow-md m-3 rounded-lg max-w-md my-4 ">
      <div>
        <img src={productImage} alt={productName} className="h-36 " />
      </div>

      <div>
        <h1 className="font-bold text-xl">{productName}</h1>
        <p>Br{price}</p>
        <div className="border border-gray-300 mt-3 w-16 flex justify-between ">
          <button  onClick={()=> removeFromCart(id)} className="bg-gray-200  font-bold px-1  items-center">-</button>
          <input type="number" className="w-8 text-center ml-3" value={cartItems[id]} onChange={(e)=> updateCartValue(e.target.value, id)} />
          <button onClick={()=> addToCart(id)} className="bg-gray-200  font-bold px-1  items-center">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
