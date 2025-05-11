import React from 'react'
import { Link } from 'react-router-dom'
import {CiShoppingCart} from 'react-icons/ci'
const Navbar = () => {
  return (
    <div className='border-b shadow-md sticky fixed-0'>
        <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 py-4 mx-auto flex justify-between '>
            <div className='flex items-end space-x-2' >
                <img src="icon.png" alt="#" className='h-12' />
                <h1 className='text-2xl sm:text-3xl font-bold text-blue-500'>SHOPPING</h1>
            </div>
            <ul className='flex space-x-6 items-end '>
                <Link to={'/'} className='hover:text-orange-300'><li>Shop</li></Link>
                <Link to={'/about'} className='hover:text-orange-300'><li>About</li></Link>
                <Link to={'/contact'} className='hover:text-orange-300'><li>Contact</li></Link>
            </ul>
            <div className='space-x-4  '>
                <button className='relative'>
                    <CiShoppingCart  size={30} className='w-6'/>
           <span className='-top-3 -right-3 rounded-full w-5 h-5 bg-blue-600 text-white flex items-center justify-center text-sm'>0</span>
                </button>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar