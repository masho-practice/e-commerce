import React, { useContext } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { id, cartItems} = useContext(ShopContext);
      const cartItemAmount= cartItems[id];
  return (
    <div className='border-b shadow-md 
    '>
      <div className='flex justify-between items-center max-w-[1280px] mx-auto py-4 px-3 sm:px-6 md:px-20 lg:px-32 '>
        <div className='flex items-center space-x-4'>
        <FaShoppingBag size={30}/> 
        <h1>USB-Shop</h1>
        </div>
        <ul className='flex space-x-8 '>
          <Link to='/'><li className='hover:text-orange-500'>Shop</li></Link>
          <Link to='/about'><li className='hover:text-orange-500'>About</li></Link>
          <Link to='/contact'><li className='hover:text-orange-500'>Contact</li></Link>
        </ul>
        <div className='flex items-center '>
          <Link to='/login'><button className='mr-6 border border-slate-400 hover:bg-black hover:text-white px-4 py-1 rounded-lg'>Login</button></Link>
          <Link to='/cart'><CiShoppingCart size={30}/></Link>
          <div className='bg-black text-white ml-[-10px] mt-[-16px] text-sm px-1 items-center justify-center rounded-full'>{cartItemAmount}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar