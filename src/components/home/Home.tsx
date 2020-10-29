import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss'

interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  // productCategory: <create interface?>;
};


export default function Home() {

  const defaultValue:IProducts [] = [];

  //variable to hold the state for the posts from api

  const [products, setProducts] = useState(defaultValue);



  useEffect(() => {
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .then(response => setProducts(response.data));
      
    }, []);

  let productsHtml = products.map((product: IProducts) => {
    return (
        <div className="product" key={product.id}>
          <dt>
            <img className ="product-image" src={product.imageUrl} alt="product-image"/>
          </dt>
            <span className="product-name">
              {product.name}
            </span>
          {/* <dd>{product.description}</dd> */}
        <button type="button">Add to cart</button>
      </div>
    )
  });

  return(
    <div>
      <h1>HOME component</h1>
      <a href="#">{productsHtml}</a>
    </div>
  )

}