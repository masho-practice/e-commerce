import React from 'react'
import  data_product from '../Assets/data'
import Item from './Item'
const PopularProduct = () => {
  return (
    <div className='py-16 sm:py-36'>
      <h1 className='pb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold '>Popular Products in Men <hr className='w-40 mx-auto h-[5px] bg-gray-900 ' /></h1>
      <div className='px-3 sm:px-6 md:px-20 lg:px-32 max-w-[1460px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {data_product.map((product)=> (
          <div key={product.id}>
            <Item key={product.id} product={product}/>
          </div>
        ))}
      </div>        
    </div>
  )
}

export default PopularProduct