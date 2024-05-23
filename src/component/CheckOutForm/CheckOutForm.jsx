/* eslint-disable no-unused-vars */
// import React from 'react'
import "./CheckOutForm.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import checkOut from "../../assets/images/checkOut.jpg";

const CheckOutForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const server = import.meta.env.VITE_SERVER;
  const [delivers, setDilevers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="animated-component"
      // onClick={showModal}
    >
      <div className="check-out">
        <div className="check-out-image">
          <img src={checkOut} alt="checkOut" />
        </div>
        <div className="check-out-container">
          <form id="orderForm">
            <h2>Order Form</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street:</label>
              <input type="text" id="street" name="street" required />
            </div>

            <div className="form-group">
              <label htmlFor="city">City:</label>
              {delivers?.data && (
                <select
                  className="select-city"
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value={""}>select City</option>
                  {delivers.data &&
                    delivers.data.map((del) => {
                      return (
                        <option value={del.orderAb} key={del.id}>
                          {" "}
                          {del.postBox} , {del.city}
                        </option>
                      );
                    })}
                </select>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="discountCode">Discount Code:</label>
              <input type="text" id="discountCode" name="discountCode" />
            </div>
            <div className="form-group">
              <label htmlFor="deliveryTime">Delivery Time:</label>
              <input
                type="time"
                id="deliveryTime"
                name="deliveryTime"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes:</label>
              <textarea id="notes" name="notes"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOutForm;
