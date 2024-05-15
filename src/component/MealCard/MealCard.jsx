/* eslint-disable react/prop-types */
// import React from 'react'
import "./MealCard.css";
import { FaCartShopping } from "react-icons/fa6";

const MealCard = ({ imageSrc, mealName, price,description,width }) => {
  price = price.toFixed(2);
  return (
    <div className="card" style={{width:width}}>
      <img src={imageSrc} alt={mealName} className="card-image" />
      <div className="card-content">
        <h2 className="meal-name">{mealName}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <span className="price">{price} CHF</span>
          <span className="cart-icon">
            <FaCartShopping />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
