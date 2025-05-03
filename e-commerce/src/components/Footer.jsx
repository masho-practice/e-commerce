import React from 'react'
import { FaShopify } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex justify-center '>
      <FaShopify size={40}/>
      <p className=''>E-commerce</p>      
      © {new Date().getFullYear()}
      <p className='pl-3'>All Rights Reserved.</p>
    </div>
  )
}

export default Footer