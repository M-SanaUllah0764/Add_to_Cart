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
  const { cart, setSearchQuery, getShoes } = useShoeContext();
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchIconClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faBars} className="left-icons" />
      </div>
      <div className="logo">LOGO</div>
      <div className="navbar-right">
        <div className="navbar-center">
          {isSearchVisible && (
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
              />
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={faSearch}
          className="right-icons"
          onClick={handleSearchIconClick}
        />
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
