import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceInCents = price * 100;
  const key = "";
  const onToken = token => {
    console.log(token);
    alert("SUMBITED");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Moiras Floras"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeCheckoutButton;
