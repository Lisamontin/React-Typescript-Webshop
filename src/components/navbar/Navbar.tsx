import React from 'react';
import { Link } from 'react-router-dom';
import IFinalCart from '../../models/interface/IFinalCart';
import './Navbar.css';

export default function Navbar(props:IFinalCart) {

  return(
    <header className="navbar">
      <div className="logo">
        <h1><Link to="/">Logo</Link></h1>
      </div>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li className="cart-icon">
          <Link to="/cart"><span><i className="fas fa-shopping-cart"></i></span></Link>
        <span>{props.finalCart.length}</span>
        </li>
      </ul>
    </header>
  )
}
 