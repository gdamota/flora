import React from "react";
import FancyButton from "./fancy_button";

import "./styles/cart_dropdown.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <FancyButton>CHECKOUT</FancyButton>
  </div>
);

export default Cart;
