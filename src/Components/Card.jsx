import React from "react";
import "./Card.css";

const Card = ({ id, img, name, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-details">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
