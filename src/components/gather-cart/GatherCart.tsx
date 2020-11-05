import React, { useEffect, useState } from 'react';
import IaddToCartProps from '../../models/interface/IAddToCart';
import ICart from '../../models/interface/ICart';
import ProductDetail from '../product-detail/ProductDetail';




//This components purpose is to experiment with lifting state up to figure out how to 
//lift cart state from Home and ProductDetail.


export default function GatherCart(props: IaddToCartProps) { //ta emot nagonting via props


//potenTIAL  to perform functionality depending on what happends in ProductDetail onClick function
//translated to cart issue: if add to cart button was clicked, add the product to the cart array state

//////////////////Functionality to add item to cart array/////////////////////

const myCart: Array<{ productId: number, amount: number}> = []; 
const [cart, setCart] = useState(myCart); //holds/saves the state from ProductDetail cart state 

useEffect(() => {
  setCart(myCart);
}, []);


//runs when i click add to cart button in ProductDetail component
const addToCart = (props: ICart) => { //props: ICart, updateCart 
  myCart.push(...cart);
  let p = {
    productId: props.productId,
    amount: props.amount
  }

  myCart.push(p);
  setCart(myCart); //saves values from child(ProductDetails)

  console.log(cart);
} 


////////////////////////////////////////////////////////////////////



  return(

    //A click performed in product detail (add to cart button)
    // accepts props obj from child productDetail who wants a function (addToCart).
    <ProductDetail updateCart={addToCart}></ProductDetail>
  )
}