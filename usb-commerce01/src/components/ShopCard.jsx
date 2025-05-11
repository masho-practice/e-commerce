import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ShopCard = (props) => {
    const {id,productImage,price,productName} =props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount= cartItems[id];
  return (
    <div className='text-center p-4 m-4 shadow-md hover:scale-105 duration-300 my-8'>
        <img src={productImage} alt={productName} className='w-full h-48 object-contain'/>
        <h1>{productName}</h1>
        <p>Br{price}</p>
        <button onClick={()=> addToCart(id)} className='px-4 py-2 bg-gray-400 text-white hover:text-black hover:bg-white border hover:border-gray-500 duration-300 rounded-lg m-3'>Add To cart {cartItemAmount > 0 && <>{' '}({cartItemAmount})</> }</button>
    </div>
  )
}

export default ShopCard