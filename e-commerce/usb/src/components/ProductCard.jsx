import React from 'react'
import ReviewStar from './ReviewStar'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`product/${product.id}`}>
        <div>
          <img src={product.thumbnail} alt="" className='h-36 w-full object-contain object-center hover:scale-125 transition-all duration-300 overflow-hidden outline-none' />
          <h3 className='text-xl font-bold '>{product.title}</h3>
        </div>
      </Link>
      <div className='flex flex-col items-center px-5'>
        <div className='items-center'>
          <p className='text-center font-bold text-2xl '>${product.price}</p>
          <ReviewStar rating={product.rating} />
        </div>
        <button className='bg-blue-600 hover:bg-blue-800 text-center my-2 text-white px-5 py-2 rounded-lg'>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard