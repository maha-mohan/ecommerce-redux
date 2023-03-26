import React from 'react'

function ProductListItem(props) {
    return (
        <div className=' m-4 d-flex align-center justify-content-center'>

            <img
                src={props.thumbnail}
                height={150}
                width={180}
                alt={props.title}
                className='border-radius-9'
            />


            <h5 className='card-title ms-4'>{props.title}</h5>
            <h6 className='mt-2 me-4'>price: {`$${props.price}`}</h6>
            <h6 className='mt-2 me-4'>Discount :{props.discountPercentage}%</h6>
            <h6 className='mt-2 me-4'>Rating :{props.Rating}</h6>
          
                {props.stock > 0 ? <button className='btn btn-success'>+</button> : 
                <>
                <button className='btn btn-outline-danger ms-3'> - </button>
                <button className='btn btn-outline-dangerms-3'> Remove </button>
               </>
                }
           
        </div>
    );
}

export default ProductListItem