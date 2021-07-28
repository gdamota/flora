import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {createOrder} from "..//graphql/mutations";
import {API, Auth} from "aws-amplify";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import "./styles/stripe.scss";

const StripeCheckoutForm = ({price, items}) => {
  const stripe = useStripe();
  const elements = useElements();

  let [name, setName] = useState();
  let [address, setAddress] = useState();
  let [zip, setZip] = useState();
  let [state, setState] = useState();

  async function handleSubmit() {
    let stripe_id;
    const paymentData = {
      body: {
        price: price
      }
    };
    await API.post("floraPayment", "/pay", paymentData).then(response => {
      stripe_id = response.body.id;
      stripe.confirmCardPayment(response.body.client_secret, {
        payment_method: {
          type: "card",
          card: elements.getElement(CardElement)
        }
      });
    });

    const order = {
      name: name,
      email: Auth.user.attributes.email,
      address: address,
      zip_code: zip,
      state: state,
      products: JSON.stringify(items.map(item => [item.name, item.quantity])),
      price: price,
      status: "unfiled",
      stripe_id: stripe_id
    };

    await API.graphql({
      query: createOrder,
      variables: {input: order}
    }).then(res => {
      console.log(res);
      alert("Thank you for your purchase!");
    });
  }

  return (
    <Paper elevation={3}>
      <div className="payment-form">
        <h3>Shipping Information</h3>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="address"
          placeholder="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="zip"
          placeholder="zip"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="state"
          placeholder="state"
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <h3>Card Information</h3>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "14px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4"
                }
              },
              invalid: {
                color: "#9e2146"
              }
            }
          }}
        />
        <button
          className="payment-button"
          onClick={handleSubmit}
          disabled={!address || !name || !zip || !state}
        >
          Pay
        </button>
      </div>
    </Paper>
  );
};

export default StripeCheckoutForm;
