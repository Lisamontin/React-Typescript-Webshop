import { homedir } from 'os';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import ProductDetail from "./components/product-detail/ProductDetail"


function App() {
  return (
    <>
      <Router>
        <nav></nav>
        
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/productdetail" component={ProductDetail}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          
        </Switch>

      </Router>
    </>
  );
}

export default App;
