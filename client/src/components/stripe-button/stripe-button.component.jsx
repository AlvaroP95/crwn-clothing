import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card"
        );
      });
  };

  const priceForStripe = price * 100;
  const publishableKey = "pk_test_V4pT4tepCPVfZ3nUqSg3tpWN000LeMJxfd";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
