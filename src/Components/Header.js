// Header.js
import React from 'react';
import NavigationBar from './NavigationBar';
import './Header.css'; // Importing the CSS file

function Header() {
  return (
    <header>
      <img src="logo1.png" alt="Logo" /> 
      <NavigationBar />
    </header>
  );
}

export default Header;

