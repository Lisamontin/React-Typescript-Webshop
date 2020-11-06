
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IFinalCart from '../../models/interface/IFinalCart';




export default function Cart(props: IFinalCart) {

// const [cart, setCart] = useState([]); //get from APP? Productdetail?
const [total, setTotal] = useState(0);

console.log(props.finalCart, 'final cart logged from cart');


let runningTotal = 0
for(let i = 0; i < props.finalCart.length; i++){

  runningTotal += props.finalCart[i].amount;

}
useEffect( () => {
  setTotal(runningTotal);
},[])

console.log(total);


  return (
    <div>
      <h1>Cart component</h1>
      <h3>display cart array</h3>
      <Link to="/checkout">checkout</Link>
  <p>Total amount to pay: {total} Kr</p>

      
    </div>
  )
}