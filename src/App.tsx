
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


  //////////////////works here for product detail, try lifting state instead..?.///////
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
console.log(cart);
/////////////////////////////////////////////////////////////////////
  return (
    <div className="App">

      <Router>
        <nav>
          <Navbar></Navbar>
        </nav>
        
        <Switch>
          <Route path="/" exact={true} component={Home}>
            <Home updateCount={addToCart }></Home>
          </Route>
          <Route path="/productdetail/:id" component={ProductDetail}>
            <ProductDetail updateCount={addToCart}></ProductDetail>
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
