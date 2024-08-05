// src/components/Purchases/PurchaseOptions.js
import React, { useState } from 'react';

const PurchaseOptions = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    return (
        <div>
            <select onChange={e => setSelectedSize(e.target.value)} value={selectedSize}>
                {sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                ))}
            </select>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
    );
};

export default PurchaseOptions;
