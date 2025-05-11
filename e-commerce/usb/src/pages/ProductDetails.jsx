import React, { useEffect } from 'react'

import ReviewStar from '../components/ReviewStar'
import { useParams } from 'react-router-dom'
import useProductStore from '../store/useProductStore'
import Loading from '../components/Loading'
const ProductDetail = () => {

    const { productId } = useParams();

  const { product, loading, error, fetchProduct } = useProductStore();
 


    useEffect(() => {
        fetchProduct(productId)
    },[productId,fetchProduct])


     if (loading) {
       return <Loading />;
     }

     if (error) {
       return (
         <div className=" text-center text-xl pt-20 text-red-500">
           {" "}
           {error}{" "}
         </div>
       );
     }
    
  return (
    <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 py-4 mx-auto'>
      {product && (
        <div className=" grid grid-cols-2 ">
          <div className=" justify-center items-start flex ">
            <img src={product.thumbnail} alt="" className=" h-96 object-contain object-center" />
          </div>
          <div className=" flex flex-col gap-5 items-start">
            <h1 className=" text-2xl font-bold"> {product.title} </h1>
            <h1 className=" text-xl font-bold"> {product.price} </h1>
            <p className=" w-96 "> {product.description} </p>
            <ReviewStar rating={product.rating} />
            <button
              className=" rounded-full bg-primary  hover:bg-primary/90 px-5 py-3 text-center text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail