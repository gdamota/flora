import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../redux/cart/cart_selectors";
import CheckoutItem from "../components/checkout_item";
import StripeCheckoutForm from "../components/stripe_button";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import "./styles/checkout.scss";

const CheckoutPage = ({cartItems, total}) => {
  const key =
    "pk_test_51J5CXxBtTeMvZ2U5KSo4RAv4h9sRtAx8dmq5wQx7ff1x0Sm7vsFCOq0vov1Oc2HHvn4wz1PSIdCiHt6qhDHroQhx00Bcg1mjmI";
  const stripePromise = loadStripe(key);
  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-page">
        <div className="total">
          <span> TOTAL: ${total.toFixed(2)}</span>
        </div>
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
        <div className="checkout">
          <StripeCheckoutForm price={total} items={cartItems} />
        </div>
      </div>
    </Elements>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withAuthenticator(connect(mapStateToProps)(CheckoutPage));
