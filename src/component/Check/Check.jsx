/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Check.css"

const Check = ({prePrice,discount,totalPrice}) => {
  return (
    <div className="check">
      <h1 className="highlight">Rechnung </h1>
      <h2>Preis vor Rabatt</h2>
      <p>CHF {prePrice.toFixed(2)} </p>
      <h2>Rabatt</h2>
      <p>CHF {discount.toFixed(2)} </p>
      <h2>Der Endpreis</h2>
      <p>CHF {totalPrice.toFixed(2)} </p>
    </div>
  );
}

export default Check