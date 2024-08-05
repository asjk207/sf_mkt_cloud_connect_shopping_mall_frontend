// src/components/Header/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div style={{ padding: '20px 50px' }}>
      <input type="text" placeholder="Search products..." style={{ width: '70%', padding: '10px' }} />
      <button style={{ padding: '10px 20px' }}>Search</button>
    </div>
  );
};

export default SearchBar;
