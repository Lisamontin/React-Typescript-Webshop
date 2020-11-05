
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ICart from '../../models/interface/ICart';

// interface ICartTotal{
//   total: number;
// }
interface IFinalCart{
  finalCart: Array<ICart>
}

export default function Cart(props: IFinalCart) {

const [cart, setCart] = useState([]); //get from APP? Productdetail?
const [total, setTotal] = useState(0);



  return (
    <div>
      <h1>Cart component</h1>
      <h3>display cart array</h3>
      <Link to="checkout">checkout</Link>
  <p>{props.finalCart}</p>
      <button>go to checkout</button>
      
    </div>
  )
}