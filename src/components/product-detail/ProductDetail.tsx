import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import IProducts from '../../models/interface/IProducts';
import IaddToCartProps from "../../models/interface/IAddToCart";
import "../product-detail/productDetail.css"
import IParams from "../../models/interface/IParams";



const defaultValue:IProducts = {id:0, name:'', description:'', price:0, imageUrl:'', year:0};


export default function ProductDetail(props: IaddToCartProps) {//props - something (a function in this case) is to be sent to this component
  let { id } = useParams<IParams>();
  
  const [product, setProduct] = useState(defaultValue);

  useEffect(() => {
    axios.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`)
      .then(response => setProduct(response.data));
    }, []);


    ///////////add items to cart array////////////////
    
  function addToCart(){ //when i click and this function runs, it actually runs the function declared in App
    let p = {
      productId: product.id,
      amount: product.price
    };

      props.updateCart(p); //props that was sent from App, this runs the function in parent
      console.log(p);
      // console.log(cart);
    }
    console.log(props); 


   
  return(
      
  <div>
    <h1> Product detail Component</h1>
      <h3>{product.name}</h3>
    <img src={product.imageUrl}></img>
    <p className="description">{product.description}</p>
      <h3>{product.price} Kr</h3>
   <button type="button" onClick={addToCart}>add to cart</button>
   <a href="/"><button type="button">Go Back to Products</button></a> 
  </div>

  )
}

///////////////////////////////////

