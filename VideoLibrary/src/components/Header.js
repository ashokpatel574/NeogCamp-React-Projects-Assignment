import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function styleNavLink({ isActive }) {
    return {
      color: isActive && "red",
      textDecoration: isActive && "underline",
    };
  }
  return (
    <header>
      <nav className="header_nav-container">
        <ul>
          <li>
            <NavLink style={styleNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="/allVideos">
              All Videos
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="likedVideos">
              Liked Videos
            </NavLink>
          </li>
          <li>
            <NavLink style={styleNavLink} to="watchLater">
              Watch Later
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
