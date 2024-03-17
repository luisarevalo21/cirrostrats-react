import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      <h2>
        <NavLink
          to="/"
          className="navbar__title"
          style={isActive => ({
            color: isActive ? "white" : "black",
            textDecoration: "none",
          })}
          onClick={() => setShowLinks(false)}
        >
          Cirrostrats
        </NavLink>
      </h2>

      <span className="material-symbols-outlined navbar__menu" onClick={() => setShowLinks(prev => !prev)}>
        menu
      </span>

      <nav className={`navbar__nav ${showLinks ? "open" : "closed"}`}>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Search
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink
              to="story"
              className={({ isActive }) => (isActive ? "active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Our Story
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink
              to="source"
              className={({ isActive }) => (isActive ? "active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Source
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink
              to="guide"
              className={({ isActive }) => (isActive ? "active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Guide
            </NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink
              to="report"
              className={({ isActive }) => (isActive ? "navbar__list__item__link active" : "navbar__list__item__link")}
              onClick={() => setShowLinks(prev => !prev)}
            >
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
