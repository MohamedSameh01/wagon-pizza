/* eslint-disable no-unused-vars */
// import React from 'react'

import PaymentForm from "../../component/PaymentForm/PaymentForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Payment.css"
import Check from "../../component/Check/Check";
const Payment = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  // publish Key
  const [clientSecret, setClientSecret] = useState("");
  const [prePrice,setPrePrice]=useState("");
  const [discount, setDiscount] = useState("");
  const [totalPrice,setTotalPrice]=useState("");
   const server = import.meta.env.VITE_SERVER;
   const publishKey = import.meta.env.VITE_PUPLISH_KEY;
  const stripePromise = loadStripe(`${publishKey}`);
    const location = useLocation();
    const keyId=location.state?.response;
    
   useEffect(() => {
     const createPaymentIntent = async () => {
       try {
         const response = await axios.post(
           `${server}/api/Cart/create-payment-intent`,{orderId:keyId});
          //  console.log("response", response);
            setPrePrice(response?.data?.cartTotalNumber);
            setDiscount(response?.data?.discountValue);
            setTotalPrice(response?.data?.totalAfterDiscount);
            setClientSecret(`${response?.data?.clientSecret}`);
       } catch (error) {
         console.error("Error creating payment intent:", error);
       }
     };
     createPaymentIntent();
   }, []);
  const appearance = {
    // theme: "stripe",
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="payment-container">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm orderID={keyId}/>
          <Check
            prePrice={prePrice}
            discount={discount}
            totalPrice={totalPrice}
          />
        </Elements>
      )}
    </div>
  );
}

export default Payment