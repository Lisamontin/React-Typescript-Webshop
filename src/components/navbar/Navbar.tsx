import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {

  return(
    <header className="navbar">
      <div className="logo">
        <h1><Link to="/">Logo</Link></h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Products</Link></li>
        <li>
          <Link to="Cart"><span><i className="fas fa-shopping-cart"></i></span></Link>
        </li>
      </ul>
    </header>
  )
}
