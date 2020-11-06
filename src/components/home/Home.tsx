import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import IProducts from '../../models/interface/IProducts';
import IaddToCartProps from '../../models/interface/IAddToCart';



// interface IParams{
//   id: string;
// }

// interface IproductsProps{
//   product:IProducts[]
// }

export default function Home(props:IaddToCartProps) { //props to ta emot data from App, props:IproductsProps
  
////////add items to cart////////

useEffect(() => {
  axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
  .then(response => setProducts(response.data));
  //catch errors
}, []);


//when i click and this function runs, it runs the function declared in App , state is lifted
//however, not allowed to trigger with onclick function on button... why? -------> I have to send the add to cart function inside an anonymous function ()=>{}
function addToCart(product: IProducts){ //, MouseEvent:<HTMLButtonElement>
  let p = {
    productId: product.id,
    amount: product.price
  };
    
    props.updateCart(p); //props that was sent from App, this runs the function in parent
    console.log(p);
    // console.log(cart);
  }

 
  const defaultValue:IProducts [] = [];

  const [products, setProducts] = useState(defaultValue);

  let productsHtml = products.map((product: IProducts) => {
     return (
      <section key={product.id}>
        <div className="products" >
          <div className="card">
            <a href={`/productdetail/${product.id}`}>
              <img src={product.imageUrl} alt=""/>
            </a>
            <div className="box">
              <h3 title={product.name}>
                <a href="/productdetail">{product.name}</a>
              </h3>
              <h4>{product.price} Kr</h4>
              <Link to={`/productdetail/${product.id}`}>DETAILS</Link>
              {/* <a href={`/productdetail/${product.id}`}><button>Details</button></a> */}

              
              <button type="button" onClick={()=>{addToCart(product)}}>Add to cart</button> 
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
