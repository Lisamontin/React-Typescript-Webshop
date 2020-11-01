
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

  return (
    <div>
      <h1>Cart component</h1>
      <Link to="checkout">checkout</Link>
      <button>go to checkout</button>
      
    </div>
  )
}