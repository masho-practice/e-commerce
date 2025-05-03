import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
   import { FaShopify } from "react-icons/fa";
const Navbar = () => {
    const [menu, setmenu] = useState('home');
  return (
    <div className='border-b'>
        <div className='flex mx-auto max-w-[1460px] justify-between items-center py-6 px-3 sm:px-6 md:px-20 lg:px-32'>
            <div className='flex space-x-2 items-center  '>         
              <FaShopify size={30}/>
             <h1 className='text-2xl font-bold font-serif '>e-commerce</h1>
            </div>
            <ul className='hidden sm:flex space-x-10 '>
                <li onClick={()=> setmenu('shop')} className='cursor-pointer hover:text-[#00cc07]'>
                    <Link to='/'>Home {menu==='shop'? <hr className=' h-1 bg-red-500'/> : null}</Link>
                </li>
                <li onClick={()=> setmenu('men')} className='cursor-pointer hover:text-[#9900cc]'>
                    <Link to='/men'>Men {menu==='men'? <hr className=' h-1 bg-red-500'/> : null}</Link>
                </li>
                <li onClick={()=> setmenu('women')} className='cursor-pointer hover:text-[#9900cc]'>
                    <Link to='/women'>Women {menu==='women'? <hr className=' h-1 bg-red-500'/> : null}</Link>
                </li>
                <li onClick={()=> setmenu('kids')} className='cursor-pointer hover:text-[#9900cc]'>
                    <Link to='/kids'>Kids{menu==='kids'? <hr className=' h-1 bg-red-500'/> : null}</Link>
                </li>
            </ul>
            <div className='flex items-center'>
                <Link to='/login'><button type='submit' className='mr-4 border border-blue-400 hover:bg-orange-300 px-5 py-2 rounded-lg'>Login</button></Link>
                <Link to='/cart' onClick={()=> setmenu('cart')}><IoCartOutline size={30}/> {menu==='cart'? <hr className=' h-1 bg-red-500'/> : null}</Link>
               <div className='rounded-full h-5 w-3 mt-[-13px] ml-[-10px] bg-red-600 text-white'>0</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar