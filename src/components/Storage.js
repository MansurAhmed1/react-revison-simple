function storage(strMeal){
var getStorage=localStorage.getItem("cart")


let object;
if( !getStorage){
    object={};
}
else{
    object=JSON.parse(getStorage)
}
if(!object[strMeal]){
    object[strMeal]=1;
}
else{
    object[strMeal]=object[strMeal]+1;
}

localStorage.setItem("cart",JSON.stringify( object))

}

function getStore(){



 let object= {};

 //get the shopping cart from local storage
 const storedCart = localStorage.getItem('cart');
 if(storedCart){
    object= JSON.parse(storedCart);
 
}
return  object

}





export {storage,getStore};

