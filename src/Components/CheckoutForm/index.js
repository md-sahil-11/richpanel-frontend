import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js/pure";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useApi from "../../hooks/useApi";

import "./style.css";

const stripePromise = loadStripe("pk_test_51LoA58SHZ7Csi1VC7xKELjKjTdd1Bpi5daAQgTbnqlWBsSX46XGWG1TRuLoiqpTghhpJK46pRkXWvgj4PYNIsa2H00NdTJ2NGZ");
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <label>
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}
function CheckoutForm({ priceId }) {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const api = useApi()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    console.log(paymentMethod);

    if (error) {
      console.log(error)
    } else {
      setLoading(true)
      api.post('subs/plans/subscribe', { price_id: priceId, payment_method_id: paymentMethod.id })
        .then((response) => {
          console.log(response.data);
          window.location.href = '/my-subscription'
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
  if (loading) return <h4>Loading...</h4>
  return (
    <form onSubmit={handleSubmit}>
      
      <CardSection />
      <br />
      <button
        style={{ width: 120, fontSize: 12 }}
        className="button"
        disabled={!stripe}
        // onClick={() => handleSubmit}
      >
        Confirm order
      </button>
    </form>
  );
}

const StripeCardForm = ({ priceId }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm priceId={ priceId } />
  </Elements>
);

export default StripeCardForm;
