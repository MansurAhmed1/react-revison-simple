import React from 'react';
import './Cart.css'

const Cart = (prop) => {
    const{meal, clickFunction}=prop
    const{strMeal,strMealThumb,price}=meal
   
    return (
        
<div className='card'>
<div className="card-image">
  <img src={strMealThumb} alt="" />

</div>
<div className="card-info">
  <p className='product-name'>Name:{strMeal}  </p>
  <p className='product-price'>Price{price}$</p>
</div>
<button onClick={function(){clickFunction(meal)}} ><span style={{marginRight:"10px"}}>Add to Cart</span>

</button>
</div>
    );
};

export default Cart;


