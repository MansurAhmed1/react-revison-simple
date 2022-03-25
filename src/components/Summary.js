import React from 'react';

const Summary = (prop) => {
    const{cart}=prop;
  
     var sum=0;
   var quantity=0
    for(let obj of cart){
        sum=sum+parseFloat(obj.price)*obj.idMeal
        quantity=quantity+obj.idMeal
    }

    return (
        <div>
            total:{ sum} <br />
            quantity:{ quantity}
        </div>
    );
};

export default Summary;