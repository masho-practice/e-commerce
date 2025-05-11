import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import useProductStore from '../store/useProductStore'
import Loading from './Loading';
const ProductSection = () => {
  const {products, loading, error, fetchProducts} =useProductStore();

  useEffect(()=>{
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    <Loading />
  }

  if(error){
    return <div className='text-xl pt-20 text-red-400 text-center'>{error}</div>
  }
  return (
    <div>
      <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 py-16 mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product)=> (
           <ProductCard key={product.id} product={product}/>
))}
              
      </div>
    </div>
  )
}

export default ProductSection