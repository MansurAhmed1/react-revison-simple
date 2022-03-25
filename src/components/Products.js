import React, {useEffect, useState} from 'react';
import './Product.css'
import Cart from './Cart';
import  {getStore,storage} from './Storage';
import Summary from './Summary';




//we should to remember that every component is a function 
const Products = () => {
    const[products,setProducts]=useState([])
    useEffect(function(){
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res=>res.json())
        .then(data=>setProducts(data.meals))

    },[]);


    const[cart,setCart]=useState([])
    // //useeffect foe localstorage
    useEffect(function(){


//price and quantity not find in mealdb api.so i set artificially  price and convert idmeal to quantity.
var count=100;
for(let x=0; x<products.length; x++){
    count++
    
    products[x].price=count;
}





     
       var localStorage=getStore();
       var array=[];

       for(let key in localStorage){
       
        var common=products.find(product=>product.strMeal=== key)
        if(common){
            common.idMeal=localStorage[key]
            array.push(common)
           
        }
       }
    //    console.log(array)
      
       setCart(array)

      


    },[products])
  

console.log(cart)
  



   

   
    //handleclickFunction
    function handleClick(meal){
        //creat an array and dynamically set cart value in array
        //array er vetore cart er upadan ene set kori jotobar click korbo totobar cart er upadan ese set hobe ttar moddo button er object ese set hobe
        //ekhane muloto button er prottokta object ke akta array er moddho joma kortechi
        // var array=[...cart]
        // array.push(meal)
        // setCart(array)
        //sohoje ek line a likha 
     
    //  setCart([...cart,meal])
        

        const exists=cart.find(cartProduct=>cartProduct.strMeal === meal.strMeal);
        if(!exists){
            // console.log(meal)

            meal.idMeal=1;
            setCart([...cart,meal])
            console.log(meal)
        }
      
        else{
           

           const rest=cart.filter(cartProduct=>cartProduct.strMeal !==meal.strMeal);
           exists.idMeal= exists.idMeal+1;
           console.log(meal)
            setCart([...rest,exists])
        }

        storage(meal.strMeal)
        console.log(cart)
    }
    
    //price and quantity set in object
   
   
    return (
        <div>
            <h1>Food</h1>
            <h1>{cart.strMeal}</h1>
           <div className='cards'>
           <div className='products'>
           {
                products.map((product,index)=><Cart  meal={product} key={index} clickFunction={handleClick}></Cart>)
            }
           </div>
           <div className='cart'>
               {/* totalprice:{sum} <br />
               totalProduct={total} */}
               <Summary cart={cart}></Summary>
           </div>
           </div>

        </div>
    );
};

export default Products;



