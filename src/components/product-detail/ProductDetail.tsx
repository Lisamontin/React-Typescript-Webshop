import React, { useEffect, useState } from "react";
import axios from 'axios';
import IProducts from "../../models/interface/IProducts";



export default function ProductDetail() {

  const defaultValue:IProducts [] = [];
  const [products, setProducts] = useState(defaultValue);

  // let productDetailHtml = products.map((product: IProducts) => {
  //   return (
  //     //add keys
  //   <div>
  //     <img src={product.imageUrl} alt=""/>
  //   <h1>{product.name}</h1> {/* display the product that was clicked in Home component... */}

  //   </div>

  // )})

  useEffect(() => {
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .then(response => setProducts(response.data));  
    }, []);

    console.log(products[0]);
    const productHtml = (product: IProducts) => {
      return (
        <div>
          {product.name}
        </div>
      )
    }
  return(
    <div>
      <h1>Product detail Component</h1>
      {/* {productDetailHtml} */}
      {productHtml}
      <button>add to cart</button>
      <button>Go back to products</button>
    </div>
  )
}