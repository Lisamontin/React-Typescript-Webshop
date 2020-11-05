import React, { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ICart from '../../models/interface/ICart'
import IProducts from '../../models/interface/IProducts';
import IaddToCartProps from "../../models/interface/IAddToCart";
import "../product-detail/productDetail.css"


interface IParams{
  id: string;
}




const defaultValue:IProducts = {id:0, name:'', description:'', price:0, imageUrl:'', year:0};
const myCart: Array<{ productId: number, amount: number}> = [];

export default function ProductDetail(props: IaddToCartProps) {
  let { id } = useParams<IParams>();
  
  const [product, setProduct] = useState(defaultValue);

  useEffect(() => {
    axios.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`)
      .then(response => setProduct(response.data));

    }, []);


    ///////////////////////////
    const [cart, setCart] = useState({})
    const [cartTotal, setCartTotal] = useState(0);

    

    function addToCart(){ //when i click and this function runs, it actually runs the function
      let p = {
        productId: product.id,
        amount: product.price
      };
      props.updateCart(p);
      console.log(p);
      console.log(cart);
    }

  return(
      
  <div>
    <h1> Product detail Component</h1>
   <h3></h3>
   <h3>{product.name}</h3>
   <img src={product.imageUrl}></img>
    <p className="description">{product.description}</p>
  <h3>{product.price} Kr</h3>
   <button type="button" onClick={addToCart}>add to cart</button>
   
    
  </div>

  )
}

///////////////////////////////////

