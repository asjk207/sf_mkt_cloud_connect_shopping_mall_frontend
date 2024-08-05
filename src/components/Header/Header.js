// src/Header/Header.js
import React from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import MainBanner from '../Banner/MainBanner';

const Header = () => {
    return (
      <div className='Header'>
          <TopBar />
          <SearchBar />
          <MainBanner />
      </div>
    );
  };
  
  export default Header;