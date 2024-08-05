import React from 'react';

const ProductInfo = ({ name, price, originalPrice }) => {
    const discount = ((originalPrice - price) / originalPrice * 100).toFixed(0);

    return (
        <div>
            <h1>{name}</h1>
            <h2>₩{price.toLocaleString()}</h2>
            <p>Original Price: ₩{originalPrice.toLocaleString()} | Save {discount}%</p>
        </div>
    );
};

export default ProductInfo;
