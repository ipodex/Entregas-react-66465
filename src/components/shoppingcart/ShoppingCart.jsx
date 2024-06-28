import React from 'react';
import { useCart } from '../../CartContext';
import './shoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="shopping-cart">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              
              <span>${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;

