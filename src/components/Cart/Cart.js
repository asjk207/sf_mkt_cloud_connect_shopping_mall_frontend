// src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
    const initialCartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
        { id: 3, name: 'Product 3', price: 19.99, quantity: 3 }
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default Cart;
