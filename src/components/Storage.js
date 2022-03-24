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
 var getSorage=localStorage.getItem("cart")
 var parse=JSON.parse(getSorage)
 return parse

}


function lala(){

}
export {storage,getStore,lala};

