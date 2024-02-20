import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavigationBar.css'; // Importing the CSS file

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
