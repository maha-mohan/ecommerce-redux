import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductList } from '../data/ProductList';
import { addItem } from '../redux/reducer/Cart';


function Product() {
  const params = useParams();
  const dispatch=useDispatch();
  const props = ProductList.find((Element)=>Element.id===parseInt(params.id));
  
const addToCart =()=>{
  dispatch(addItem(props))
}

  
  
  
  return (
    <div className='card m-2'>
    <div className='mt-3'>
        <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border-radius-9' />
    </div>
    <div className='mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>price: {`$${props.price}`}</h6>
        <h6 className='mt-2'>Discount :{props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating :{props.Rating}</h6>
        <div className='mt-4'>
            {props.stock>0? (
            <>
            <button className='btn btn-success'>Buy Now</button>
            <button className='btn btn-success ms-3' >Add to Cart</button>
            </>
       
            
           ) :(<button className='btn btn-outline-danger'> Out of stock</button>)}
        </div>
    </div>
</div>
  )
}

export default Product