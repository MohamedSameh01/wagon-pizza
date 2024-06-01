// import React from 'react'

import { useNavigate } from "react-router-dom";
import "./SuccessPage.css" 
const SuccessPage = () => {
    const navigate=useNavigate();
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="icon-container">
            <span className="success-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="#f66f00"
                viewBox="0 0 24 24"
              >
                <path d="M10 15.172l-4.95-4.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z" />
              </svg>
            </span>
          </div>
          <h1>Payment Successful</h1>
          <p>
            Thank you for your payment! Your transaction has been completed
            successfully.
          </p>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    );
}

export default SuccessPage