/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from "react";
import "./Delivery.css";
import Spiner from "../spiner/Spiner";
const Delivery = () => {
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

  console.log(delivers);
  return (
    <div className="postbox-container">
      <div className="postbox-item">
        {delivers?.data && isLoading ? (
          <Spiner />
        ) : delivers?.data && Array.isArray(delivers.data) ? (
          delivers.data.map((deliver) => (
            <div key={deliver?.id} className="postbox-details">
              <h2>City: {deliver?.city}</h2>
              <p>PostBox: {deliver?.postBox}</p>
              <p>OrderAb: {deliver?.orderAb}</p>
            </div>
          ))
        ) : (
            ""
        )}
      </div>
    </div>
  );
};

export default Delivery;
