import React from "react";
import { NavLink } from "react-router-dom";

const styleNavLink = function ({ isActive }) {
  return {
    textDecoration: !isActive && "none",
    letterSpacing: "0.8px",
    color: isActive && "red",
    fontWeight: "700",
  };
};

const Header = () => {
  return (
    <header className="todo_header-container">
      <h1>Todo</h1>
      <nav>
        <ul>
          <li>
            <NavLink style={styleNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="/todoDone">
              TodoDone
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="/todoOpen">
              TodoOpen
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
