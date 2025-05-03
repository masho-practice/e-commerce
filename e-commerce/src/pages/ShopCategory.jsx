import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../components/Item';
const ShopCategory = (props) => {
    const all_product =useContext(ShopContext);
  return (
    <div>
        <img src={props.banner} alt="" />
        <div>
            {all_product.map((item)=> (
                if (item.category === props.category) {
                    <Item key={props.id} product={product}/>                    
                }else{
                    return null;
                }               
            ))}
        </div>

    </div>
  )
}

export default ShopCategory