
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Home from './components/home/Home';
import NotFoundPage from './components/notfoundpage/NotFoundPage';
import ProductDetail from "./components/product-detail/ProductDetail"


function App() {
  return (
    <>
      <Router>
        <nav><Link to="Cart"><span><i className="fas fa-shopping-cart"></i></span></Link></nav>
        
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/productdetail" component={ProductDetail}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/admin" component={Admin}></Route>

          

          <Route path="*" component={NotFoundPage}></Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
