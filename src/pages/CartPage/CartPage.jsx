/* eslint-disable react/prop-types */
// import React from 'react'
import ShoppingCart from '../../component/ShoppingCart/ShoppingCart'
import Delivery from "../../component/Delivery/Delivery"
const CartPage = ({ setCheckoutAllowed }) => {
  return (
    <div>
      <ShoppingCart setCheckoutAllowed={setCheckoutAllowed} />
      <Delivery />
    </div>
  );
};

export default CartPage