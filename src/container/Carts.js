import React from 'react'
import { useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem';

function Carts() {
 
 
    const list= useSelector((state)=>state.Carts.list)

return (
    <div>
      {list.map((item)=>(
        <ProductListItem {...item} key={item.id} />
      ) )}
      </div>
  );
  
}

export default Carts