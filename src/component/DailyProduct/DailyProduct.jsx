// import React from 'react'
import { useEffect, useState } from "react";
import "./DailyProduct.css";
import MealCard from "../MealCard/MealCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DailyProduct = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const server = import.meta.env.VITE_SERVER;
  const [dailyProduct, setDailyProducts] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${server}/api/Product/GetHomeProducts`);
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
  // console.log("dailyProducts", dailyProduct.data);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="animated-component"
    >
      <div className="dailyProduct container">
        <h1>
          <span>Daily</span> Products
        </h1>
        <div className="cards">
          {dailyProduct.data &&
            dailyProduct?.data?.map((product) => {
              return <MealCard key={product.id} meal={product} />;
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default DailyProduct;
