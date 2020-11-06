
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import ConfirmationPage from './components/confirmation-page/ConfirmationPage';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import NotFoundPage from './components/notfoundpage/NotFoundPage';
import ProductDetail from "./components/product-detail/ProductDetail";
import ICart from './models/interface/ICart';



function App() { 

  //PARENT Holds the cart state for productDetail, Home, Cart and checkout, 
  // todo - RESTRUCTURE to a separate parent component.

  const cartDefault: Array<{ productId: number, amount: number}> = []; 
  const [cart, setCart] = useState(cartDefault); //holds/saves the state from ProductDetail cart state 
  const [total, setTotal] = useState(0);


//runs when i click add to cart button in ProductDetail component, THIS function will run
  const addToCart = (props: ICart) => { // updateCart "=" addToCart, wants a value with datatype Icart
    // cartDefault.push(...cart); //separate objects, cart = array of objects
    // let p = {
    //   productId: props.productId,
    //   amount: props.amount
    // };

    // cartDefault.push(props); // push the products id and cost into the empty cartDefault array
    setCart([...cart, props] ); //saves values from child(ProductDetails) pushed into cartDefault array in Cart state.
    
    let totalSum = 0;
    for(let i = 0; i < cart.length; i++){
      cart[i].amount += totalSum;
    }
    setTotal(totalSum);


    console.log(total, 'total logged here');
    console.log(...cart, '...cart logged here---------------');
    console.log(cart, 'cart logged here========');
  } 


  return (
    <div className="App">

      <Router>
        <nav>
          <Navbar finalCart={cart}></Navbar>
        </nav>
        
        <Switch>
          <Route path="/" exact={true}>
            <Home updateCart={addToCart }></Home>
          </Route>
          <Route path="/productdetail/:id">
            <ProductDetail updateCart={addToCart}></ProductDetail> 
          </Route>
          <Route path="/cart">
            <Cart finalCart={cart}></Cart>
          </Route>
          <Route path="/checkout">
          <Checkout finalCart={cart}></Checkout>
          </Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/confirmationpage">
            <ConfirmationPage></ConfirmationPage>
          </Route>
          <Route path="*" component={NotFoundPage}></Route>

        </Switch>

      </Router>
      </div>
  );
}

export default App;
