import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {API} from "aws-amplify";
import {useStripe} from "@stripe/react-stripe-js";

const StripeCheckoutButton = ({price, items}) => {
  console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const priceInCents = price * 100;
  const key =
    "pk_test_51J5CXxBtTeMvZ2U5KSo4RAv4h9sRtAx8dmq5wQx7ff1x0Sm7vsFCOq0vov1Oc2HHvn4wz1PSIdCiHt6qhDHroQhx00Bcg1mjmI";
  const stripe = useStripe();
  async function onToken(token) {
    const data = {
      body: {
        stripe: token,
        total: priceInCents
      }
    };
    await API.post("floraPayment", "/pay", data).then(response => {
      console.log(response);
      stripe.confirmCardPayment(response.body, {
        payment_method: {
          card: token.card
        }
      });
    });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Moiras Floras"
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeCheckoutButton;
