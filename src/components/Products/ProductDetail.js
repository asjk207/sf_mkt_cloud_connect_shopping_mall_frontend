// src/components/Products/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../ImageGallery';
import ProductInfo from '../Products/ProductInfo';
import PurchaseOptions from '../Purchases/PurchaseOptions';
import Header from '../Header/Header';

const products = [
  { id: 1,
    name: "시원한 여름 반팔 남성 티셔츠",
    price: 30800,
    originalPrice: 50000,
    images: [
        "path-to-main-image.jpg",
        "path-to-image-1.jpg",
        "path-to-image-2.jpg",
        "path-to-image-3.jpg"
    ],
    sizes: ["M", "L", "XL"],
    description: "Detailed description of the product." },
  { id: 2,
    name: "따뜻한 겨울 긴팔 셔츠",
    price: 49800,
    originalPrice: 150000,
    images: [
        "path-to-main-image.jpg",
        "path-to-image-1.jpg",
        "path-to-image-2.jpg",
        "path-to-image-3.jpg"
    ],
    sizes: ["M", "L", "XL"],
    description: "Detailed description of the product." },
  { id: 3, 
    name: "안정감 있는 가을 니트",
    price: 60800,
    originalPrice: 80000,
    images: [
        "path-to-main-image.jpg",
        "path-to-image-1.jpg",
        "path-to-image-2.jpg",
        "path-to-image-3.jpg"
    ],
    sizes: ["M", "L", "XL"],
    description: "Detailed description of the product." },
];

const ProductDetail = () => {
  let { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="ProductDetail">
        <Header />
        <ImageGallery images={product.images} />
        <ProductInfo name={product.name} price={product.price} originalPrice={product.originalPrice} />
        <PurchaseOptions sizes={product.sizes} />
    </div>
  );
};

export default ProductDetail;