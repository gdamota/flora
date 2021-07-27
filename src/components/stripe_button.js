import React from "react";
// import StripeCheckout from "react-stripe-checkout";
import Paper from "@material-ui/core/Paper";
import {API} from "aws-amplify";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

const StripeCheckoutForm = ({price, items}) => {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit() {
    const data = {
      body: {
        total: price * 100
      }
    };
    await API.post("floraPayment", "/pay", data).then(response => {
      console.log(response);
      stripe.confirmCardPayment(response.body, {
        payment_method: {
          type: "card",
          card: elements.getElement(CardElement)
        }
      });
    });
  }

  return (
    <Paper elevation={3}>
      <div className="payment-container">
        <form className="payment-form">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="address" placeholder="address" />
          <input type="text" name="state" placeholder="state" />
          <input type="text" name="zip" placeholder="zip" />
          <CardElement
          // options={{
          //   style: {
          //     base: {
          //       fontSize: "16px",
          //       color: "#424770",
          //       "::placeholder": {
          //         color: "#aab7c4"
          //       }
          //     },
          //     invalid: {
          //       color: "#9e2146"
          //     }
          //   }
          // }}
          />
          <button
            className="submitPayment"
            onClick={handleSubmit}
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
      </div>
    </Paper>
  );
};

export default StripeCheckoutForm;
