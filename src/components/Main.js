// src/components/Main.js
import React from 'react';
import Header from './Header/Header';
import CategoriesMenu from './ProductCategories/CategoriesMenu';
import FeaturedProducts from './Products/FeaturedProducts';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div className='Main'>
        <Header />
        <CategoriesMenu />
        <FeaturedProducts />
        <Footer />
    </div>
  );
};

export default Main;