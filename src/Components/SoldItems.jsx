import React from "react";
import { useShoeContext } from "./context/ShoeContext";
import "./SoldItems.css";
const SoldItems = () => {
  const { soldItems } = useShoeContext();

  return (
    <div className="sold-items-container">
      <h2>Sold Items</h2>
      <ul className="sold-item">
        {soldItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div>
              <h3>{item.name}</h3>
              <p className="sold-item-price">Price: {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoldItems;
