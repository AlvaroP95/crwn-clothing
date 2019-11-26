import StripeCheckout from "react-stripe-checkout";

import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
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
