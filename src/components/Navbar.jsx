import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <h2>
        <NavLink to="/" className="navbar__title" onClick={() => setShowLinks(false)}>
          Cirrostrats
        </NavLink>
      </h2>

      <span className="material-symbols-outlined navbar__menu" onClick={() => setShowLinks(prev => !prev)}>
        menu
      </span>

      <nav className={`navbar__nav ${showLinks ? "open" : "closed"}`}>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <NavLink to="story" className="navbar__list__item__link">
              Our Story
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="contact" className="navbar__list__item__link">
              Contact Us
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="source" className="navbar__list__item__link">
              Source
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="guide" className="navbar__list__item__link">
              Guide
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="report" className="navbar__list__item__link">
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
