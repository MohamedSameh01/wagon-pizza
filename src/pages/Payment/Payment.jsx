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
  // publish Key
  const [clientSecret, setClientSecret] = useState("");
   const server = import.meta.env.VITE_SERVER;
  const stripePromise = loadStripe(
    "pk_test_51PBrSnRqgrJpcKxeJjMH7PizBA16oVuTCnCdp3v6vQVEimO9NQ3bnqrhDKyIUGimLkJwGFTEb0OYOuX2QXeZAplg00TQalEuPv"
  );
    const location = useLocation();
    const keyId=location.state?.response;
    console.log("keyId",keyId)

   useEffect(() => {
     const createPaymentIntent = async () => {
       try {
         const response = await axios.post(
           `${server}/api/Cart/create-payment-intent`,{orderId:keyId});
            console.log(response)
         setClientSecret(`${response?.data?.clientSecret}`);
       } catch (error) {
         console.error("Error creating payment intent:", error);
       }
     };
     createPaymentIntent();
   }, []);
   console.log("clientSecret",clientSecret)
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
          <PaymentForm  />
          <Check/>
        </Elements>
      )}
    </div>
  );
}

export default Payment