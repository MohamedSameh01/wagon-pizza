/* eslint-disable no-unused-vars */
// import React from 'react'
import "./Nav.css";
import Logo from "../../assets/85a30340-f824-4e4a-b2a5-c5d808affecc.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link,NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addMeal, deleteMeal, removeMeal } from "../../reduxTool/CartSlice";

const Nav = () => {
  const [isMenue, setIsMenue] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const server = "https://admin.lightsoft.ch/";
  const menueRef = useRef(null);
  const cartRef = useRef(null);
  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cart)
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
    console.log("cart",cart.cart)

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="menue">Menue</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="reservation">Reservation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="angebote">Angebote & Gustscheine</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-buttons">
          {/* <button className="login-btn">
            <Link to="Login">Login</Link>
          </button> */}
          <div className="cart-container">
            <FaCartShopping className="cart" onClick={toggleCart} />
            <span className="quantity">{cart.cart.length}</span>
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
      {isCart && (
        <div ref={cartRef} className="shoping-cart ">
          {
            cart.cart&&
            cart.cart.map((item)=>{
              return (
                <div className="cart-item" key={item.id}>
                  <img
                    src={`${server}Images/${item.photoName}`}
                    alt="Product Image"
                    className="product-image"
                  />
                  <div className="item-details">
                    <p className="product-name">{item.name}</p>
                    <span>Qty : </span>
                    <span>{item.quantity}</span>
                    <br />
                    <span>price : {item.price.toFixed(2)} $</span>
                  </div>
                  <div className="control-btns">
                    <CiCirclePlus
                      className="plus pointer"
                      onClick={() => dispatch(addMeal(item))}
                    />
                    <CiCircleMinus
                      className="minus pointer"
                      onClick={() => dispatch(deleteMeal(item))}
                    />
                    <MdDelete
                      className="delete pointer"
                      onClick={() => dispatch(removeMeal(item))}
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
      )}

      {/* menue button */}
      {isMenue && (
        <div ref={menueRef} className="menue-links">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/" onClick={() => setIsMenue(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="menue" onClick={() => setIsMenue(false)}>
                Menue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="reservation" onClick={() => setIsMenue(false)}>
                Reservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="angebote" onClick={() => setIsMenue(false)}>
                Angebote & Gustscheine
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="kontakt" onClick={() => setIsMenue(false)}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
