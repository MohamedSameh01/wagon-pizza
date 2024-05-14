/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Nav.css";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isMenue, setIsMenue] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const menueRef = useRef(null);
  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menueRef.current && !menueRef.current.contains(event.target)) {
      setIsMenue(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);



  // const handleClickOutsideCart = (event) => {
  //   if (cartRef.current && !cartRef.current.contains(event.target)) {
  //     setIsMenue(false);
  //   }
  // };



  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);


  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>
              <span className="highlight">wagon</span>pizza
            </h1>
          </div>
        </Link>

        <div className="navigation">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="menue">Menue</Link>
            </li>
            <li className="nav-item">
              <Link to="reservation">Reservation</Link>
            </li>
            <li className="nav-item">
              <Link to="angebote">Angebote & Gustscheine</Link>
            </li>
            <li className="nav-item">
              <Link to="kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <div className="cart-container">
            <FaCartShopping className="cart" />
            <span className="quantity">0</span>
          </div>
          <div className="menu-btn">
            <CiMenuBurger
              className="menu"
              onClick={() => setIsMenue(!isMenue)}
            />
          </div>
        </div>
      </nav>

      {/* shoping cart */}
      {/* <div ref={cartRef} className="shoping-cart">

        </div> */}

      <div
        ref={menueRef}
        className={`menue-links ${isMenue ? "visible" : "hidden"}`}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" onClick={() => setIsMenue(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="menue" onClick={() => setIsMenue(false)}>
              Menue
            </Link>
          </li>
          <li className="nav-item">
            <Link to="reservation" onClick={() => setIsMenue(false)}>
              Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link to="angebote" onClick={() => setIsMenue(false)}>
              Angebote & Gustscheine
            </Link>
          </li>
          <li className="nav-item">
            <Link to="kontakt" onClick={() => setIsMenue(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
