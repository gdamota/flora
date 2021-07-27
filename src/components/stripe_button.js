import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {createOrder} from "..//graphql/mutations";
import {API, graphqlOperation} from "aws-amplify";
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
    const data = {
      body: {
        name: name,
        address: address,
        zip_code: zip,
        state: state,
        products: items,
        total: price * 100,
        status: "unfiled"
      }
    };

    await API.graphql(graphqlOperation(createOrder));

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
      <form className="payment-form" onsubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onchange={e => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="address"
          placeholder="address"
          value={address}
          onchange={e => setAddress(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="zip"
          placeholder="zip"
          value={zip}
          onchange={e => setZip(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="state"
          placeholder="state"
          value={state}
          onchange={e => setState(e.target.value)}
        />
        <h3>Card Information</h3>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
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
        <button className="payment-button" type="submit" value="Submit">
          Pay
        </button>
      </form>
    </Paper>
  );
};

export default StripeCheckoutForm;
