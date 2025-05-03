import React from 'react'
import newCollections from '../Assets/new_collections'
import Item from './Item'
const NewCollections = () => {
  return (
    <div>
        <div className='mx-auto max-w-[1460px] px-3 sm:px-6 md:px-20 lg:px-32  py-4 '>
            <h1 className='text-2xl font-bold sm:text-3xl mb-14 text-center'>New Collections</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {newCollections.map((product)=> (
                <div key={product.id}>
                    <Item key={product.id} product= {product} />
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default NewCollections