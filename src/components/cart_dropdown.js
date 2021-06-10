import React from "react";
import FancyButton from "./fancy_button";
import CartItem from "./cart_item";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {toggleCartHidden} from "../redux/cart/cart_actions";

import "./styles/cart_dropdown.scss";

const Cart = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message"> Your Cart is Empty</span>
      )}
    </div>
    <FancyButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </FancyButton>
  </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
