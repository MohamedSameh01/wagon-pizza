/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Nav.css";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

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


  const toggleCart = () => {
    setIsCart((prev) => !prev);
  };
  const handleClickOutsideCart = (event) => {
    if (isCart && cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCart(false);
    }
  };
  useEffect(() => {
    if (isCart) {
      document.addEventListener("click", handleClickOutsideCart, true);
      return () => {
        document.removeEventListener("click", handleClickOutsideCart, true);
      };
    }
  }, [isCart]);


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
          <button className="login-btn">
            <Link to="Login">Login</Link>
          </button>
          <div className="cart-container">
            <FaCartShopping className="cart" onClick={toggleCart} />
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
      {/* {isCart && (
        <div ref={cartRef} className="menue-links shoping-cart ">
          <div className="cart-item">
            <img src={Logo} alt="Product Image" className="product-image" />
            <div className="item-details">
              <p className="product-name">Product Name</p>
              <span>Qty : </span>
              <span>1</span>
              <br />
              <span>price : 11 $</span>
            </div>
            <div className="control-btns">
              <CiCirclePlus className="plus pointer" />
              <CiCircleMinus className="minus pointer" />
              <MdDelete className="delete pointer" />
            </div>
          </div>
        </div>
      )} */}

      {/* menue button */}
      {isMenue && (
        <div ref={menueRef} className="menue-links">
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
      )}
    </header>
  );
};

export default Nav;
