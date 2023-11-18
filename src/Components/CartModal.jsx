import React from "react";
import "./CartModal.css";
import { useShoeContext } from "./context/ShoeContext";

const CartModal = ({ isOpen, onClose }) => {
  const { markAsSold, cart } = useShoeContext();

  const handleMarkAsSold = (item) => {
    markAsSold(item.id);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => handleMarkAsSold(item)}>
                  Mark as Sold
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close Cart</button>
      </div>
    </div>
  );
};

export default CartModal;
