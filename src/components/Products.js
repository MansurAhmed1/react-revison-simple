import React, {useEffect, useState} from 'react';
import './Product.css'
import Cart from './Cart';
import  {getStore,storage} from './Storage';




//we should to remember that every component is a function 
const Products = () => {
    const[products,setProducts]=useState([])
    useEffect(function(){
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res=>res.json())
        .then(data=>setProducts(data.meals))

    },[]);


    const[cart,setCart]=useState([])
    //useeffect foe localstorage
    useEffect(function(){
     
       var localStorage=getStore();
       var array=[];

       for(let key in localStorage){
        var common=products.find(product=>product.strMeal=== key)
        if(common){
            common.quantity=localStorage[key]
            array.push(common)
        }
       }
       setCart(array)




    },[products])
  


  






   
    //handleclickFunction
    function handleClick(meal){
        //creat an array and dynamically set cart value in array
        //array er vetore cart er upadan ene set kori jotobar click korbo totobar cart er upadan ese set hobe ttar moddo button er object ese set hobe
        //ekhane muloto button er prottokta object ke akta array er moddho joma kortechi
        // var array=[...cart]
        // array.push(meal)
        // setCart(array)
        //sohoje ek line a likha 
       
     
        

        const again=cart.find(cartProduct=>cartProduct.id === meal.id);
        if(!again){

            meal.quantity=1;
            setCart([...cart,meal])
        }
        else{


           const rest=cart.filter(cartProduct=>cartProduct.id !==meal.id);
            again.quantity=again.quantity+1;
            setCart([...rest,again])
        }










       
        

      

        
        
   
         
        
        
        storage(meal.strMeal)
    }
    
    //price and quantity set in object
    var count=100;
    for(let x=0; x<products.length; x++){
        count++
        products[x].quantity=0;
        products[x].price=count;
    }
console.log(cart)
    var sum=0;
    // var total=0;
    for(let obj of cart){
        sum=sum+obj.price;
        // total=total+obj.quantity
    }

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
               totalprice:{sum} <br />
               {/* totalProduct={total} */}
           </div>
           </div>

        </div>
    );
};

export default Products;



