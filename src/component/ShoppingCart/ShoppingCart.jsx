/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState, useEffect } from "react";
import "./ShoppingCart.css";
import Image from "../../assets/images/panerBoy.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addMeal,
  addMealFromCart,
  deleteMeal,
  removeMeal,
} from "../../reduxTool/CartSlice";
import emptyCart from "../../assets/images/emptyCart.png";
import { useNavigate } from "react-router-dom";
const ShoppingCart = ({ setCheckoutAllowed }) => {
  const [cartData, setCartData] = useState([]);
  const [delivers, setDilevers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [minimumOrderAb, setMinimumOrderAb] = useState("");
  const cart = useSelector((state) => state.cart);
  const server = import.meta.env.VITE_SERVER;
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleOrderClick = () => {
      setCheckoutAllowed(true);
      navigate("/cart/checkOut");
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  // console.log(cart);

  console.log("minimumOrderAb", typeof(minimumOrderAb));

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${server}/api/Delivery/GetAllDelivery`);
        if (!response.ok) {
          // throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDilevers(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="cart-container">
      <h1 className="highlight">Cart</h1>
      {cart.totalItems === 0 && (
        <img className="empty-cart" src={emptyCart} alt="emptyCart" />
      )}
      {cart.totalItems > 0 && (
        <select
          className="select-city"
          onChange={(e) => setMinimumOrderAb(e.target.value)}
        >
          <option value={""}>select City</option>
          {delivers.data &&
            delivers.data.map((del) => {
              return (
                <option value={del.orderAb} key={del.id}>
                  {" "}
                  {del.postBox} {del.city}
                </option>
              );
            })}
        </select>
      )}
      {cart.totalItems > 0 &&
        cart.cart.map((meal, index) => {
          return (
            <div className="cart-item" key={index}>
              <img
                src={`${server}/Images/${meal.photoName}`}
                alt={meal.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{meal.name}</h3>
                <p className="price">
                  Price:{" "}
                  <span className="highlight">
                    CHF {meal.totalPrice.toFixed(2)}
                  </span>
                </p>
                <p className="description" key={top.id}>
                  {meal.topings.map((top) => {
                    return (
                      <span key={top.id} className="cart-topings">
                        {top.name} ,{" "}
                      </span>
                    );
                  })}
                </p>
                <div className="quantity-container">
                  Quantity: <span className="highlight"> {meal.quantity}</span>
                </div>
                <div className="cart-buttons">
                  <button
                    className="remove-button"
                    onClick={() => dispatch(addMealFromCart(meal))}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => dispatch(deleteMeal(meal))}
                  >
                    -
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => dispatch(removeMeal(meal))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      {cart.totalItems > 0 && (
        <>
          <h2 className="total-price">
            Total Price : CHF
            <span className="highlight">
              {" "}
              {cart.totalPrice.toFixed(2)}{" "}
            </span>{" "}
          </h2>
          {/* <input
            className="copon"
            type="text"
            placeholder="Do u have copon.... ?"
          /> */}
          {minimumOrderAb === "" && <p className="minimumOrderAb">You must select area ....</p>}
          {cart.totalPrice < minimumOrderAb && minimumOrderAb !== "" && (
            <p className="minimumOrderAb">
              you must request order more than or equal the minimumOrderAb CHF {parseFloat(minimumOrderAb).toFixed(2)}
            </p>
          )}
          <button
            className="shopping-cart-order"
            onClick={handleOrderClick}
            disabled={
              cart.totalPrice < minimumOrderAb || minimumOrderAb === ""
                ? true
                : false
            }
          >
            Order
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
