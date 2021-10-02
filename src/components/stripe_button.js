import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {createOrder} from "../graphql/mutations";
import {API, Auth} from "aws-amplify";
import emailjs from "emailjs-com";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import "./styles/stripe.scss";

const StripeCheckoutForm = ({price, items}) => {
  const stripe = useStripe();
  const elements = useElements();

  let [name, setName] = useState();
  let [address, setAddress] = useState();
  let [zip, setZip] = useState();
  let [state, setState] = useState();
  let [confirmation, setConfirmation] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
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
      products: JSON.stringify(
        items.map(item => ({
          product_name: item.name,
          quantity: item.quantity
        }))
      ),
      price: price,
      status: "unfiled",
      stripe_id: stripe_id
    };
    await API.graphql({
      query: createOrder,
      variables: {input: order}
    }).then(res => {
      console.log(res);
      setConfirmation("Thank You");
    });

    try {
      const templateParams = {
        email: Auth.user.attributes.email,
        message: JSON.stringify(order)
      };

      await emailjs.send(
        "flora_order_confirmation",
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Paper elevation={3}>
      {confirmation ? (
        <p>
          Thank you for your purchase! We will email you when your item(s) ship
          with the tracking information. Items usually ship within three to five
          business days.
        </p>
      ) : (
        <form className="payment-form">
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
        </form>
      )}
    </Paper>
  );
};

export default StripeCheckoutForm;
