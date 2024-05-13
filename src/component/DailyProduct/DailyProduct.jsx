// import React from 'react'
import { useEffect, useState } from "react";
import "./DailyProduct.css";
import MealCard from "../MealCard/MealCard";

const DailyProduct = () => {
  const server = "https://admin.lightsoft.ch/";
  const [dailyProduct, setDailyProducts] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${server}api/Product/GetHomeProducts`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDailyProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);
  console.log("dailyProducts", dailyProduct.data);
  return (
    <div className="dailyProduct container">
      <h1>
        <span>Daily</span> Products
      </h1>
      <div className="cards">
        {dailyProduct.data &&
          dailyProduct?.data?.map((product) => {
            return (
              <MealCard
                key={product.id}
                mealName={product.name}
                imageSrc={`${server}Images/${product.photoName}`}
                description={product.description}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DailyProduct;
