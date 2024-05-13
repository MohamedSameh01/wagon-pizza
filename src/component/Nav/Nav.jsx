// import React from 'react'
import "./Nav.css";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>
            <span className="highlight">wagon</span>pizza
          </h1>
        </div>

        <div className="navigation">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#menu" className="nav__link">
                Menü
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav__link">
                Reservation
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav__link">
                Angebote & Gustscheine{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav__link">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-buttons">
          <button>Login</button>
          <div className="cart-container">
            <FaCartShopping className="cart" />
            <span className="quantity">0</span>
          </div>
          <div className="menu-btn">
            <CiMenuBurger className="menu"/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
