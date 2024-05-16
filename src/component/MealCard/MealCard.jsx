/* eslint-disable react/prop-types */
// import React from 'react'
import { useDispatch } from "react-redux";
import "./MealCard.css";
import { FaCartShopping } from "react-icons/fa6";
import { addMeal } from "../../reduxTool/CartSlice";

const MealCard = ({ meal, width }) => {
  const dispatch = useDispatch();
  const server = "https://admin.lightsoft.ch/";
  return (
    <div className="card" style={{ width: width }}>
      <img
        src={`${server}Images/${meal.photoName}`}
        alt={meal.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="meal-name">{meal.name}</h2>
        <p>{meal.description1}</p>
        <div className="card-footer">
          <span className="price">{meal.price.toFixed(2)} CHF</span>
          <span className="cart-icon">
            <FaCartShopping onClick={() => dispatch(addMeal(meal))} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
