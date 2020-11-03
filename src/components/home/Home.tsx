import React, { useState, useEffect, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import IProducts from '../../models/interface/IProducts';
import ICart from '../../models/interface/ICart';
import IaddToCartProps from '../../models/interface/IAddToCart';


// import { Link } from 'react-router-dom';
// import products from '../../api/products/ProductsData';


interface IParams{
  id: string;
}

interface IproductsProps{
  product:IProducts[]
}

export default function Home(props:IaddToCartProps) { //props to send data to App, props:IproductsProps
  
/////////experimenatl code//////////add items to cart
const [totalPrice, setTotalPrice] = useState(0)
const myCart: Array<{ productId: number, amount: number}> = []; //defaultvalue...?
const [cart, setCart] = useState(myCart);

useEffect(() => {
  setCart(myCart);
}, []);

const addToCart = (props: ICart) => {
  myCart.push(...cart);
  let p = {
    productId: props.productId,
    amount: props.amount
  }

  myCart.push(p);
  setCart(myCart);

} 


  const defaultValue:IProducts [] = [];

  const [products, setProducts] = useState(defaultValue);

  useEffect(() => {
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .then(response => setProducts(response.data));
    //catch errors
  }, []);

  
  let productsHtml = products.map((product: IProducts) => {
     return (
      <section>
        <div className="products" key={product.id}>
          <div className="card">
            <a href={`/productdetail/${product.id}`}>
              <img src={product.imageUrl} alt=""/>
            </a>
            <div className="box">
              <h3 title={product.name}>
                <a href="/productdetail">{product.name}</a>
              </h3>
                <p className="description">{product.description}</p>
              <h4>{product.price} Kr</h4>
              <button type="button" onClick={addToCart}>Add to cart</button>
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
