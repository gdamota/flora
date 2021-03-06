import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../redux/cart/cart_selectors";
import CheckoutItem from "../components/checkout_item";
import StripeCheckoutButton from "../components/stripe_button";
import {withAuthenticator} from "@aws-amplify/ui-react";
import "./styles/checkout.scss";

const CheckoutPage = ({cartItems, total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span> TOTAL: ${total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withAuthenticator(connect(mapStateToProps)(CheckoutPage));
