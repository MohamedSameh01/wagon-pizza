/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState, useEffect } from "react";
import "./ShoppingCart.css";
import Image from "../../assets/images/panerBoy.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addMeal,addMealFromCart, deleteMeal, removeMeal } from "../../reduxTool/CartSlice";
const ShoppingCart = () => {
  const [cartData, setCartData] = useState([]);
  const cart = useSelector((state) => state.cart);
  const server = "https://admin.lightsoft.ch/";
  const dispatch=useDispatch();
  console.log(cart.cart);
  return (
    <div className="cart-container">
      <h1 className="highlight">Cart</h1>
      {cart.totalItems > 0 &&
        cart.cart.map((meal, index) => {
          return (
            <div className="cart-item" key={index}>
              <img
                src={`${server}Images/${meal.photoName}`}
                alt={meal.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{meal.name}</h3>
                <p className="price">
                  Price:{" "}
                  <span className="highlight">
                    {meal.totalPrice.toFixed(2)} CHF
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
      <h2 className="total-price">
        Total Price :
        <span className="highlight"> {cart.totalPrice.toFixed(2)} </span> CHF{" "}
      </h2>
      {cart.totalItems > 0 && (
        <button className="shopping-cart-order">Order</button>
      )}
    </div>
  );
};

export default ShoppingCart;
