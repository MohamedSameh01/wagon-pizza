/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from "react";
import "./Delivery.css";
import Spiner from "../spiner/Spiner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Delivery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  const server = "https://admin.lightsoft.ch/";
  const [delivers, setDilevers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${server}api/Delivery/GetAllDelivery`);
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="animated-component"
    >
      <div className="postbox-container">
        <div className="postbox-item container">
          {delivers?.data && isLoading ? (
            <Spiner />
          ) : delivers?.data && Array.isArray(delivers.data) ? (
            delivers.data.map((deliver) => (
              <div key={deliver?.id} className="postbox-details">
                <h2>{deliver?.city}</h2>
                <p>{deliver?.postBox}</p>
                <p>OrderAb: {deliver?.orderAb.toFixed(2)} CHF</p>
              </div>
            ))
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Delivery;
