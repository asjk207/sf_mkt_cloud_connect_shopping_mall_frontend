// src/components/Header/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 50px', backgroundColor: '#f1f1f1' }}>
      <div>
        <img src="logo.png" alt="Logo" style={{ height: '50px' }} />
      </div>
      <div>
      <Link to={`/login`}>
        <a href="#login">Login</a>
      </Link>
      <Link to={`/cart`}>
        <a href="#cart">Cart</a>
      </Link>
      </div>
    </div>
  );
};

export default TopBar;
