import React, { useContext } from 'react'
import { PRODUCTS } from '../products'
import { ShopContext } from '../context/ShopContext'
import CartCard from '../components/CartCard'

export const Cart = () => {
  const {cartItems} = useContext(ShopContext)
  return (
    <div className='max-w-[1280px]  px-3 sm:px-6 md:px-20 lg:px-32 py-16 '>
      <h1 className='text-center font-bold text-2xl sm:text-3xl'>Your Selected Cart Items :</h1>
      <div className='px-4 justify-center md:mx-24 py-8 ' >
          {PRODUCTS.map((product)=> {
        if (cartItems[product.id] != 0) {
          return <CartCard data={product} key={product.id}/>
        }
      })}
      </div>
    
    </div>
  )
}
