import React, {  createContext, useState } from 'react'
export const ShopContext =createContext(null);
import { PRODUCTS } from '../products';

 const getDefaultCart =()=>{
        let cart = {};
        for (let i = 1; i < PRODUCTS.length + 1; i++) {
         cart[i]=0;    
        }
        return cart;
      }
      
export const ShopProvider = (props) => {
  const [cartItems, setCardItems] = useState(getDefaultCart());
      
  
     
      const addToCart =(ItemId)=>{
        setCardItems((prev)=> ({...prev, [ItemId]:prev[ItemId]+ 1 }))
      }
      
      const removeFromCart =(ItemId)=>{
        setCardItems((prev)=> ({...prev, [ItemId]:prev[ItemId]- 1 }))
      }
      const updateCartValue =(newAmount, ItemId) => {
        setCardItems((prev)=>({ ...prev, [ItemId]: newAmount}));
      }
      const contextValue = {cartItems, addToCart, removeFromCart, updateCartValue}
      console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
