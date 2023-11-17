import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { useShoeContext } from "./Components/context/ShoeContext";
import "./App.css";
import SoldItems from "./Components/SoldItems";

const App = () => {
  const { getShoes, handleChangeAllShoes, addToCart, cart } = useShoeContext();

  const handleAddToCart = (shoe) => {
    addToCart(shoe);
  };

  return (
    <div>
      <Navbar cartItems={cart.length} />
      <div className="cards">
        {getShoes().map((shoe) => (
          <Card
            key={shoe.id}
            {...shoe}
            onAddToCart={() => handleAddToCart(shoe)}
          />
        ))}
      </div>
      <SoldItems />
      <button onClick={handleChangeAllShoes}>Change All Shoes</button>
    </div>
  );
};

export default App;
