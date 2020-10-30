import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss'
import IProducts from '../../models/interface/IProducts';
// import { Link } from 'react-router-dom';
// import products from '../../api/products/ProductsData';


export default function Home() {

  const defaultValue:IProducts [] = [];

  //variable to hold the state for the posts from api

  const [products, setProducts] = useState(defaultValue);


  function showProduct() {
    console.log('onclick works!');
    // this.context.router.push('../../product-detail/ProductDetail.tsx');
    
  }


  useEffect(() => {
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .then(response => setProducts(response.data));
      
    }, []);

  let productsHtml = products.map((product: IProducts) => {
    return (
      <a onClick={showProduct} href="#" className="product" key={product.id}>
    
          <dt>
            <img className ="product-image" src={product.imageUrl} alt="product-image"/>
          </dt>
            <span className="product-name">
              {product.name}
            </span>
          {/* <dd>{product.description}</dd> */}
      {/* <Link to="ProductDetail">Details</Link> */}
        <button type="button">Add to cart</button>
      </a>


    )
  });

  return(
    <>
      <h1>HOME component</h1>
      <button className="basket-button" type="button">basket</button>
    <div className="product-page">
      {productsHtml}
    </div>
    </>
  )
}