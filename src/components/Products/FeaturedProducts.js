// src/components/Products/FeaturedProducts.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "path-to-image-1.jpg" },
    { id: 2, name: "Product 2", price: 49.99, image: "path-to-image-2.jpg" },
    { id: 3, name: "Product 3", price: 19.99, image: "path-to-image-3.jpg" },
];

const FeaturedProducts = () => {
  return (
    <div className="FeaturedProducts" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'black' }}>
          <div>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <p>{product.name} - ${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProducts;
