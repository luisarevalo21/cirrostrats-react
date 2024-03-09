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
            <NavLink to="/" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Search
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="story" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Our Story
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="contact" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Contact Us
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="source" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Source
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="guide" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Guide
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="report" className="navbar__list__item__link" onClick={() => setShowLinks(prev => !prev)}>
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
