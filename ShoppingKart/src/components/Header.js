import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const styleNavLink = function ({ isActive }) {
    return {
      textDecoration: !isActive && "none",
      letterSpacing: "0.8px",
      color: isActive && "red",
      fontWeight: "700",
    };
  };

  return (
    <header className="shoppingKart_header-container">
      <h1>ShoppingKart</h1>
      <nav>
        <ul>
          <li>
            <NavLink style={styleNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="cart">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="wishList">
              WishList
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
