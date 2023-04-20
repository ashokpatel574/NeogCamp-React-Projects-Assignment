import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="sideBar_container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="inbox">Inbox</NavLink>
          </li>
          <li>
            <NavLink to="sent">Sent</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
