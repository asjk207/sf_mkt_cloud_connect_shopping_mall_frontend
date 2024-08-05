// src/components/Banner/MainBanner.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <Link to={`/`}>
      <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
        <img src="banner.jpg" alt="Main Banner" style={{ width: '100%', height: '200px' }} />
      </div>
    </Link>
  );
};

export default MainBanner;
