import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <h2>Cirrostrats</h2>

      <span className="material-symbols-outlined navbar__menu">menu</span>
      {/* <nav className="navbar__nav">
        <ul className="navbar__list">
          <li></li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
