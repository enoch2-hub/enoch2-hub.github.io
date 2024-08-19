import React, { useState } from "react";

import Backdrop from "./UIElements/Backdrop";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className="app-nav">
      <img
        src={require("../Assets/Images/Other/logo2.png")}
        alt="logo"
        className="logo"
      />
      <div className="menu-icon" onClick={toggleMenu}>
        <GiHamburgerMenu />a<i className="fas fa-bars fa-lg"></i>
      </div>
      <ul className={isOpen ? "menu open" : "menu"}>
        <li className="menu-item">
          <a href="#">Home</a>
        </li>
        <li className="menu-item">
          <a href="#">About</a>
        </li>
        <li className="menu-item">
          <a href="#">Services</a>
        </li>
        <li className="menu-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
