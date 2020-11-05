
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import NotFoundPage from './components/notfoundpage/NotFoundPage';
import ProductDetail from "./components/product-detail/ProductDetail";
import ICart from './models/interface/ICart';



function App() {


const myCart: Array<{ productId: number, amount: number}> = []; 
const [cart, setCart] = useState(myCart); //holds/saves the state from ProductDetail cart state 

useEffect(() => { ////WHY?
  setCart(myCart);
}, []);


//runs when i click add to cart button in ProductDetail component
const addToCart = (props: ICart) => { //props: ICart, updateCart "=" addToCart, 
  myCart.push(...cart); //separate objects, cart = array of objects
  let p = {
    productId: props.productId,
    amount: props.amount
  };

  myCart.push(p); // push the products id and cost into the empty myCart array
  setCart(myCart); //saves values from child(ProductDetails) pushed into myCart array in Cart state.

  console.log(...cart, '...cart logged here---------------');
  console.log(cart, 'cart logged here========');
} 


  return (
    <div className="App">

      <Router>
        <nav>
          <Navbar></Navbar>
        </nav>
        
        <Switch>
          <Route path="/" exact={true}>
            <Home updateCart={addToCart }></Home>
          </Route>
          <Route path="/productdetail/:id">
            <ProductDetail updateCart={addToCart}></ProductDetail>
          </Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="*" component={NotFoundPage}></Route>

        </Switch>

      </Router>
      </div>
  );
}

export default App;
