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


  useEffect(() => {
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .then(response => setProducts(response.data));
      
    }, []);

  let productsHtml = products.map((product: IProducts) => {
    return (
      // <a href="#" className="product" key={product.id}>
    
      //     <dt>
      //       <img className ="product-image" src={product.imageUrl} alt="product-image"/>
      //     </dt>
      //       <span className="product-name">
      //         {product.name}
      //       </span>
      //   <button type="button">Add to cart</button>
      // </a>

      <section>
        <div className="products" key={product.id}>
          <div className="card">
            <a href="/productdetail">
              <img src={product.imageUrl} alt=""/>
            </a>
            <div className="box">
              <h3 title={product.name}>
                <a href="/productdetail">{product.name}</a>
              </h3>
                <p className="description">{product.description}</p>
              <h4>{product.price} Kr</h4>
              <button>Add to cart</button>

            </div>

          </div>
        </div>
      </section>

    )
  });

  return(
    <>
      <h1>HOME component</h1>
      
    <div className="product-page">
      {productsHtml}
    </div>
    </>
  )
}