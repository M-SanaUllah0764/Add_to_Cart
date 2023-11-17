import React from "react";
import { useShoeContext } from "./context/ShoeContext";

const SoldItems = () => {
  const { soldItems } = useShoeContext();

  return (
    <div>
      <h2>Sold Items</h2>
      <ul>
        {soldItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoldItems;
