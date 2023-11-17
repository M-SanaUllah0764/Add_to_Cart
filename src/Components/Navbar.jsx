import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import CartModal from "./CartModal";
import { useShoeContext } from "./context/ShoeContext";

const Navbar = () => {
  const { cart } = useShoeContext();
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faBars} className="left-icons" />
      </div>
      <div className="logo">LOGO</div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faSearch} className="right-icons" />
        <FontAwesomeIcon icon={faUser} className="right-icons" />
        <div className="cart-icon" onClick={toggleCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} className="right-icons" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </div>
      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal} />
    </nav>
  );
};

export default Navbar;
