import React, { useState } from 'react';
import './Navbar.css'; // Ensure you create a CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img className="logo-name"src='src\assets\priyankalogo.png'></img></div>
      <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Clients</a>
        <button className='contactus'>Contact Us</button>
      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;
