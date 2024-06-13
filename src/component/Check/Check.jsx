/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Check.css"
import { useDispatch } from "react-redux";
import { handleCheck } from "../../reduxTool/CheckSlice";

const Check = ({prePrice,discount,totalPrice}) => {
 
  const dispatch=useDispatch();
  
  return (
    <div className="check">
      <h1 className="highlight">Rechnung </h1>
      <h2>Preis vor Rabatt</h2>
      <p>CHF {prePrice.toFixed(2)} </p>
      <h2>Rabatt</h2>
      <p>CHF {discount.toFixed(2)} </p>
      <h2>Der Endpreis</h2>
      <p>CHF {totalPrice.toFixed(2)} </p>

      <label>
        <input
          type="checkbox"
          onChange={()=>dispatch(handleCheck())}
        />
        Ich habe die Allgemeine Geschäftsbestimmungen gelesen und stimme ihnen
        zu.
      </label>
    </div>
  );
}

export default Check