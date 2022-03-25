import React, {useEffect, useState} from 'react';
import {addToDb, getStored} from '../utilities/fakedb';
import Cart from './Cart';
import Product from './Product';
import './Shop.css'



const Shop = () => {
   const [products,setProducts]=useState([]);
//    ekhadik jinis jog korbe tai use state hobe empty array
//    amar mone hoi jodi kono value set na kore dei taholw state hiseebe empty array nite hobe
   const[cart,setCart]=useState([]);
   // console.log(cart)
   useEffect(function(){
       fetch('products.json')
       .then(res=>res.json())
       .then(data=> setProducts(data))

    //    setProducts(data)

   },[])

//storager er useEffect
useEffect(function(){
   const storedCart=getStored();
   console.log( storedCart)
   const saveCart=[];
   
   // console.log( storedCart);
   // Object { "13cbc7ed-a61b-4883-9d42-82d7d8642b86": 2, "307f166f-1d04-4573-bc37-2f461ea9d4f7": 12 }
   for (let id in storedCart){
   const addedProuct=products.find(product=>product.id ===id)
    if( addedProuct){
     const quantity=storedCart[id];
     addedProuct.quantity=quantity;
     saveCart.push(addedProuct)
   }
}
setCart(saveCart)
// products er man jotobar change hobe totobar useeffect function ta call hobe
},
[products])




   // const[price,setPrice]=useState(0);

//  ata button er datar function
function sendData(product){
//function er vetor theke value baire pathanor joono state er help nite hobe
//spread oparetor er maddhome array er vetorer upadanke nie newa hoyeche
const exists=cart.find(cartProduct=>cartProduct.id === product.id);
if(!exists){
   console.log(product)
   product.quantity=1;
   setCart([...cart,product])
}


else{
   // !==
  const rest=cart.filter(cartProduct=>cartProduct.id !== product.id );
   exists.quantity=  exists.quantity+1;
console.log(rest)
console.log(cart)
   setCart([...rest,exists])
}
// setCart([...cart,product])
// setPrice(price+product.price)
addToDb((product.id))
}



  return (
        <div className='shop'> 
        
        <div className="product">
            {/* function keo pathano jai variable er moto */}
            {
              
              products.map((product,index)=> <Product product={product} key={index}  sendData={ sendData}></Product>)  
            }

        </div>
        
        <div className="order-summary">
         <Cart cart={cart}  > </Cart>
         {/* price={price} */}
        </div>
       
            
        </div>
    );
};

export default Shop;